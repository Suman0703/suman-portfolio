import React from "react";

export default function Footer() {
  return (
    <div className="text-center space-y-3 pt-10 pb-2">
      <p className="italic text-sm text-zinc-500">
        "Still debugging, still growing."
      </p>
      <p className="text-xs text-zinc-400">
        Designed & Built with <span className="text-rose-400">♥</span>
      </p>
      <div className="flex justify-center gap-4 text-[11px] text-zinc-600">
        <span>2026. All rights reserved.</span>
        <span>Batch of 2027</span>
      </div>
    </div>
  );
}