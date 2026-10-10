import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    recipient: "zubayersamin210@gmail.com",
    whatsapp: "+8801640916341",
    service: "Web3Forms Mailer",
  });
}
