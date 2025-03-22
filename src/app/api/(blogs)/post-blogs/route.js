import pool from "@/lib/db.con";

export async function POST(req) {
  try {
    const { id, title, content, img } = await req.json();
    
    if (!title || !content) {
      return Response.json(
        { success: false, message: "Title and content are required" },
        { status: 400 }
      );
    }
    const slug = await title.toLowerCase().split(' ').join('-')
    
    const query = "INSERT INTO blogs (blog_title, blog_content, blog_slug, blog_img) VALUES (?, ?, ?, ?)";
    const values = [title, content, slug, img];

    const [result] = await pool.execute(query, values);
    
    return Response.json(
      {
        success: true,
        message: "Blog added successfully",
        blogId: result.insertId,
      },
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
