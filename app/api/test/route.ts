import { calculateByURL } from "@/utils/calculations";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { url } = await req.json();
    const result = await calculateByURL(url);
    return NextResponse.json(
      { data: result },
      {
        status: 200,
      }
    );
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to data" },
      {
        status: 500,
      }
    );
  }
}
