import { AppClientShell } from "@/components/app-client-shell"
import { ViewerDashboard } from "@/components/viewer/viewer-dashboard"

export default function UserPage() {
  return (
    <AppClientShell>
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-cyan-400">Viewer</h1>
        <p className="text-white/70">
          Connect wallet, subscribe via email, watch ads to completion, then claim your reward.
        </p>
      </div>
      <div className="mt-6">
        <ViewerDashboard />
      </div>
    </AppClientShell>
  )
}
