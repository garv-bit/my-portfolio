import FadeIn from "./FadeIn";

const skillCategories = [
  {
    category: "Languages",
    icon: "💻",
    skills: ["Python", "Java", "JavaScript", "SQL", "C#", "HTML", "CSS"],
  },
  {
    category: "AI / ML",
    icon: "🤖",
    skills: ["Scikit-learn", "TensorFlow", "Pandas", "Matplotlib", "LangChain", "HuggingFace", "ChromaDB"],
  },
  {
    category: "Full Stack",
    icon: "🎨",
    skills: ["React", "Node.js", "REST APIs", "MongoDB", "MySQL", "PL/SQL", "Streamlit"],
  },
  {
    category: "Tools & Cloud",
    icon: "🛠️",
    skills: ["Git", "GitHub Copilot", "VS Code", "Azure", "AWS", "Selenium", "JUnit"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 grid-bg">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-2">// tech stack</p>
            <h2 className="text-4xl font-bold gradient-text">Skills & Technologies</h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map(({ category, icon, skills }, i) => (
            <FadeIn key={category} delay={i * 100}>
              <div className="border-gradient rounded-xl p-6 hover:scale-[1.02] transition-transform group h-full">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="text-cyan-400 font-mono font-bold mb-4 text-sm tracking-widest uppercase">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill}
                      className="px-2.5 py-1 bg-slate-800/60 border border-slate-700 group-hover:border-cyan-500/30 rounded-md text-xs text-slate-300 font-mono transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
