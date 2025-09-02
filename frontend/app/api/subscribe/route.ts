import { type NextRequest, NextResponse } from "next/server"

type Sub = { id: string; email: string; role: "viewer" | "advertiser"; wallet?: string; createdAt: string }

const store = globalThis as unknown as { __subs?: Sub[] }
if (!store.__subs) store.__subs = []
const subs = store.__subs!

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  if (!body) return new NextResponse("Invalid JSON", { status: 400 })

  const { email, role, wallet } = body
  if (!email || !role) return new NextResponse("Missing fields", { status: 400 })

  const sub: Sub = { id: crypto.randomUUID(), email, role, wallet, createdAt: new Date().toISOString() }
  subs.push(sub)
  return NextResponse.json({ ok: true }, { status: 200 })
}
