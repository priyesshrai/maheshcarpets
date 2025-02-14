export async function GET() {
    const res = await fetch("https://www.maheshcarpets.com/api/sitemap");
    const sitemap = await res.text();
  
    return new Response(sitemap, {
      headers: {
        "Content-Type": "text/xml",
      },
    });
  }
  