import { type NextRequest, NextResponse } from "next/server"
import {
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  sendAndConfirmTransaction,
} from "@solana/web3.js"
import bs58 from "bs58"

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

const RPC_URL = process.env.NEXT_PUBLIC_SOLANA_RPC_URL || "https://api.devnet.solana.com"
const PLATFORM_PRIVATE_KEY = process.env.SOLANA_PLATFORM_PRIVATE_KEY // base58 secret key
const connection = new Connection(RPC_URL, "confirmed")

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  if (!body) return new NextResponse("Invalid JSON", { status: 400 })
  const { adId, viewer } = body
  if (!adId || !viewer) return new NextResponse("Missing adId or viewer", { status: 400 })

  const ad = ads.find((a) => a.id === adId)
  if (!ad) return new NextResponse("Ad not found", { status: 404 })
  if (ad.remainingEngagements <= 0) return new NextResponse("No remaining rewards", { status: 400 })

  const lamports = Math.round(Number(ad.pricePerSol) * LAMPORTS_PER_SOL)

  try {
    if (!PLATFORM_PRIVATE_KEY) {
      // Mock payout path (development)
      ad.remainingEngagements -= 1
      return NextResponse.json({ ok: true, mock: true }, { status: 200 })
    }

    const secret = bs58.decode(PLATFORM_PRIVATE_KEY)
    const payer = Keypair.fromSecretKey(secret)
    const toPubkey = new PublicKey(viewer)

    const tx = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: payer.publicKey,
        toPubkey,
        lamports,
      }),
    )

    const sig = await sendAndConfirmTransaction(connection, tx, [payer], { commitment: "confirmed" })
    ad.remainingEngagements -= 1

    return NextResponse.json({ ok: true, tx: sig }, { status: 200 })
  } catch (e: any) {
    return new NextResponse(e?.message || "Payout failed", { status: 500 })
  }
}
