import { NextResponse } from "next/server";
import { prismaClient } from "@/db";

/* =====================================================
   CREATE ENQUIRY (PUBLIC)
   - Saves enquiry to DB
   - Sends email via Formspree
===================================================== */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, loanType, address, message } = body;

    // Validation
    if (!name || !phone || !loanType || !address) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 1️⃣ Save enquiry to database
    const enquiry = await prismaClient.enquiry.create({
      data: {
        name,
        phone,
        loanType,
        address,
        message,
        status: "NEW", // default status
      },
    });

    //  Send email via Formspree (non-blocking)
    try {
      await fetch("https://formspree.io/f/xbddrrqn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          subject: "📩 New Loan Enquiry Received",
          name,
          phone,
          loanType,
          address,
          message,
          enquiryId: enquiry.id,
          createdAt: enquiry.createdAt,
        }),
      });
    } catch (emailError) {
      // Email failure should NOT break enquiry creation
      console.error("Formspree email failed:", emailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("POST /api/enquiry error:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

/* =====================================================
   FETCH ALL ENQUIRIES (ADMIN)
===================================================== */
export async function GET() {
  try {
    const enquiries = await prismaClient.enquiry.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(enquiries);
  } catch (error) {
    console.error("GET /api/enquiry error:", error);
    return NextResponse.json(
      { error: "Failed to fetch enquiries" },
      { status: 500 }
    );
  }
}

/* =====================================================
   UPDATE ENQUIRY STATUS (ADMIN)
===================================================== */
export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { error: "ID and status are required" },
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
    console.error("PATCH /api/enquiry error:", error);
    return NextResponse.json(
      { error: "Failed to update enquiry status" },
      { status: 500 }
    );
  }
}

/* =====================================================
   DELETE ENQUIRY (ADMIN)
===================================================== */
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
    console.error("DELETE /api/enquiry error:", error);
    return NextResponse.json(
      { error: "Failed to delete enquiry" },
      { status: 500 }
    );
  }
}
