// export const runtime = "nodejs";
// export const dynamic = "force-dynamic";

// import { NextResponse } from "next/server";
// // import { getPrisma } from "@/db";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { name, phone, loanType, message } = body;

//     if (!name || !phone || !loanType) {
//       return NextResponse.json(
//         { success: false, error: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     const prisma = getPrisma();

//     const enquiry = await prisma.enquiry.create({
//       data: {
//         name: name.trim(),
//         phone: phone.trim(),
//         loanType,
//         message: message?.trim() || null,
//       },
//     });

//     return NextResponse.json(
//       { success: true, enquiryId: enquiry.id },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("ENQUIRY API ERROR:", error);
//     return NextResponse.json(
//       { success: false, error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }
