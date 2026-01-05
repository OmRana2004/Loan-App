import { NextResponse } from "next/server";
import { prismaClient } from "@/db";

/* ---------- CREATE ENQUIRY (PUBLIC) ---------- */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, loanType, address, message } = body;

    if (!name || !phone || !loanType || !address) {
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
        address,
        message,
        // status: "NEW", 
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

/* ---------- UPDATE STATUS (ADMIN) ---------- */
export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { error: "ID and status required" },
        { status: 400 }
      );
    }

    if (!["NEW", "CONTACTED"].includes(status)) {
      return NextResponse.json(
        { error: "Invalid status value" },
        { status: 400 }
      );
    }

    await prismaClient.enquiry.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update status" },
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
