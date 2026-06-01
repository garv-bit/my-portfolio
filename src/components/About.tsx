import FadeIn from "./FadeIn";

export default function About() {
  const stats = [
    { label: "Projects Built", value: "10+" },
    { label: "Technologies", value: "15+" },
    { label: "Lines of Code", value: "50K+" },
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-2">// about me</p>
            <h2 className="text-4xl font-bold gradient-text">Who I Am</h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn delay={100}>
            <div className="space-y-5">
              <p className="text-slate-300 text-lg leading-relaxed">
                I&apos;m <span className="text-cyan-400 font-semibold">Garv Patel</span>, an aspiring Software Developer based in Toronto, ON with strong hands-on experience in full-stack development, AI/ML, and software engineering.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I&apos;ve built full-stack applications, developed RESTful APIs, worked with databases, and applied AI/ML techniques through academic projects, hackathons, and college-based industry collaborations.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I learn quickly, solve problems independently, and thrive in team environments. Currently completing my Advanced Diploma in AI Software Engineering at Centennial College with a GPA of 3.69/4.5.
              </p>

              <div className="flex gap-4 pt-2">
                <a href="#contact"
                  className="px-6 py-2.5 bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-400 text-cyan-400 rounded-lg font-mono text-sm transition-all hover:bg-cyan-500/20">
                  Contact Me →
                </a>
                <a href="/Garv_Patel_Resume.docx" download
                  className="flex items-center gap-2 px-6 py-2.5 bg-purple-500/10 border border-purple-500/30 hover:border-purple-400 text-purple-400 hover:text-purple-300 rounded-lg font-mono text-sm transition-all hover:bg-purple-500/20">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Resume
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ label, value }) => (
                <div key={label} className="border-gradient rounded-xl p-6 text-center hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold gradient-text mb-1">{value}</div>
                  <div className="text-slate-400 text-sm font-mono">{label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
