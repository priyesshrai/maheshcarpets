import pool from "@/lib/db.con";

export async function POST(req) {
  const { blogId } = await req.json();

  if (!blogId) {
    return Response.json(
      { success: false, message: "Blog ID is required" },
      { status: 400 }
    );
  }
  console.log(blogId);
  

  try {
    const query = `
      SELECT COUNT(*) AS total_visits
      FROM blog_visits
      WHERE blog_id = ?
    `;
    const [result] = await pool.execute(query, [blogId]);

    return Response.json(
      {
        success: true,
        data: result[0].total_visits,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Database error:", error);
    return Response.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
