
import React from 'react';
import { ChevronRight, Database, BrainCircuit, Rocket } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-sm animate-fade-in">
          <span className="mono text-xs font-semibold text-indigo-400 uppercase tracking-widest">
            Currently: Architecting LLM Workflows
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping"></div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white mb-6">
          Joseph <span className="gradient-text">Patton</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Bridging the gap between <span className="text-white font-medium">Enterprise Intelligence</span> and <span className="text-white font-medium">Neural Innovation</span>. Specializing in high-ROI AI integration.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#experience"
            className="group relative px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative flex items-center gap-2">
              View Impact Portfolio <ChevronRight size={18} />
            </span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/10 transition-all hover:bg-white/10"
          >
            Initiate Consultation
          </a>
        </div>

        <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
          <div className="glass p-6 rounded-2xl border border-white/5">
            <BrainCircuit className="text-indigo-400 mb-4" size={24} />
            <h3 className="text-white font-bold mb-2">Prompt Engineering</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Leveraging Claude Sonnet 4.5 and Amazon Bedrock for high-precision code generation.</p>
          </div>
          <div className="glass p-6 rounded-2xl border border-white/5">
            <Database className="text-cyan-400 mb-4" size={24} />
            <h3 className="text-white font-bold mb-2">Data Intelligence</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Transforming complex data silos into actionable Tableau visualizations and MIS systems.</p>
          </div>
          <div className="glass p-6 rounded-2xl border border-white/5">
            <Rocket className="text-indigo-300 mb-4" size={24} />
            <h3 className="text-white font-bold mb-2">Enterprise Scaling</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Specializing in Salesforce.com customization and automated AI-driven quote generation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
