
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-indigo-400 mono text-sm font-bold uppercase tracking-widest mb-4">01 // The Narrative</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Data without strategy is just noise. AI without ROI is just a toy.
          </h3>
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
            <p>
              As an <span className="text-white font-medium">MIS Specialist</span> and <span className="text-white font-medium">AI Strategist</span>, I don't just "implement" tools. I architect intelligence systems that solve core business friction.
            </p>
            <p>
              My philosophy is rooted in <span className="text-indigo-300 font-semibold italic">Precision Deployment</span>. Whether it's automating sales quote generation via AI agents or engineering custom Apex code for Salesforce, every line of logic must map directly to operational efficiency.
            </p>
            <p className="bg-indigo-950/30 border-l-4 border-indigo-500 p-4 rounded-r-lg italic text-slate-300">
              "My mission is to transform the complexity of Generative AI into measurable competitive advantages for high-tech enterprises."
            </p>
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-square glass rounded-3xl overflow-hidden border border-white/10 relative group">
            <div className="absolute inset-0 bg-indigo-600/10 mix-blend-overlay group-hover:bg-indigo-600/0 transition-all duration-700"></div>
            <img 
              src="https://picsum.photos/seed/ai-pro/800/800" 
              alt="Conceptual AI" 
              className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
            />
            <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl border border-white/20">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xl">JP</div>
                <div>
                  <h4 className="text-white font-bold">Joseph Patton</h4>
                  <p className="text-indigo-300 text-xs mono">Senior MIS @ Florida Atlantic University</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center border-t border-white/10 pt-4">
                <div>
                  <p className="text-white font-bold text-xl">3.6</p>
                  <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">GPA</p>
                </div>
                <div>
                  <p className="text-white font-bold text-xl">50k+</p>
                  <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Lines Generated</p>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-500/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
