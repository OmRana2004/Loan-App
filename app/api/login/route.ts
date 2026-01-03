import { NextResponse } from "next/server";

const ADMIN_EMAIL = "admin@mps.com";
const ADMIN_PASSWORD = "Admin@2026";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const res = NextResponse.json({ success: true });

    res.cookies.set("admin-auth", "true", {
      httpOnly: true,
      path: "/",
    });

    return res;
  }

  return NextResponse.json(
    { error: "Invalid credentials" },
    { status: 401 }
  );
}
