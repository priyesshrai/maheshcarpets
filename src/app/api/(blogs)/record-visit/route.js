import pool from "@/lib/db.con";
import { getUserIP } from "@/lib/getUserIP";

export async function POST(req) {
  const { blogId } = await req.json();
  const userIp = getUserIP(req);
  const visitDate = new Date().toISOString().split("T")[0];

  // console.log("Blog ID:", blogId);
  // console.log("User IP:", userIp);
  // console.log("Visit Date:", visitDate);

  if (!blogId) {
    return Response.json(
      { success: false, message: "Blog ID is required" },
      { status: 400 }
    );
  }

  try {
    const query = `
      INSERT IGNORE INTO blog_visits (blog_id, user_ip, visit_date)
      VALUES (?, ?, ?)
    `;
    const [result] = await pool.execute(query, [blogId, userIp, visitDate]);

    if (result.affectedRows > 0) {
      return Response.json(
        { success: true, message: "Visit recorded successfully" },
        { status: 201 }
      );
    } else {
      return Response.json(
        { success: true, message: "Visit already recorded for today" },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Database error:", error);
    return Response.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
