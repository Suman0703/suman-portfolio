import React from "react";
import { ExternalLink, ArrowRight } from "lucide-react"; // Removed Github from here
import { GithubIcon } from "./BrandIcons"; // Imported your custom Github icon here
import Panel from "./Panel";
import Bracket from "./Bracket";

const projectsData = [
    {
        name: "CityCare",
        badge: "🏆 2nd Position — Hackathon",
        desc: "A civic issue reporting platform enabling citizens to report public infrastructure issues with images and location details, with real-time status tracking and admin resolution workflows.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
        live: "https://citycarepseudocoders.vercel.app",
        repo: "https://github.com/Suman0703",
    },
    {
        name: "Campus Connect",
        badge: "Full-Stack · Solo Build",
        desc: "A campus grievance and communication platform to digitize student complaint reporting, with role-based dashboards for Students, Admins, and Superadmins.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
        live: "https://campus-connect-problem-resolver.vercel.app",
        repo: "https://github.com/Suman0703",
    },
    {
        name: "Sky Builder",
        badge: "✨ AI-Powered",
        desc: "An AI resume generation platform that turns user input into professional, ATS-friendly resumes using Generative AI (Groq + LLaMA), with live preview and PDF export.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
        live: "https://sky-builder-ai-resume.vercel.app",
        repo: "https://github.com/Suman0703",
    },
    {
        name: "Moz Dashboard Clone",
        badge: "Pixel-Perfect UI",
        desc: "A pixel-perfect clone of the Moz Domain Analysis Dashboard, focused on component architecture, responsive layouts, and clean state management.",
        tech: ["React.js", "Tailwind CSS"],
        live: "https://moz-domain-analysis-clone.vercel.app",
        repo: "https://github.com/Suman0703",
    },
];

function ProjectCard({ p }) {
    return (
        <Panel className="grid sm:grid-cols-[220px_1fr] gap-5 items-start">
            <div className="relative aspect-video sm:aspect-auto sm:h-full rounded-sm overflow-hidden bg-gradient-to-br from-violet-950 via-zinc-950 to-rose-950 border border-zinc-800 flex flex-col">
                <div className="flex items-center gap-1.5 px-2 py-1.5 border-b border-zinc-800/80">
                    <span className="h-2 w-2 rounded-full bg-rose-500/70" />
                    <span className="h-2 w-2 rounded-full bg-amber-400/70" />
                    <span className="h-2 w-2 rounded-full bg-emerald-500/70" />
                    <span className="absolute top-1 right-2 text-[9px] font-mono px-1.5 py-0.5 bg-black/60 text-zinc-300 rounded">
                        {p.badge}
                    </span>
                </div>
                <div className="flex-1 flex items-center justify-center p-3">
                    <span className="text-center text-sm font-semibold bg-gradient-to-r from-violet-400 to-rose-400 bg-clip-text text-transparent">
                        {p.name}
                    </span>
                </div>
            </div>
            <div>
                <div className="flex items-center justify-between gap-3 flex-wrap">
                    <h3 className="font-mono text-base font-semibold text-zinc-50">
                        {p.name}
                    </h3>
                    <div className="flex gap-2">
                        <a
                            href={p.live}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-mono border border-zinc-700 px-2 py-1 hover:border-violet-500 hover:text-violet-300 transition-colors"
                        >
                            <ExternalLink size={11} /> Live
                        </a>
                        <a
                            href={p.repo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-mono border border-zinc-700 px-2 py-1 hover:border-violet-500 hover:text-violet-300 transition-colors"
                        >
                            <GithubIcon size={11} /> GitHub
                        </a>
                    </div>
                </div>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">{p.desc}</p>
                <p className="text-[10px] font-mono text-zinc-600 mt-3 mb-1.5 uppercase tracking-wider">
                    Technologies Used
                </p>
                <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                        <span
                            key={t}
                            className="text-[10px] font-mono px-2 py-0.5 border border-zinc-800 text-zinc-400"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </Panel>
    );
}

export default function Projects() {
    return (
        <div className="space-y-3 pt-2">
            <Bracket>My Projects</Bracket>
            <div className="space-y-4">
                {projectsData.map((p) => (
                    <ProjectCard key={p.name} p={p} />
                ))}
            </div>
            <div className="flex justify-end">
                <a
                    href="https://github.com/Suman0703"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs border border-zinc-700 px-3 py-1.5 hover:border-violet-500 hover:text-violet-300 transition-colors"
                >
                    More Projects <ArrowRight size={12} />
                </a>
            </div>
        </div>
    );
}