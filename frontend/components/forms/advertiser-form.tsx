"use client"

import * as React from "react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction, Connection } from "@solana/web3.js"
import { useWallet } from "@solana/wallet-adapter-react"
import { toast } from "@/hooks/use-toast"

const PLATFORM_WALLET = process.env.NEXT_PUBLIC_PLATFORM_WALLET
const RPC_URL = process.env.NEXT_PUBLIC_SOLANA_RPC_URL || "https://api.devnet.solana.com"

export function AdvertiserForm() {
  const { publicKey, sendTransaction, connected } = useWallet()
  const [email, setEmail] = React.useState("")
  const [videoUrl, setVideoUrl] = React.useState("")
  const [engagements, setEngagements] = React.useState<number>(100)
  const [pricePerSol, setPricePerSol] = React.useState<number>(0.01)
  const [loading, setLoading] = React.useState(false)

  const totalSol = Number((engagements * pricePerSol).toFixed(6))

  async function createAd(depositSig: string | null) {
    const res = await fetch("/api/ads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        videoUrl,
        engagements,
        pricePerSol,
        depositTx: depositSig,
      }),
    })
    if (!res.ok) {
      const msg = await res.text()
      throw new Error(msg || "Failed to create ad")
    }
    return res.json()
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!connected || !publicKey) {
      toast({ title: "Connect wallet", description: "Please connect your wallet first." })
      return
    }
    if (!PLATFORM_WALLET) {
      toast({
        title: "Missing platform wallet",
        description: "Set NEXT_PUBLIC_PLATFORM_WALLET in Project Settings.",
        variant: "destructive",
      })
      return
    }
    if (!videoUrl) {
      toast({
        title: "Missing video link",
        description: "Please provide a direct .mp4 URL for reliable completion detection.",
      })
      return
    }

    setLoading(true)
    try { 
      // 1) Deposit total to platform wallet
      const connection = new Connection(RPC_URL, "confirmed")
      const tx = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey(PLATFORM_WALLET),
          lamports: Math.round(totalSol * LAMPORTS_PER_SOL),
        }),
      )
      const sig = await sendTransaction(tx, connection)
      await connection.confirmTransaction(sig, "confirmed")

      // 2) Create ad record
      const ad = await createAd(sig)
      toast({
        title: "Campaign created",
        description: `Deposit confirmed (${totalSol} SOL). Ad ID: ${ad.id}`,
      })

      setEmail("")
      setVideoUrl("")
      setEngagements(100)
      setPricePerSol(0.01)
    } catch (err: any) {
      toast({
        title: "Error",
        description: err?.message || "Transaction failed",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-xl">
      <div>
        <label className="block text-sm text-white/80 mb-1">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-cyan-600"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label className="block text-sm text-white/80 mb-1">Ad Video URL (.mp4 preferred)</label>
        <input
          type="url"
          required
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-cyan-600"
          placeholder="https://cdn.example.com/ad.mp4"
        />
        <p className="text-xs text-white/50 mt-1">Tip: Use a direct .mp4 link to ensure completion detection.</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-white/80 mb-1">Desired engagements</label>
          <input
            type="number"
            min={1}
            required
            value={engagements}
            onChange={(e) => setEngagements(Number(e.target.value))}
            className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-cyan-600"
          />
        </div>

        <div>
          <label className="block text-sm text-white/80 mb-1">Price per engagement (SOL)</label>
          <input
            type="number"
            min={0}
            step="0.000001"
            required
            value={pricePerSol}
            onChange={(e) => setPricePerSol(Number(e.target.value))}
            className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-cyan-600"
          />
        </div>
      </div>

      <div className="rounded-md border border-white/10 p-3 text-sm flex items-center justify-between">
        <span className="text-white/80">Total deposit</span>
        <span className="font-semibold text-cyan-400">{totalSol} SOL</span>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-cyan-600 hover:bg-cyan-500 disabled:opacity-60 px-4 py-2 font-medium"
      >
        {loading ? "Processing..." : "Create Campaign & Deposit"}
      </button>

      {!PLATFORM_WALLET && <p className="text-xs text-red-400">Set NEXT_PUBLIC_PLATFORM_WALLET to receive deposits.</p>}
    </form>
  )
}
