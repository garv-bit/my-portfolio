import FadeIn from "./FadeIn";

const education = [
  {
    degree: "Advanced Diploma in AI Software Engineering",
    institution: "Centennial College",
    period: "Sept 2023 – Apr 2026",
    detail: "Machine Learning · Full Stack Development · Testing & QA · Data Structures · Data Analysis",
    gpa: "GPA: 3.69 / 4.5",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 grid-bg">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-2">// background</p>
            <h2 className="text-4xl font-bold gradient-text">Education</h2>
          </div>
        </FadeIn>

        {education.map((edu, i) => (
          <FadeIn key={i} delay={100}>
            <div className="border-gradient rounded-xl p-8 max-w-xl mx-auto text-center">
              <p className="text-2xl font-bold text-white mb-2">{edu.degree}</p>
              <p className="text-cyan-400 font-mono mb-1">{edu.institution}</p>
              <p className="text-slate-500 text-sm font-mono mb-3">{edu.period}</p>
              <p className="text-slate-400 text-sm mb-2">{edu.detail}</p>
              {"gpa" in edu && <p className="text-purple-400 font-mono text-sm font-bold">{(edu as typeof edu & { gpa: string }).gpa}</p>}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
