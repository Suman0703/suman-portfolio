import React, { useState, useEffect } from "react";
import { MapPin, Sparkles, Clock } from "lucide-react";

export default function TopBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 text-xs text-zinc-500 mb-8 pb-4 border-b border-dashed border-zinc-800/60">
      
      {/* Left Side: Name and Tagline */}
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
        
        {/* Name with Pulsing Status Indicator */}
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon"></span>
          </span>
          <span className="text-zinc-100 font-bold font-mono tracking-wide text-[13px]">
            Suman Devi
          </span>
        </div>
        
        <span className="hidden sm:block text-zinc-700">|</span>
        
        {/* Interactive Tagline Badge */}
        <a
          href="https://github.com/Suman0703"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900/40 border border-zinc-800 rounded shadow-sm hover:border-neon hover:text-neon transition-all duration-300"
        >
          Building projects with MERN + GenAI 
          <Sparkles size={11} className="text-zinc-500 group-hover:text-neon transition-colors" />
        </a>
      </div>

      {/* Right Side: Location and Time */}
      <div className="flex items-center gap-3 font-mono">
        
        {/* Location */}
        <div className="flex items-center gap-1.5 hover:text-zinc-300 transition-colors">
          <MapPin size={12} className="text-zinc-400" />
          <span>Punjab, India</span>
        </div>
        
        <span className="text-zinc-700">•</span>
      
        <div className="flex items-center gap-1.5 text-zinc-400 hover:text-zinc-300 transition-colors min-w-[95px] justify-end">
          <Clock size={12} className="text-neon" />
          {/* tabular-nums prevents the text from shifting horizontally as the seconds tick */}
          <span className="tabular-nums tracking-tight">{time || "Loading..."}</span>
        </div>
        
      </div>
    </div>
  );
}