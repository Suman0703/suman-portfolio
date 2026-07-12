import React, { useState } from "react";
import { Trophy, Code, Users, ChevronDown } from "lucide-react";
import Bracket from "./Bracket";
import Panel from "./Panel";

const achievementsData = [
    {
    id: 1,
    title: "Placement Coordinator",
    organization: "Rayat Bahra Professional University",
    date: "Jan 2026 – Present",
    badge: "Active",
    badgeStyles: "text-[#00FF99] border-[#00FF99]/30 bg-[#00FF99]/10",
    icon: <Users size={16} className="text-[#00FF99]" />,
    description: "Managing placement drives, bridging the gap between tech companies and the CSE department, and guiding peers.",
  },
  {
    id: 2,
    title: "2nd Position — Snap Syntax",
    organization: "IIT Roorkee (Cognizance 2026)",
    date: "2026",
    badge: "Winner",
    badgeStyles: "text-amber-400 border-amber-400/30 bg-amber-400/10",
    icon: <Trophy size={16} className="text-amber-400" />,
    description: "Secured 2nd position in this premier competitive coding competition, winning overall prizes worth ₹60,000.",
  },
  {
    id: 3,
    title: "2nd Position —  Rayat Bahra Zonals Snap Syntax",
    organization: "Rayat Bahra Professional University(IIT Roorkee)",
    date: "2026",
    badge: "Winner",
    badgeStyles: "text-amber-400 border-amber-400/30 bg-amber-400/10",
    icon: <Code size={16} className="text-amber-400" />,
    description: "Secured 2nd position in the Snap Syntax web development competition organized by IIT Roorkee representatives on our campus. Won prizes worth ₹60,000 and earned a fully-sponsored invite to the IIT Roorkee Cognizance 2026 event.",
  },
  {
    id: 4,
    title: "2nd Position —  Full Stack Web Development Hackathon",
    organization: "Rayat Bahra Professional University",
    date: "2025",
    badge: "Runner Up",
    badgeStyles: "text-violet-400 border-violet-400/30 bg-violet-400/10",
    icon: <Trophy size={16} className="text-violet-400" />,
    description: "Secured 2nd position out of multiple teams by building and pitching 'CityCare'—a civic issue reporting platform.",
  }
];

function AchievementRow({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="group border-b border-dashed border-zinc-800 last:border-0 hover:bg-zinc-900/40 transition-all duration-300 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 gap-4">
        
        {/* Left Side: Icon, Title & Organization */}
        <div className="flex items-start sm:items-center gap-4">
          {/* Glowing Icon Box */}
          <div className={`p-2.5 rounded-lg border ${item.badgeStyles} shadow-[0_0_15px_-3px_currentColor]`}>
             {item.icon}
          </div>
          
          <div>
            <div className="flex flex-wrap items-center gap-2.5">
              <h3 className="text-[13px] sm:text-sm font-bold text-zinc-100 font-mono">
                {item.title}
              </h3>
              <span className={`text-[9px] sm:text-[10px] px-2 py-0.5 rounded border ${item.badgeStyles} font-mono uppercase tracking-wider`}>
                {item.badge}
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-1 sm:mt-0.5">{item.organization}</p>
          </div>
        </div>

        {/* Right Side: Date & Expand Toggle */}
        <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto pl-14 sm:pl-0">
          <span className="text-xs font-mono text-zinc-500 mr-4">{item.date}</span>
          <div className={`p-1 rounded-full transition-colors ${isOpen ? "bg-zinc-800" : "group-hover:bg-zinc-800"}`}>
            <ChevronDown 
              size={14} 
              className={`text-zinc-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-zinc-100" : ""}`} 
            />
          </div>
        </div>
      </div>

      {/* Expandable Description Area */}
      <div 
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <div className="pl-14 sm:pl-16 pr-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed flex gap-3">
            {/* Left Accent Line */}
            <div className="w-[2px] bg-zinc-800 rounded-full shrink-0" />
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Achievements() {
  return (
    <div className="space-y-3 pt-2">
      <Bracket>Achievements</Bracket>
      <Panel className="overflow-hidden">
        {achievementsData.map((item) => (
          <AchievementRow key={item.id} item={item} />
        ))}
      </Panel>
    </div>
  );
}