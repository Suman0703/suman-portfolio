import React from "react";

export default function Bracket({ children }) {
  return (
    <div className="inline-flex items-center gap-1 border border-dashed border-zinc-700 px-3 py-1.5 text-xs tracking-wide text-zinc-300 font-mono">
      {children}
    </div>
  );
}