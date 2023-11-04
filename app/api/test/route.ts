import { calculateByURLVibo } from "@/utils/calculations";
import { NextResponse } from "next/server";

export const runtime = 'edge'

export async function POST(req: Request) {
  const { url } = await req.json();
  console.log('🟢 - ', url)
  const result = await calculateByURLVibo(url);
  return NextResponse.json({ data: result });
}
