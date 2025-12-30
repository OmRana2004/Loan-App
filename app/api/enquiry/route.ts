import { NextResponse } from "next/server";
import { prismaClient } from "@/db";

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
