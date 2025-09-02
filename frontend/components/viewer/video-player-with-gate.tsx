"use client"

import * as React from "react"

type Props = {
  src: string
  onCompleted: () => void
}

export function VideoPlayerWithGate({ src, onCompleted }: Props) {
  const [ended, setEnded] = React.useState(false)

  return (
    <div className="space-y-3">
      <video
        src={src}
        controls
        onEnded={() => setEnded(true)}
        className="w-full rounded-md border border-white/10 bg-black"
      />
      <button
        disabled={!ended}
        onClick={onCompleted}
        className={`w-full rounded-md px-4 py-2 font-medium ${
          ended ? "bg-cyan-600 hover:bg-cyan-500" : "bg-white/10 text-white/50"
        }`}
        aria-disabled={!ended}
      >
        {ended ? "Task Completed — Claim Reward" : "Watch to the end to unlock"}
      </button>
      <p className="text-xs text-white/60">Note: You must watch the video fully to enable claiming your reward.</p>
    </div>
  )
}
