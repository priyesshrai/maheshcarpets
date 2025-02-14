export async function GET() {
    const res = await fetch("http://localhost:3000/api/sitemap");
    const sitemap = await res.text();
  
    return new Response(sitemap, {
      headers: {
        "Content-Type": "text/xml",
      },
    });
  }
  