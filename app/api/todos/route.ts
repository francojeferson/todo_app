import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  return NextResponse.json({ todos: [] }, { status: 200 })
}
