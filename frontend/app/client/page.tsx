import { AppClientShell } from "@/components/app-client-shell"
import { AdvertiserForm } from "@/components/forms/advertiser-form"

export default function ClientPage() {
  return (
    <AppClientShell>
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-cyan-400">Advertiser</h1>
        <p className="text-white/70">Connect wallet, set campaign details, deposit funds, and publish your ad.</p>
      </div>
      <div className="mt-6">
        <AdvertiserForm />
      </div>
    </AppClientShell>
  )
}
