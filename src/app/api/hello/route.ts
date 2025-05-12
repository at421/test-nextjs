import { NextResponse } from "next/server";

type Data = {
  name: string;
};

export async function GET(request: Request) {
  return NextResponse.json<Data>({ name: "John Doe" }, { status: 200 });
}