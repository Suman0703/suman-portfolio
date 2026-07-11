import React from "react";
import Bracket from "./Bracket";

export default function Quote() {
  return (
    <div className="space-y-3 pt-6 pb-2">
      <Bracket>personal_philosophy</Bracket>
      
      <div className="relative group">
        <div className="absolute -inset-[1px] bg-gradient-to-r from-neon/30 via-zinc-800/0 to-zinc-800/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-sm blur-sm"></div>
        
        <div className="relative border border-dashed border-zinc-800 bg-[#0a0a0f] bg-gradient-to-br from-neon/[0.03] to-transparent p-8 sm:p-12 overflow-hidden">
          
          <svg 
            className="absolute -top-2 -left-2 sm:top-4 sm:left-4 w-32 h-32 sm:w-40 sm:h-40 text-zinc-800/30 -z-10 select-none pointer-events-none" 
            fill="currentColor" 
            viewBox="0 0 32 32" 
            aria-hidden="true"
          >
            <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h2V8z" />
          </svg>

          <div className="relative z-10 sm:pl-8">
            <p className="text-zinc-200 font-mono text-sm sm:text-base leading-loose max-w-3xl">
              <span className="text-neon/50 mr-3 text-lg font-bold">~</span>
              I wear my heart openly, my smile proudly, and my determination quietly. That's how I turn dreams into reality.
            </p>
            
            <div className="mt-8 flex items-center justify-end gap-3">
              <div className="h-[1px] w-8 bg-neon/40"></div>
              <span className="font-semibold text-neon font-mono text-sm uppercase tracking-widest">
                Suman Devi
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}