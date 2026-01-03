import { NextResponse } from "next/server";
import { prismaClient } from "@/db";

/* ---------- CREATE ENQUIRY (PUBLIC) ---------- */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, loanType, message } = body;

    if (!name || !phone || !loanType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await prismaClient.enquiry.create({
      data: {
        name,
        phone,
        loanType,
        message,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

/* ---------- FETCH ALL ENQUIRIES (ADMIN) ---------- */
export async function GET() {
  try {
    const enquiries = await prismaClient.enquiry.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(enquiries);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

/* ---------- DELETE ENQUIRY (ADMIN) ---------- */
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Enquiry ID is required" },
        { status: 400 }
      );
    }

    await prismaClient.enquiry.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to delete enquiry" },
      { status: 500 }
    );
  }
}


