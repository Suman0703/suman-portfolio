import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Panel from "./Panel";
import Bracket from "./Bracket";

const timelineData = [
  {
    org: "Rayat-Bahra Professional University",
    role: "Placement Coordinator, CSE Dept.",
    status: "Active",
    dates: "Jan 2026 — Now",
    detail:
      "Coordinating placement drives for my batch, liaising with recruiters, and helping classmates prepare for interviews and drives.",
  },
  {
    org: "CityCare Hackathon",
    role: "Team Lead (Team of 4)",
    status: "Done",
    dates: "Oct 2025",
    detail:
      "Led a 4-person team building a MERN-stack civic issue reporting platform with image uploads and live status tracking. Secured 2nd position.",
  },
  {
    org: "IBM Front-End Training",
    role: "Trainee",
    status: "Done",
    dates: "Jun 2025",
    detail:
      "Completed IBM's front-end web development program covering responsive design, JavaScript, and modern UI best practices.",
  },
];

// Sub-component kept in the same file to prevent over-componentization
function TimelineItem({ item }) {
  const [open, setOpen] = useState(false);
  const isActive = item.status === "Active";

  return (
    <div className="relative pl-8">
      <span
        className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full"
        style={{
          backgroundColor: isActive ? "#22c55e" : "#f43f5e",
          boxShadow: isActive ? "0 0 8px #22c55e88" : "0 0 8px #f43f5e88",
        }}
      />
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left group focus:outline-none"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-mono text-sm font-semibold text-zinc-100">
              {item.org}
            </span>
            <span
              className={
                "text-[10px] font-mono px-1.5 py-0.5 border " +
                (isActive
                  ? "border-emerald-700 text-emerald-400"
                  : "border-rose-800 text-rose-400")
              }
            >
              ● {item.status}
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono text-zinc-500">
              {item.dates}
            </span>
            <ChevronDown
              size={14}
              className={
                "text-zinc-500 transition-transform duration-200 " +
                (open ? "rotate-180" : "")
              }
            />
          </div>
        </div>
        <p className="text-xs text-zinc-500 mt-0.5">{item.role}</p>
      </button>

      {/* Expandable Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
      >
        <p className="text-xs text-zinc-400 leading-relaxed border-l border-dashed border-zinc-800 pl-3">
          {item.detail}
        </p>
      </div>
    </div>
  );
}

export default function Achievements() {
  return (
    <div className="space-y-3 pt-2">
      <Bracket>Achievements</Bracket>
      <Panel className="space-y-5">
        {timelineData.map((item) => (
          <TimelineItem key={item.org} item={item} />
        ))}
      </Panel>
    </div>
  );
}