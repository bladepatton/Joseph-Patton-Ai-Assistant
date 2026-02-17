
import React from 'react';
import { Mail, Github, Linkedin, Send, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-indigo-400 mono text-sm font-bold uppercase tracking-widest mb-4">04 // Secure Channel</h2>
          <h3 className="text-4xl font-bold text-white mb-8">Let's Architect Your AI Strategy</h3>
          <p className="text-slate-400 text-lg mb-12">
            Available for consulting roles, high-impact internships, and AI-driven workflow optimization projects.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-slate-300 group">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-indigo-600 transition-colors">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Email Encryption</p>
                <a href="mailto:jpatton2022@fau.edu" className="hover:text-indigo-400 transition-colors">jpatton2022@fau.edu</a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-300 group">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-indigo-600 transition-colors">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Direct Line</p>
                <a href="tel:+16509429324" className="hover:text-indigo-400 transition-colors">(650) 942-9324</a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-300 group">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-indigo-600 transition-colors">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Current Nexus</p>
                <p>Parkland, FL / Boca Raton, FL</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-12">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
              <Linkedin size={20} className="text-indigo-400" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
              <Github size={20} className="text-white" />
            </a>
          </div>
        </div>

        <div className="glass p-8 rounded-3xl border border-white/10">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mono ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mono ml-1">Identity (Email)</label>
                <input 
                  type="email" 
                  placeholder="john@enterprise.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mono ml-1">Mission Objective</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors appearance-none">
                <option value="consulting">AI Consulting</option>
                <option value="hiring">Hiring Inquiry</option>
                <option value="collaboration">Research Collaboration</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mono ml-1">Message Brief</label>
              <textarea 
                rows={4} 
                placeholder="Describe your requirements..." 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
              ></textarea>
            </div>

            <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 group shadow-lg shadow-indigo-600/20">
              Transmit Data <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
