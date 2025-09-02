"use client"

import * as React from "react"
import useSWR, { mutate } from "swr"
import { useWallet } from "@solana/wallet-adapter-react"
import { toast } from "@/hooks/use-toast"
import { VideoPlayerWithGate } from "./video-player-with-gate"

type Ad = {
  id: string
  email: string
  videoUrl: string
  engagements: number
  pricePerSol: number
  remainingEngagements: number
  createdAt: string
}

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function ViewerDashboard() {
  const { publicKey, connected } = useWallet()
  const [email, setEmail] = React.useState("")
  const [selectedAd, setSelectedAd] = React.useState<Ad | null>(null)
  const { data } = useSWR<Ad[]>("/api/ads", fetcher, { refreshInterval: 5000 })

  async function subscribe(e: React.FormEvent) {
    e.preventDefault()
    if (!connected || !publicKey) {
      toast({ title: "Connect wallet", description: "Please connect your wallet first." })
      return
    }
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, role: "viewer", wallet: publicKey.toBase58() }),
    })
    if (res.ok) {
      toast({ title: "Subscribed", description: "We will notify you when new ads are available." })
      setEmail("")
    } else {
      toast({ title: "Subscription failed", variant: "destructive" })
    }
  }

  async function claimReward(ad: Ad) {
    if (!connected || !publicKey) {
      toast({ title: "Connect wallet", description: "Please connect your wallet first." })
      return
    }
    const res = await fetch("/api/claim", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ adId: ad.id, viewer: publicKey.toBase58() }),
    })
    if (res.ok) {
      const payload = await res.json()
      toast({
        title: payload.mock ? "Claim recorded (mock payout)" : "Payout sent",
        description: payload.tx ? `Signature: ${payload.tx}` : "Payout mocked (configure server key to enable).",
      })
      setSelectedAd(null)
      mutate("/api/ads")
    } else {
      const text = await res.text()
      toast({ title: "Claim failed", description: text || "Error", variant: "destructive" })
    }
  }

  return (
    <div className="space-y-8">
      <section className="rounded-lg border border-white/10 p-4">
        <h2 className="font-semibold text-cyan-400">Subscribe for Updates</h2>
        <p className="text-white/70 text-sm mt-1">Get an email when new ads are available.</p>
        <form onSubmit={subscribe} className="mt-3 flex gap-3">
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-cyan-600"
          />
          <button className="rounded-md bg-cyan-600 hover:bg-cyan-500 px-4 py-2 font-medium">Subscribe</button>
        </form>
      </section>

      <section>
        <h2 className="font-semibold text-cyan-400">Available Ads</h2>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
          {(data || [])
            .filter((a) => a.remainingEngagements > 0)
            .map((ad) => (
              <div key={ad.id} className="rounded-lg border border-white/10 p-4 bg-white/5">
                <div className="space-y-1">
                  <p className="text-sm text-white/60 break-all">{ad.videoUrl}</p>
                  <div className="flex items-center justify-between text-sm text-white/70">
                    <span>Reward</span>
                    <span className="text-cyan-400">{ad.pricePerSol} SOL</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-white/70">
                    <span>Remaining</span>
                    <span className="text-white">{ad.remainingEngagements}</span>
                  </div>
                </div>
                <button
                  className="mt-3 w-full rounded-md bg-cyan-600 hover:bg-cyan-500 px-3 py-2 font-medium"
                  onClick={() => setSelectedAd(ad)}
                >
                  Watch
                </button>
              </div>
            ))}
          {(data || []).filter((a) => a.remainingEngagements > 0).length === 0 && (
            <div className="text-white/60">No ads available right now. Check back soon.</div>
          )}
        </div>
      </section>

      {selectedAd && (
        <section className="rounded-lg border border-white/10 p-4 bg-white/5">
          <h3 className="font-semibold text-cyan-400">Watch Ad</h3>
          <p className="text-sm text-white/70 mt-1">Reward: {selectedAd.pricePerSol} SOL</p>
          <div className="mt-3">
            <VideoPlayerWithGate src={selectedAd.videoUrl} onCompleted={() => claimReward(selectedAd)} />
          </div>
          <button className="mt-3 text-sm text-white/60 underline" onClick={() => setSelectedAd(null)}>
            Cancel
          </button>
        </section>
      )}
    </div>
  )
}
