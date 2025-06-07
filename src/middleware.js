import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await req.cookies.get("token")?.value || '';

  const isPublicPath = req.nextUrl.pathname === "/login/admin";
  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");
  // console.log(req.nextUrl.pathname);
  
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/admin/dashboard", req.url));
  }

  if (isAdminRoute && !token) {
    return NextResponse.redirect(new URL("/login/admin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/login/admin"],
};
