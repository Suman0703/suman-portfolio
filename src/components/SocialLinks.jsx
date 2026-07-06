import React from "react";
import { Mail, FileDown } from "lucide-react"; 
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./BrandIcons"; 
import Panel from "./Panel";

export default function SocialLinks() {
  return (
    <div className="space-y-4">
      {/* Primary Social Cards */}
      <div className="grid sm:grid-cols-2 gap-3">
        <Panel className="flex items-center justify-between !p-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-zinc-800 flex items-center justify-center">
              <GithubIcon size={16} />
            </div>
            <div>
              <p className="text-xs font-semibold text-zinc-100">Suman Devi</p>
              <p className="text-[11px] text-zinc-500">@Suman0703</p>
            </div>
          </div>
          <a
            href="https://github.com/Suman0703"
            target="_blank"
            rel="noreferrer"
            className="text-[11px] border border-zinc-700 px-2.5 py-1 hover:border-violet-500 hover:text-violet-300 transition-colors"
          >
            Follow
          </a>
        </Panel>
        
        <Panel className="flex items-center justify-between !p-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-zinc-800 flex items-center justify-center">
              <LinkedinIcon size={16} />
            </div>
            <div>
              <p className="text-xs font-semibold text-zinc-100">Let's connect</p>
              <p className="text-[11px] text-zinc-500">Open to new roles</p>
            </div>
          </div>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-[11px] bg-violet-600 text-white px-2.5 py-1 hover:bg-violet-500 transition-colors"
          >
            View
          </a>
        </Panel>
      </div>

      {/* Quick Links Row */}
      <div className="flex flex-wrap gap-2">
        <a
          href="mailto:sumandevimehmi36@gmail.com"
          className="inline-flex items-center gap-1.5 text-xs border border-zinc-700 px-3 py-1.5 hover:border-violet-500 hover:text-violet-300 transition-colors"
        >
          <Mail size={12} /> Email Me
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          className="inline-flex items-center gap-1.5 text-xs border border-zinc-700 px-3 py-1.5 hover:border-violet-500 hover:text-violet-300 transition-colors"
        >
          <FileDown size={12} /> Resume
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs border border-zinc-700 px-3 py-1.5 hover:border-violet-500 hover:text-violet-300 transition-colors"
        >
          <InstagramIcon size={12} />
        </a>
      </div>
    </div>
  );
}