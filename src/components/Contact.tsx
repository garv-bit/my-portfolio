"use client";
import { useState } from "react";
import FadeIn from "./FadeIn";

const EMAIL = "garvptl05@gmail.com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // Replace YOUR_FORM_ID below with your Formspree form ID
      // Get one free at https://formspree.io — takes 2 minutes
      const res = await fetch("https://formspree.io/f/mdajqkvz", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) { setStatus("sent"); setForm({ name: "", email: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    { name: "GitHub", href: "https://github.com/garv-bit", icon: "GH" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/garv-patel-08b745287/", icon: "LI" },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-2">// get in touch</p>
            <h2 className="text-4xl font-bold gradient-text">Contact Me</h2>
            <p className="text-slate-400 mt-4">Have a project in mind or just want to say hi? I&apos;d love to hear from you.</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: socials + email copy */}
          <FadeIn delay={100}>
            <div className="space-y-6">
              <p className="text-slate-300 leading-relaxed">
                I&apos;m currently open to new opportunities, freelance projects, and collaborations.
                Feel free to reach out through the form or any of the platforms below.
              </p>

              {/* Copy email */}
              <div className="border-gradient rounded-xl p-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-slate-300 font-mono text-sm">{EMAIL}</p>
                </div>
                <button onClick={copyEmail}
                  className="flex items-center gap-2 px-3 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 rounded-lg text-cyan-400 text-xs font-mono transition-all shrink-0">
                  {copied ? (
                    <><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Copied!</>
                  ) : (
                    <><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>Copy</>
                  )}
                </button>
              </div>

              {/* Socials */}
              <div className="grid grid-cols-2 gap-3">
                {socials.map((s) => (
                  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 border-gradient rounded-lg p-3 hover:scale-105 transition-transform group">
                    <span className="w-8 h-8 bg-cyan-500/10 border border-cyan-500/20 rounded-md flex items-center justify-center text-xs font-mono font-bold text-cyan-400 group-hover:bg-cyan-500/20">
                      {s.icon}
                    </span>
                    <span className="text-slate-400 group-hover:text-white transition-colors text-sm font-mono">{s.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right: form */}
          <FadeIn delay={200}>
            {status === "sent" ? (
              <div className="border-gradient rounded-xl p-8 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                <button onClick={() => setStatus("idle")} className="mt-4 text-cyan-400 font-mono text-sm hover:underline">Send another →</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {(["name", "email"] as const).map((field) => (
                  <div key={field}>
                    <label className="block text-xs font-mono text-cyan-400 mb-1 uppercase tracking-widest">{field}</label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      required
                      value={form[field]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      className="w-full bg-slate-900/60 border border-slate-700 focus:border-cyan-500 rounded-lg px-4 py-2.5 text-slate-200 text-sm outline-none transition-colors font-mono"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-mono text-cyan-400 mb-1 uppercase tracking-widest">message</label>
                  <textarea rows={5} required value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-slate-900/60 border border-slate-700 focus:border-cyan-500 rounded-lg px-4 py-2.5 text-slate-200 text-sm outline-none transition-colors font-mono resize-none"
                  />
                </div>
                {status === "error" && (
                  <p className="text-red-400 text-xs font-mono">Something went wrong. Try emailing directly.</p>
                )}
                <button type="submit" disabled={status === "sending"}
                  className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-[#020817] font-bold rounded-lg transition-all glow-cyan hover:scale-[1.02] font-mono">
                  {status === "sending" ? "Sending..." : "Send Message →"}
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
