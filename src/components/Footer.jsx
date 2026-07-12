import React from "react";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-12 pt-8 pb-8 border-t border-dashed border-zinc-800/60">
      <div className="flex flex-col items-center justify-center gap-5">
        
        {/* Minimalist Terminal Quote Badge */}
        <div className="px-4 py-1.5 rounded border border-zinc-800/60 bg-zinc-900/30 shadow-sm">
          <p className="text-[11px] sm:text-xs font-mono text-zinc-400">
            <span className="text-[#00FF99] mr-2">❯</span>
            "Still debugging, still growing."
          </p>
        </div>

        <div className="flex flex-col items-center gap-2.5 mt-1">
          {/* Built By Section */}
          <p className="text-[11px] sm:text-xs text-zinc-500 font-mono flex items-center gap-1.5">
            Designed & Built with 
            <Heart size={12} className="text-rose-500 fill-rose-500/30 animate-pulse" /> 
            by <span className="text-zinc-200 font-medium hover:text-[#00FF99] transition-colors cursor-default">Suman Devi</span>
          </p>
          
          {/* Copyright */}
          <p className="text-[10px] text-zinc-600 font-mono tracking-widest uppercase">
            © 2026. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}