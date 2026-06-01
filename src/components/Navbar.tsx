"use client";
import { useState, useEffect } from "react";

const links = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = links.map((l) => document.getElementById(l.toLowerCase()));
      const scrollY = window.scrollY + 100;
      let current = "";
      sections.forEach((sec) => {
        if (sec && sec.offsetTop <= scrollY) current = sec.id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#020817]/90 backdrop-blur-md border-b border-cyan-500/20" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold gradient-text font-mono">GP<span className="text-cyan-400">.</span></a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {links.map((l) => {
            const isActive = active === l.toLowerCase();
            return (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`}
                  className={`text-sm tracking-widest uppercase font-mono transition-colors relative pb-1 ${isActive ? "text-cyan-400" : "text-slate-400 hover:text-cyan-400"}`}>
                  {l}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-px bg-cyan-400 rounded-full" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden text-cyan-400" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#020817]/95 backdrop-blur-md border-b border-cyan-500/20 px-6 pb-4">
          {links.map((l) => {
            const isActive = active === l.toLowerCase();
            return (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                className={`block py-2.5 font-mono text-sm tracking-widest uppercase transition-colors border-b border-slate-800/50 last:border-0 ${isActive ? "text-cyan-400" : "text-slate-400 hover:text-cyan-400"}`}>
                {isActive && <span className="text-cyan-400 mr-2">▹</span>}{l}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
