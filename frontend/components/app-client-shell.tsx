"use client"

import React from "react"
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react"
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { BackpackWalletAdapter } from "@solana/wallet-adapter-backpack"
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom"
import { SolflareWalletAdapter } from "@solana/wallet-adapter-solflare"
import "@solana/wallet-adapter-react-ui/styles.css"

type Props = { children: React.ReactNode }

const endpoint = process.env.NEXT_PUBLIC_SOLANA_RPC_URL || "https://api.devnet.solana.com"

export function AppClientShell({ children }: Props) {
  const wallets = React.useMemo(
    () => [new PhantomWalletAdapter(), new SolflareWalletAdapter( ), new BackpackWalletAdapter()],
    [],
  )

  return (
    <div className="min-h-dvh bg-black text-white">
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <header className="border-b border-white/10">
              <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
                <a href="/" className="font-semibold text-cyan-400">
                  DePIN Ads
                </a>
                <WalletMultiButton className="!bg-cyan-600 hover:!bg-cyan-500 !text-white" />
              </div>
            </header>
            <main className="mx-auto max-w-5xl px-4 py-6">{children}</main>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  )
}
