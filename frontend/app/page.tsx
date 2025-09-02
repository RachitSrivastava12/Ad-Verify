import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-black text-white">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-semibold text-balance">Solana DePIN Ad Engagement Platform</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-pretty">
            Advertisers fund per-engagement rewards in SOL. Viewers earn by watching ads to completion.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/client"
            className="block rounded-lg border border-white/10 p-6 hover:border-cyan-600 transition-colors"
          >
            <h2 className="text-xl font-semibold text-cyan-400">Advertiser</h2>
            <p className="text-white/70 mt-2">
              Connect wallet, set your campaign, deposit funds, and publish your ad video link.
            </p>
          </Link>

          <Link
            href="/user"
            className="block rounded-lg border border-white/10 p-6 hover:border-cyan-600 transition-colors"
          >
            <h2 className="text-xl font-semibold text-cyan-400">Viewer</h2>
            <p className="text-white/70 mt-2">
              Connect wallet, subscribe by email, watch ads to completion, then claim your reward.
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
