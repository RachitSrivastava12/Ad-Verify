import { type NextRequest, NextResponse } from "next/server"

// Simple in-memory store for demo purposes
type Ad = {
  id: string
  email: string
  videoUrl: string
  engagements: number
  pricePerSol: number
  remainingEngagements: number
  depositTx: string | null
  createdAt: string
}

const store = globalThis as unknown as { __ads?: Ad[] }
if (!store.__ads) store.__ads = []
const ads = store.__ads!

export async function GET() {
  return NextResponse.json(ads, { status: 200 })
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  if (!body) return new NextResponse("Invalid JSON", { status: 400 })

  const { email, videoUrl, engagements, pricePerSol, depositTx } = body

  if (!email || !videoUrl || !engagements || !pricePerSol) {
    return new NextResponse("Missing required fields", { status: 400 })
  }

  const ad: Ad = {
    id: crypto.randomUUID(),
    email,
    videoUrl,
    engagements: Number(engagements),
    pricePerSol: Number(pricePerSol),
    remainingEngagements: Number(engagements),
    depositTx: depositTx || null,
    createdAt: new Date().toISOString(),
  }
  ads.push(ad)
  return NextResponse.json(ad, { status: 201 })
}
