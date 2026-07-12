import React, { useState, useEffect } from "react";

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fill the progress bar over 2 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Wait a tiny fraction of a second at 100% before triggering completion
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 5; // Increases the loading bar
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0f] selection:bg-neon/30">
      <div className="flex flex-col items-center gap-8 px-4 text-center">
        
        {/* Glowing Cat Avatar */}
        <div className="relative flex items-center justify-center w-28 h-28 rounded-full border border-dashed border-zinc-700 bg-zinc-900/50 shadow-[0_0_40px_rgba(0,255,153,0.05)]">
          {/* Ambient Glow */}
          <div className="absolute inset-0 rounded-full bg-neon/10 blur-xl animate-pulse"></div>
          
          {/* Cute SVG Cat (Lucide-inspired) */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00FF99" 
            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" 
            className="animate-bounce relative z-10"
          >
            <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3.1-9-7.56c0-1.25.5-2.4 1.1-3.48 0 0-1.9-6.42-.5-7 1.4-.58 4.5.15 6.2 2.13.7-.15 1.4-.29 2.2-.29z"/>
            {/* Blinking Eyes */}
            <circle cx="9" cy="13" r="1.5" fill="#00FF99" className="animate-pulse" />
            <circle cx="15" cy="13" r="1.5" fill="#00FF99" className="animate-pulse" />
            <path d="M12 16c-.5 0-1.5-.5-1.5-1.5" />
          </svg>
        </div>

        {/* Text Container */}
        <div className="space-y-3">
          <h2 className="text-zinc-100 font-mono text-sm tracking-widest uppercase flex items-center justify-center gap-2">
            Booting System
            {/* Animating Loading Dots */}
            <span className="flex gap-1">
              <span className="w-1 h-1 bg-neon rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-1 h-1 bg-neon rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-1 h-1 bg-neon rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 font-mono max-w-xs mx-auto leading-relaxed">
            Hang tight! Preparing something awesome for you.
          </p>
        </div>

        {/* Terminal Style Progress Bar */}
        <div className="w-56 h-1.5 bg-zinc-800 rounded-full overflow-hidden mt-2 relative">
          <div 
            className="h-full bg-neon transition-all duration-100 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            {/* Bright tip on the loading bar */}
            <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/40 blur-[2px]"></div>
          </div>
        </div>

      </div>
    </div>
  );
}