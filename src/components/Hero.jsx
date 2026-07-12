import React from "react";
import { BadgeCheck } from "lucide-react";
import Panel from "./Panel";

export default function Hero() {
  return (
    <Panel>
      <div className="flex flex-col sm:flex-row gap-5">
        <div className="shrink-0">
          {/* Updated to use your real avatar and neon ring */}
          <div className="avatar-ring h-20 w-20 rounded-full bg-neon p-[2px]">
            <img
              src="https://raw.githubusercontent.com/Suman0703/Suman0703/main/Avatar.png"
              alt="Suman Devi"
              className="h-full w-full rounded-full object-cover bg-white"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="text-2xl font-bold text-zinc-50">Suman Devi</h1>
            <BadgeCheck size={18} className="text-neon" />
          </div>
          <p className="text-sm text-zinc-500 mt-0.5">@Suman0703</p>
          <p className="text-sm text-zinc-400 mt-3 leading-relaxed text-justify">
            Hey! I'm a <span className="text-zinc-100 font-medium">Full-Stack Developer</span> and final-year Computer Science student obsessed with building scalable, high-performance web applications. I specialize in the <span className="text-zinc-100 font-medium">MERN ecosystem</span>—architecting fluid interfaces with React, engineering robust RESTful APIs using Node.js and Express, and designing highly efficient MongoDB databases. Currently, I am expanding my technical horizons by integrating <span className="text-zinc-100 font-medium">Generative AI</span> into real-world applications to create intelligent, automated solutions. Beyond the screen, I serve as the <span className="text-zinc-100 font-medium">Placement Coordinator</span> for my CSE department at Rayat Bahra University, actively bridging the gap between emerging tech talent and industry recruiters.
          </p>
        </div>
      </div>
    </Panel>
  );
}