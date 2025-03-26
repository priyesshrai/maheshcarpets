import pool from "@/lib/db.con";
import ValidateAdmin from "@/lib/validateAdmin";

export async function POST(req) {
  try {
    const valideAdmin = await ValidateAdmin(req);
    if (!valideAdmin) {
      return Response.json(
        { success: false, message: "You are not authorized" },
        { status: 401 }
      );
    }

    const formData = await req.formData();
    const title = formData.get("title");
    const content = formData.get("content");
    const metaTitle = formData.get("metaTitle");
    const metaDescription = formData.get("metaDescription");
    const markdownContent = formData.get("markdownContent");
    const image = formData.get("image");

    if (!title || !content || !metaTitle || !metaDescription) {
      return Response.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    let imageBuffer = null;

    if (image) {
      imageBuffer = Buffer.from(await image.arrayBuffer());
    }

    const createSlug = (title) => {
      return title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-') 
        .replace(/^-+|-+$/g, '');
    };

    const slug = createSlug(title);

    const query = `
      INSERT INTO blogs 
      (blog_title, blog_content, blog_slug, blog_img, metaTitle, metaDesc, markdownContent) 
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      title,
      content,
      slug,
      imageBuffer,
      metaTitle,
      metaDescription,
      markdownContent,
    ];

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
    console.error("Error:", error);
    return Response.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
