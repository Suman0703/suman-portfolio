import React from "react";
import Panel from "./Panel";
import Bracket from "./Bracket";

const skillsData = [
  { name: "React.js", color: "#61DAFB" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "HTML5", color: "#E34F26" },
  { name: "CSS3", color: "#2965F1" },
  { name: "Tailwind CSS", color: "#38BDF8" },
  { name: "Node.js", color: "#83CD29" },
  { name: "Express.js", color: "#D4D4D8" },
  { name: "MongoDB", color: "#47A248" },
  { name: "REST APIs", color: "#F472B6" },
  { name: "Git", color: "#F05032" },
  { name: "GitHub", color: "#E4E4E7" },
  { name: "SQL", color: "#60A5FA" },
  { name: "Python", color: "#FACC15" },
  { name: "C++", color: "#3B82F6" },
  { name: "C", color: "#F05032" },
];

export default function Skills() {
  return (
    <div className="space-y-3 pt-2">
      <Bracket>My Skills</Bracket>
      <Panel>
        <div className="flex flex-wrap gap-x-5 gap-y-3">
          {skillsData.map((s) => (
            <span
              key={s.name}
              className="flex items-center gap-1.5 text-xs text-zinc-300"
            >
              <span
                className="h-2 w-2 rounded-sm shrink-0"
                style={{ backgroundColor: s.color }}
              />
              {s.name}
            </span>
          ))}
        </div>
      </Panel>
    </div>
  );
}