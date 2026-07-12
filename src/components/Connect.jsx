import React from "react";
import { FileDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./BrandIcons";
import Panel from "./Panel";

function ConnectButton({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 text-xs font-mono border border-zinc-700 bg-zinc-900/50 px-5 py-2.5 hover:border-neon hover:text-neon hover:bg-neon/5 transition-all duration-300 hover:-translate-y-1 rounded-sm shadow-sm"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

export default function Connect() {
  return (
    <div className="pt-8 pb-4">
      <Panel className="text-center relative overflow-hidden group !p-10 sm:!p-12">

        <div className="absolute inset-0 bg-gradient-to-t from-neon/[0.04] to-transparent pointer-events-none" />

        <div className="relative z-10 space-y-3">
          <h2 className="text-2xl font-bold text-zinc-100 flex items-center justify-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-neon animate-pulse shadow-[0_0_8px_#00FF99]"></span>
            Let's Connect
          </h2>
          <p className="text-sm text-zinc-400 font-sans max-w-md mx-auto">
            Feel free to reach out through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>
        </div>

        <div className="relative z-10 flex flex-wrap justify-center gap-3 pt-8">
          <ConnectButton
            href="https://twitter.com/suman_mehmi0307"
            icon={<TwitterIcon size={15} />}
            label="Twitter"
          />
          <ConnectButton
            href="https://github.com/Suman0703"
            icon={<GithubIcon size={15} />}
            label="GitHub"
          />
          <ConnectButton
            href="https://www.linkedin.com/in/suman-devi-220241348"
            icon={<LinkedinIcon size={15} />}
            label="LinkedIn"
          />
          <ConnectButton
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sumandevimehmi36@gmail.com&su=Portfolio+Inquiry+-+Suman+Devi"
            icon={<Mail size={15} />}
            label="Email"
          />
        </div>
      </Panel>
    </div>
  );
}