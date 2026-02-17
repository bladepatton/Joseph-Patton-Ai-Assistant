
import React from 'react';
import { Cpu } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'experience', label: 'Experience' },
    { id: 'tech', label: 'Stack' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 px-6 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between glass px-6 py-3 rounded-full border border-white/10 shadow-2xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <Cpu size={20} className="text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white hidden sm:inline-block">
            JP<span className="text-indigo-400">.AI</span>
          </span>
        </div>

        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`text-sm font-medium transition-colors hover:text-indigo-400 ${
                  activeSection === item.id ? 'text-indigo-400' : 'text-slate-400'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <div className="flex items-center gap-2 bg-indigo-950/40 border border-indigo-500/20 px-3 py-1 rounded-full">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-200 mono">
              System Live
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
