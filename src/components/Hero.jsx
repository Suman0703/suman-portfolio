import React from "react";
import { BadgeCheck } from "lucide-react";
import Panel from "./Panel";

export default function Hero() {
  return (
    <Panel>
      <div className="flex flex-col sm:flex-row gap-5">
        <div className="shrink-0">
          {/* Avatar with animated glowing ring */}
          <div className="avatar-ring h-20 w-20 rounded-full bg-gradient-to-br from-violet-500 to-rose-500 p-[2px]">
            <div className="h-full w-full rounded-full bg-zinc-950 flex items-center justify-center text-xl font-bold text-zinc-100">
              SD
            </div>
          </div>
        </div>
        
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="text-2xl font-bold text-zinc-50">Suman Devi</h1>
            <BadgeCheck size={18} className="text-violet-400" />
          </div>
          <p className="text-sm text-zinc-500 mt-0.5">@Suman0703</p>
          
          <p className="text-sm text-zinc-400 mt-3 leading-relaxed">
            Hey! I'm a <span className="text-zinc-100 font-medium">Full-Stack Developer</span> and CS student building real-world web apps with the <span className="text-zinc-100 font-medium">MERN stack</span>.
            I use React for frontends, Node.js and Express for backends, and MongoDB for data — and I'm exploring <span className="text-zinc-100 font-medium">Generative AI</span> to build smarter applications. Currently the Placement Coordinator for my CSE batch at Rayat-Bahra University.
          </p>
        </div>
      </div>
    </Panel>
  );
}