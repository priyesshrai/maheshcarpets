import pool from "@/lib/db.con";

export async function GET() {
  try {
    const query = `
      SELECT COUNT(*) AS totalVisits 
      FROM blog_visits
    `;
    const [result] = await pool.execute(query);

    return Response.json(
      {
        success: true,
        totalVisits: result[0].totalVisits,
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
