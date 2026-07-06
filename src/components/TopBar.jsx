import React, { useState, useEffect } from "react";
import { MapPin, Sparkles } from "lucide-react";

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
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500 mb-6">
      <span className="text-zinc-100 font-semibold">Suman Devi</span>
      <span>·</span>
      <a
        href="https://github.com/Suman0703"
        target="_blank"
        rel="noreferrer"
        className="underline decoration-dashed underline-offset-4 hover:text-violet-400 flex items-center gap-1 transition-colors"
      >
        Building projects with MERN + GenAI <Sparkles size={11} />
      </a>
      <span className="flex items-center gap-1 ml-auto">
        <MapPin size={12} /> Punjab, India · {time}
      </span>
    </div>
  );
}