import { NextResponse } from "next/server";
import  connectToDatabase  from "@/lib/mongodb";
import  Download  from "@/models/Download";

export async function GET() {
  await connectToDatabase();
  let counter = await Download.findOne();
  
  if (!counter) {
    counter = await Download.create({ count: 0 });
  }

  return NextResponse.json({ downloads: counter.count });
}

export async function POST() {
  await connectToDatabase();
  let counter = await Download.findOne();

  if (!counter) {
    counter = await Download.create({ count: 0 });
  }

  counter.count += 1;
  await counter.save();

  return NextResponse.json({ downloads: counter.count });
}
