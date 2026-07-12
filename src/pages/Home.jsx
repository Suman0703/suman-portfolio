import React from "react";
import Hero from "../components/Hero";
import SocialLinks from "../components/SocialLinks";
import Skills from "../components/Skills";
import Experience from "../components/Achievements";
import GithubStats from "../components/GithubStats";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Quote from "../components/Quote";
import { Trophy, Award, Cloud, Users } from "lucide-react";
import Achievements from "../components/Achievements";
import Connect from "../components/Connect";

export default function Home() {
  return (
    <div className="space-y-6">
      <Hero />
      <SocialLinks />

      <div className="flex flex-wrap gap-2.5 pt-2">
        {[
          { 
            text: "2nd — Snap Syntax, IIT Roorkee", 
            icon: <Trophy size={13} className="text-amber-400" /> 
          },
          { 
            text: "IBM Front-End Certified", 
            icon: <Award size={13} className="text-blue-400" /> 
          },
          { 
            text: "Oracle Cloud AI Certified", 
            icon: <Cloud size={13} className="text-[#00FF99]" /> 
          },
          { 
            text: "Placement Coordinator", 
            icon: <Users size={13} className="text-violet-400" /> 
          },
        ].map((badge, idx) => (
          <div
            key={idx}
            className="group flex items-center gap-2 text-[11px] font-mono border border-dashed border-zinc-700/80 bg-[#0a0a0f] px-3 py-1.5 hover:border-[#00FF99]/50 hover:bg-[#00FF99]/5 transition-all duration-300 shadow-sm cursor-default"
          >
            {/* The icon scales up slightly when hovered */}
            <div className="transition-transform duration-300 group-hover:scale-110">
              {badge.icon}
            </div>
            <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors tracking-tight">
              {badge.text}
            </span>
          </div>
        ))}
      </div>

      <Skills />

      <GithubStats />

      <Projects />
      <Achievements />
      <Quote />
      <Connect />
      <Footer />
    </div>
  );
}