import pool from "@/lib/db.con";

export async function GET(req, res) {
  try {
    const query = "SELECT blog_title FROM blogs ORDER BY created_at DESC";
    const [blogsTitle] = await pool.execute(query);

    return Response.json(
      {
        success: true,
        data: blogsTitle,
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
