import React from "react";
import Bracket from "./Bracket";
import Panel from "./Panel";

export default function GithubStats() {
  return (
    <div className="space-y-3 pt-2">
      <Bracket>GitHub Activity</Bracket>
      <Panel className="flex flex-col items-center gap-8 py-8">
        
        {/* Streak Stats */}
        <div className="w-full flex justify-center">
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=suman0703&theme=dark&hide_border=false&background=0D1117&stroke=00FF99&ring=00FF99&fire=00FF99&currStreakLabel=00FF99"
            alt="GitHub Streak"
            className="max-w-full h-auto sm:h-[165px]"
            loading="lazy"
          />
        </div>

        <div className="w-full flex justify-center">
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=Suman0703&bg_color=0D1117&color=ffffff&line=00FF99&point=00FF99&area=true&hide_border=false&radius=16"
            alt="Activity Graph"
            className="max-w-full h-auto sm:h-[250px]"
            loading="lazy"
          />
        </div>

      </Panel>
    </div>
  );
}