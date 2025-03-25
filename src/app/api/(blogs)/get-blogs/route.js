import pool from "@/lib/db.con";

export async function GET() {
  try {
    const query = "SELECT * FROM blogs ORDER BY created_at DESC";
    const [blogs] = await pool.execute(query);

    return Response.json(
      {
        success: true,
        data: blogs,
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
