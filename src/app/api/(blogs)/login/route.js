import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import pool from "@/lib/db.con";
import { cookies } from "next/headers";

const SECRET_KEY = process.env.JWT_SECRET;

export async function POST(req) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return Response.json(
        { success: false, message: "Username and password are required" },
        { status: 400 }
      );
    }

    const query = "SELECT * FROM admin WHERE username = ?";
    const [admin] = await pool.execute(query, [username]);

    if (admin.length === 0) {
      return Response.json(
        { success: false, message: "Invalid username or password" },
        { status: 401 }
      );
    }

    const isValidPassword = await bcrypt.compare(password, admin[0].password);

    if (!isValidPassword) {
      return Response.json(
        { success: false, message: "Invalid username or password" },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      { adminId: admin[0].admin_id, username: admin[0].username },
      SECRET_KEY,
      { expiresIn: "7d" }
    );

    cookies().set("token", token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60, 
    });

    return Response.json({ success: true, message:"Login Success" }, { status: 200 });
  } catch (error) {
    console.error("Login error:", error);
    return Response.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
