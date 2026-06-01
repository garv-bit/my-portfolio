"use client";
import { useEffect, useState } from "react";

const roles = ["AI Engineer", "Full Stack Developer", "ML Enthusiast", "Problem Solver"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = roles[roleIndex];
    let i = typing ? 0 : role.length;
    const interval = setInterval(() => {
      if (typing) {
        setDisplayed(role.slice(0, i + 1));
        i++;
        if (i === role.length) { clearInterval(interval); setTimeout(() => setTyping(false), 1500); }
      } else {
        setDisplayed(role.slice(0, i - 1));
        i--;
        if (i === 0) { clearInterval(interval); setRoleIndex((prev) => (prev + 1) % roles.length); setTyping(true); }
      }
    }, typing ? 80 : 40);
    return () => clearInterval(interval);
  }, [roleIndex, typing]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border-gradient rounded-full px-4 py-2 mb-8 text-sm font-mono text-cyan-400">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          Available for opportunities
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
          Hi, I&apos;m{" "}
          <span className="gradient-text text-glow">Garv Patel</span>
        </h1>

        <div className="text-2xl md:text-3xl font-mono text-slate-300 mb-6 h-10">
          <span className="text-cyan-400">&gt;</span>{" "}
          <span>{displayed}</span>
          <span className="cursor-blink text-cyan-400">|</span>
        </div>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Building intelligent systems at the intersection of AI and software engineering.
          Turning complex problems into elegant, scalable solutions.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#projects"
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-[#020817] font-bold rounded-lg transition-all glow-cyan hover:scale-105 font-mono">
            View Projects
          </a>
          <a href="#contact"
            className="px-8 py-3 border-gradient rounded-lg text-cyan-400 hover:text-white font-mono transition-all hover:scale-105">
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
