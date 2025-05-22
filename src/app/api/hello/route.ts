import { NextResponse } from 'next/server';

type Data = {
  name: string;
};

export function GET() {
  const data: Data = { name: "John Doe" };
  return NextResponse.json(data, { status: 200 });
}