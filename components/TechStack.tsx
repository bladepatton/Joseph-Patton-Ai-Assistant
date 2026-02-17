
import React from 'react';
import { Layers, Bot, Cloud, Terminal, CheckCircle2 } from 'lucide-react';
import { TechItem } from '../types';

const techItems: TechItem[] = [
  {
    category: "LLMs & Agentic Frameworks",
    skills: ["Claude Sonnet 4.5", "Amazon Bedrock", "Prompt Engineering", "AI Sales Agents", "LLM Fine-tuning"]
  },
  {
    category: "Neural & Data Architecture",
    skills: ["Tableau Dashboards", "Data Science", "Competitive Analysis", "SQL", "Market Research"]
  },
  {
    category: "Cloud & Infrastructure",
    skills: ["Salesforce.com", "Amazon AWS", "CRM Workflows", "Multi-GPU Infrastructure", "IT Support"]
  },
  {
    category: "Programming Languages",
    skills: ["Python", "Apex (Salesforce)", "Java", "C", "Excel Mastery"]
  }
];

const TechStack: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-indigo-400 mono text-sm font-bold uppercase tracking-widest mb-4">03 // Intelligence Stack</h2>
        <h3 className="text-4xl font-bold text-white mb-6">Mastering the Modern Enterprise</h3>
        <p className="text-slate-400 max-w-2xl mx-auto">Categorized technical expertise bridging raw processing power with sophisticated business logic.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {techItems.map((group, idx) => (
          <div key={idx} className="glass p-6 rounded-2xl border border-white/5 group hover:bg-white/10 transition-colors">
            <div className="mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center text-indigo-400">
                {idx === 0 && <Bot size={22} />}
                {idx === 1 && <Layers size={22} />}
                {idx === 2 && <Cloud size={22} />}
                {idx === 3 && <Terminal size={22} />}
              </div>
              <h4 className="text-white font-bold leading-tight text-sm uppercase tracking-wider">{group.category}</h4>
            </div>
            
            <ul className="space-y-3">
              {group.skills.map(skill => (
                <li key={skill} className="flex items-center gap-2 text-slate-400 text-sm">
                  <CheckCircle2 size={14} className="text-indigo-500" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-20 p-8 glass rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1">
          <h4 className="text-xl font-bold text-white mb-2">Education: Florida Atlantic University</h4>
          <p className="text-indigo-300 mono text-sm mb-2">BS/MS Combined Program in MIS (Senior)</p>
          <div className="flex gap-4 mt-4">
             <div className="px-3 py-1 bg-indigo-500/10 rounded-full border border-indigo-500/20">
                <span className="text-[10px] text-indigo-300 font-bold uppercase tracking-widest">GPA: 3.6</span>
             </div>
             <div className="px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20">
                <span className="text-[10px] text-cyan-300 font-bold uppercase tracking-widest">Expected 2025</span>
             </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-md">
          {["Python", "Blockchain", "Big Data", "Business Innovation with AI"].map(course => (
            <span key={course} className="text-[10px] px-2 py-1 glass rounded-md text-slate-300 border border-white/5 uppercase font-medium">
              {course}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
