export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 px-6 text-center">
      <p className="text-slate-500 text-sm font-mono">
        Designed & Built by{" "}
        <span className="text-cyan-400">Garv Patel</span>
        {" "}· {new Date().getFullYear()}
      </p>
      <p className="text-slate-600 text-xs font-mono mt-1">
        Built with Next.js · Tailwind CSS
      </p>
    </footer>
  );
}
