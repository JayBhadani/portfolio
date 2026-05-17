'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Animated Badge */}
        <div
          className={`inline-block px-4 py-2 rounded-full glass-effect-dark border border-blue-500/30 ${
            isLoaded ? 'animate-fade-in-down' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          <span className="text-sm font-space-mono text-blue-400">Welcome to my portfolio</span>
        </div>

        {/* Main Heading */}
        <h1
          className={`${
            isLoaded ? 'animate-fade-in-up' : 'opacity-0'
          } leading-tight`}
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          <span className="block mb-2">Full Stack Developer</span>
          <span className="gradient-text">& Digital Marketing Expert</span>
        </h1>

        {/* Subheading */}
        <p
          className={`text-xl text-slate-400 max-w-2xl mx-auto ${
            isLoaded ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          I craft modern web applications with React & Next.js, build automation with n8n, develop with Python & .NET, and drive digital growth through strategic marketing.
        </p>

        {/* Tech Stack */}
        <div
          className={`flex flex-wrap justify-center gap-3 ${
            isLoaded ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
        >
          {['React', 'Next.js', 'Python', '.NET', 'n8n', 'JavaScript'].map((tech) => (  
            <span
              key={tech}
              className="px-4 py-2 rounded-full glass-effect-dark border border-slate-600 text-sm font-space-mono hover:border-blue-500 hover:text-blue-400 transform hover:scale-110"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center ${
            isLoaded ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="btn-primary"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-secondary"
          >
            Get in Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`pt-8 flex justify-center ${
            isLoaded ? 'animate-float' : 'opacity-0'
          }`}
          style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
        >
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-blue-500 rounded-full mt-2 animate-pulse-subtle" />
          </div>
        </div>
      </div>
    </section>
  );
}
