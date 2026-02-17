
import React from 'react';
import { Target, Zap, TrendingUp, ShieldCheck, Briefcase } from 'lucide-react';
import { ImpactCardData } from '../types';

const experiences: ImpactCardData[] = [
  {
    company: "RFM LLC",
    role: "AI Consultant",
    period: "2024 - Present",
    problem: "Manual, slow sales quote generation and inconsistent technical documentation for high-tech clients.",
    solution: "Architected an AI agent (Claude 4.5 via Bedrock) to automate quote workflows and implemented customized Salesforce Apex solutions.",
    roi: "Significant reduction in manual effort; enhanced production code consistency via advanced prompt engineering.",
    tags: ["LLMs", "Amazon Bedrock", "Salesforce", "Apex", "Prompt Engineering"]
  },
  {
    company: "Edifecs",
    role: "Product Support Intern",
    period: "Q2 2024",
    problem: "Inefficiencies in product support tools and mapping client files during support transitions.",
    solution: "Engineered automation tools using Specbuilder and WingFtp; mapped critical client files to streamline transitions.",
    roi: "Accelerated support response times and improved leadership visibility into achievement metrics.",
    tags: ["Technical Support", "Automation", "Account Access Control"]
  },
  {
    company: "RFM LLC",
    role: "Operations Manager",
    period: "2021 - 2024",
    problem: "Complex logistics for e-commerce and maintenance of multi-GPU cryptocurrency mining infrastructure.",
    solution: "Designed custom inventory tracking systems and configured high-performance server hardware; managed full-cycle financial records.",
    roi: "Drove revenue growth by acquiring new consulting clients and optimizing hardware component lifecycle.",
    tags: ["Operations", "Server Infrastructure", "Inventory Management", "ERP"]
  },
  {
    company: "Daidala",
    role: "Business Analyst",
    period: "2020 - 2021",
    problem: "Early-stage startup required strategic direction and reliable product validation in a competitive market.",
    solution: "Led competitive market research and executed rigorous QA testing protocols for system enhancements.",
    roi: "Secured key sales partners through data-backed market analysis; ensured 100% product reliability at launch.",
    tags: ["Market Research", "QA Testing", "Strategy", "Startups"]
  }
];

const Experience: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-indigo-400 mono text-sm font-bold uppercase tracking-widest mb-4">02 // The Proof</h2>
        <h3 className="text-4xl font-bold text-white mb-4">Impact Portfolio</h3>
        <p className="text-slate-400 max-w-xl">Transforming business challenges into technical triumphs through strategic AI and MIS systems.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="glass p-8 rounded-3xl border border-white/5 relative group hover:border-indigo-500/50 transition-all duration-500">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 group-hover:text-indigo-400 transition-opacity">
              <Briefcase size={40} />
            </div>
            
            <div className="flex items-center justify-between mb-8">
              <div>
                <h4 className="text-2xl font-bold text-white mb-1">{exp.company}</h4>
                <p className="text-indigo-400 font-medium">{exp.role}</p>
              </div>
              <span className="text-xs font-bold px-3 py-1 bg-white/5 border border-white/10 rounded-full text-slate-400 uppercase tracking-tighter">
                {exp.period}
              </span>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1"><Target size={18} className="text-slate-500" /></div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-1">The Friction</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{exp.problem}</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1"><Zap size={18} className="text-indigo-400" /></div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-indigo-400 mb-1">The Solution</p>
                  <p className="text-slate-300 text-sm leading-relaxed font-medium">{exp.solution}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1"><TrendingUp size={18} className="text-cyan-400" /></div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-cyan-400 mb-1">The Impact (ROI)</p>
                  <p className="text-slate-200 text-sm leading-relaxed italic">{exp.roi}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-white/5">
              {exp.tags.map(tag => (
                <span key={tag} className="text-[10px] px-2 py-1 bg-indigo-950/40 text-indigo-200 rounded border border-indigo-500/20 mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
