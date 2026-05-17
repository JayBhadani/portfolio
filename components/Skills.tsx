'use client';

import { useState } from 'react';

interface Skill {
  category: string;
  icon: string;
  items: string[];
  color: string;
  description: string;
}

const skills: Skill[] = [
  {
    category: 'Development',
    icon: '💻',
    color: 'from-blue-500 to-cyan-500',
    description: 'Web & Backend Development',
    items: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'Python', '.NET', 'REST APIs', 'Databases'],
  },
  {
    category: 'Automation',
    icon: '⚙️',
    color: 'from-purple-500 to-pink-500',
    description: 'Workflow & Process Automation',
    items: ['n8n Automation', 'Workflow Design', 'API Integration', 'Task Automation', 'Data Processing', 'Scheduled Tasks'],
  },
  {
    category: 'AI & Machine Learning',
    icon: '🤖',
    color: 'from-green-500 to-emerald-500',
    description: 'AI & ML Basics',
    items: ['Machine Learning Basics', 'Data Analysis', 'AI Integration', 'Predictive Models', 'NLP Fundamentals'],
  },
  {
    category: 'Design & Creative',
    icon: '🎨',
    color: 'from-orange-500 to-red-500',
    description: 'Design & Content Creation',
    items: ['Logo Design', 'UI/UX Design', 'Video Editing', 'Motion Graphics', 'Brand Identity', 'Creative Assets'],
  },
  {
    category: 'Digital Marketing',
    icon: '📱',
    color: 'from-indigo-500 to-purple-500',
    description: 'Digital Growth Strategies',
    items: ['SEM', 'Email Marketing', 'Content Marketing', 'Social Media Marketing', 'SEO', 'Analytics', 'Campaign Strategy'],
  },
  {
    category: 'Audio Marketing',
    icon: '🎙️',
    color: 'from-rose-500 to-pink-500',
    description: 'Podcast & Audio Content',
    items: ['Podcast Production', 'Audio Editing', 'Voiceover', 'Audio Branding', 'Sound Design'],
  },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [expandedCategory, setExpandedCategory] = useState<number | null>(0);

  const active = skills[selectedCategory];

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="mb-4">My Expertise</h2>
          <p className="text-xl text-slate-400">
            A comprehensive skillset built over years of professional experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Category List */}
          <div className="md:col-span-1 space-y-3">
            {skills.map((skill, idx) => (
              <button
                key={skill.category}
                onClick={() => {
                  setSelectedCategory(idx);
                  setExpandedCategory(null);
                }}
                className={`w-full p-4 rounded-xl text-left transition-all transform hover:scale-105 ${
                  selectedCategory === idx
                    ? `bg-gradient-to-r ${skill.color} text-white shadow-lg shadow-purple-500/50`
                    : 'glass-effect-dark hover:border-slate-500 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <div>
                    <p className="font-bold">{skill.category}</p>
                    <p className="text-xs opacity-75">{skill.items.length} skills</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Detailed View */}
          <div className="md:col-span-2">
            <div
              key={active.category}
              className="animate-fade-in-up"
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${active.color} rounded-xl p-8 text-white mb-8`}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl">{active.icon}</span>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{active.category}</h3>
                    <p className="text-white/90">{active.description}</p>
                  </div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {active.items.map((item, idx) => (
                  <div
                    key={item}
                    className="glass-effect-dark p-4 rounded-lg hover:border-blue-500 hover:bg-blue-500/10 cursor-pointer transform hover:scale-105 transition-all"
                    style={{
                      animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s forwards`,
                      opacity: 0,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${active.color}`} />
                      <span className="font-semibold">{item}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-6 glass-effect-dark rounded-xl border-l-4 border-blue-500">
                <p className="text-slate-300">
                  <span className="text-blue-400 font-bold">Specialized in:</span> Delivering production-ready solutions with expertise in {active.category.toLowerCase()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden mt-12 space-y-3">
          {skills.map((skill, idx) => (
            <div key={skill.category} className="glass-effect-dark rounded-xl overflow-hidden">
              <button
                onClick={() => setExpandedCategory(expandedCategory === idx ? null : idx)}
                className="w-full p-4 flex items-center justify-between hover:bg-slate-800/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="font-bold">{skill.category}</span>
                </div>
                <span className={`transform transition-transform ${expandedCategory === idx ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {expandedCategory === idx && (
                <div className="px-4 pb-4 space-y-2 border-t border-slate-700">
                  {skill.items.map((item) => (
                    <div key={item} className="py-2 text-slate-300 flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color}`} />
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
