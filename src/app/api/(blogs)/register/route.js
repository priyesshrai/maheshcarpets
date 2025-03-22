import bcrypt from "bcryptjs";
import pool from "@/lib/db.con";

export async function POST(req) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return Response.json(
        { success: false, message: "Username and password are required" },
        { status: 400 }
      );
    }

    const checkQuery = "SELECT * FROM admin WHERE username = ?";
    const [existingAdmin] = await pool.execute(checkQuery, [username]);

    if (existingAdmin.length > 0) {
      return Response.json(
        { success: false, message: "Admin already exists with this username" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const query = "INSERT INTO admin (username, password) VALUES (?, ?)";
    const values = [username, hashedPassword];

    await pool.execute(query, values);

    return Response.json(
      { success: true, message: "Admin registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Database error:", error);
    return Response.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
