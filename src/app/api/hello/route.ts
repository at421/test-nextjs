import { NextResponse } from 'next/server';

type Data = {
  name: string;
};

export function GET(request: Request) {
  const data: Data = { name: "John Doe" };
  return NextResponse.json(data, { status: 200 });
}