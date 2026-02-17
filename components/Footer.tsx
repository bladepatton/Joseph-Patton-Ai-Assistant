
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-slate-500 text-sm mono">
          &copy; {new Date().getFullYear()} Joseph Patton. [ALL_RIGHTS_RESERVED]
        </div>
        
        <div className="flex items-center gap-4 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
          <span>Built with React + Tailwind</span>
          <span className="w-1 h-1 rounded-full bg-slate-700"></span>
          <span>Optimized via Claude Sonnet 4.5</span>
          <span className="w-1 h-1 rounded-full bg-slate-700"></span>
          <span className="text-indigo-400">v2.0.4-STABLE</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
