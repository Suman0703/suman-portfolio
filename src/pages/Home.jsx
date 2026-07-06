import React from "react";
import Hero from "../components/Hero";
import SocialLinks from "../components/SocialLinks";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects"; // New import
import Footer from "../components/Footer";     // New import

export default function Home() {
  return (
    <div className="space-y-6">
      <Hero />
      <SocialLinks />
      
      <div className="flex flex-wrap gap-2 pt-2">
        {[
          "🏆 2nd — Cognizance 2026, IIT Roorkee",
          "🏆 2nd — CityCare Hackathon",
          "🎓 Oracle · Microsoft · IBM Certified",
        ].map((a) => (
          <span
            key={a}
            className="text-[11px] border border-dashed border-zinc-800 px-2.5 py-1 text-zinc-400"
          >
            {a}
          </span>
        ))}
      </div>

      <Skills />
      <Experience />
      
      {/* Add the new components here */}
      <Projects />
      <Footer />
    </div>
  );
}