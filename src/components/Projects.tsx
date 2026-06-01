const projects = [
  {
    title: "Document Q&A with RAG",
    description: "A smart document Q&A system using RAG (Retrieval Augmented Generation) to chat with PDFs. Built with Streamlit, LangChain, Groq, and ChromaDB.",
    tags: ["Python", "LangChain", "Groq", "ChromaDB", "Streamlit"],
    github: "https://github.com/garv-bit/document-qa-rag",
    live: null,
    featured: true,
  },
  {
    title: "Real vs AI Face Detector",
    description: "Neural network model that distinguishes between real human faces and AI-generated synthetic faces. Group project with full training pipeline.",
    tags: ["Python", "Neural Networks", "Deep Learning", "Computer Vision"],
    github: "https://github.com/garv-bit/Real_or_AI_NeuralNetworks_Project",
    live: null,
    featured: true,
  },
  {
    title: "Dormancy Fraud Detection",
    description: "Machine learning system for detecting fraud patterns in dormant accounts, combining dormancy-awareness with anomaly detection techniques.",
    tags: ["Python", "Machine Learning", "Fraud Detection"],
    github: "https://github.com/garv-bit/Dormancy-Aware-Fraud-Detection",
    live: null,
    featured: true,
  },
];

import FadeIn from "./FadeIn";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-2">// my work</p>
            <h2 className="text-4xl font-bold gradient-text">Projects</h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={i * 100}>
              <ProjectCard project={p} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="border-gradient rounded-xl p-6 flex flex-col gap-4 hover:scale-[1.02] transition-transform group">
      <div className="flex items-start justify-between">
        <div className="text-cyan-400 opacity-30 group-hover:opacity-100 transition-opacity">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h8M8 14h5" />
          </svg>
        </div>
        <div className="flex gap-3">
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="text-slate-500 hover:text-cyan-400 transition-colors" aria-label="GitHub">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="text-slate-500 hover:text-cyan-400 transition-colors" aria-label="Live">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>

      <div>
        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-2 pt-2">
        {project.tags.map((t) => (
          <span key={t} className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded">{t}</span>
        ))}
      </div>

      <a href={project.github} target="_blank" rel="noopener noreferrer"
        className="mt-auto flex items-center gap-2 justify-center w-full py-2 border border-slate-700 hover:border-cyan-500 hover:text-cyan-400 text-slate-400 rounded-lg text-sm font-mono transition-all">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
        View on GitHub
      </a>
    </div>
  );
}
