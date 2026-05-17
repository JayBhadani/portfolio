'use client';

import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: string;
  image: string;
  link: string;
  details: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Automated Workflow Manager',
    description: 'n8n-powered automation platform for complex business processes',
    tech: ['n8n', 'API Integration', 'Automation'],
    category: 'Automation',
    image: '⚙️',
    link: '#',
    details: 'Streamlined data processing with 80% time reduction for clients',
  },
  {
    id: 2,
    title: 'E-Commerce Dashboard',
    description: 'Full-stack React & Next.js platform with real-time analytics',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    category: 'Development',
    image: '🛒',
    link: '#',
    details: 'Increased conversion rate by 45% through optimized UI/UX',
  },
  {
    id: 3,
    title: 'Python Data Analytics Tool',
    description: 'Advanced data processing and visualization application',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Database'],
    category: 'Development',
    image: '📊',
    link: '#',
    details: 'Processed 1M+ records with real-time insights generation',
  },
  {
    id: 4,
    title: '.NET Enterprise API',
    description: 'Scalable backend API for enterprise applications',
    tech: ['.NET', 'C#', 'REST API', 'Database Design'],
    category: 'Development',
    image: '🔧',
    link: '#',
    details: 'Handled 10K+ concurrent users with 99.9% uptime',
  },
  {
    id: 5,
    title: 'AI-Powered Chatbot',
    description: 'Machine learning-based customer support automation',
    tech: ['AI/ML', 'Python', 'NLP', 'Integration'],
    category: 'AI/ML',
    image: '🤖',
    link: '#',
    details: 'Resolved 85% of queries without human intervention',
  },
  {
    id: 6,
    title: 'Digital Marketing Campaign',
    description: 'Comprehensive SEM & Email Marketing strategy execution',
    tech: ['SEM', 'Email Marketing', 'Analytics', 'Content'],
    category: 'Marketing',
    image: '📱',
    link: '#',
    details: '300% ROI improvement through strategic marketing optimization',
  },
  {
    id: 7,
    title: 'Brand Identity Package',
    description: 'Complete logo design and brand guidelines creation',
    tech: ['Logo Design', 'Brand Identity', 'Design Systems'],
    category: 'Design',
    image: '🎨',
    link: '#',
    details: 'Delivered cohesive brand identity for 50+ startups',
  },
  {
    id: 8,
    title: 'Video Marketing Series',
    description: 'Professional video editing and production for social media',
    tech: ['Video Editing', 'Motion Graphics', 'Audio Design'],
    category: 'Design',
    image: '🎬',
    link: '#',
    details: '5M+ total views across all platforms',
  },
];

const categories = ['All', ...new Set(projects.map(p => p.category))];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filtered = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-400">
            Showcase of successful projects and client solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-110 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/50'
                  : 'glass-effect-dark hover:border-blue-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filtered.map((project, idx) => (
            <div
              key={project.id}
              className="group glass-effect-dark rounded-xl overflow-hidden hover:border-blue-500 cursor-pointer transform hover:scale-105 transition-all animate-fade-in-up"
              style={{
                animationDelay: `${idx * 0.1}s`,
                animationFillMode: 'forwards',
                opacity: 0,
              }}
            >
              {/* Project Image/Icon Area */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 h-48 flex items-center justify-center relative overflow-hidden group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-colors">
                <span className="text-7xl group-hover:scale-125 transition-transform duration-300">
                  {project.image}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                {/* Title */}
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400">{project.description}</p>
                </div>

                {/* Details */}
                <p className="text-sm text-green-400 font-semibold">
                  {project.details}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-slate-800/50 text-xs font-mono text-blue-300 border border-slate-700 group-hover:border-blue-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="pt-4">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-semibold group-hover:gap-3"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12 animate-fade-in-up">
          <p className="text-slate-400 mb-4">
            Interested in more? Let's discuss your project!
          </p>
          <button className="btn-primary">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
