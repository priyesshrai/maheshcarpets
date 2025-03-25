import pool from "@/lib/db.con";

export async function GET(req, { params }) {
  const { blogId } = await params;

  if (!blogId) {
    return Response.json(
      { success: false, message: "Blog ID is required" },
      { status: 400 }
    );
  }

  try {
    const query = "SELECT * FROM blogs WHERE blog_slug = ?";
    const [blog] = await pool.execute(query, [blogId]);

    if (blog.length === 0) {
      return Response.json(
        { success: false, message: "Blog not found" },
        { status: 404 }
      );
    }

    return Response.json(
      {
        success: true,
        data: blog[0],
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
