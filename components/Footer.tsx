'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState(2024);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const socialLinks = [
    { icon: '💼', label: 'LinkedIn', url: '#' },
    { icon: '🐙', label: 'GitHub', url: '#' },
    { icon: '𝕏', label: 'Twitter', url: '#' },
    { icon: '📧', label: 'Email', url: '#' },
  ];

  const footerLinks = [
    { label: 'Home', url: '#' },
    { label: 'Projects', url: '#projects' },
    { label: 'Skills', url: '#skills' },
    { label: 'Contact', url: '#contact' },
  ];

  return (
    <footer className="border-t border-slate-700/50 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold">
                J
              </div>
              <span className="font-playfair font-bold text-lg">Jay Dev</span>
            </div>
            <p className="text-slate-400 text-sm">
              Full Stack Developer & Digital Marketing Expert
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-200">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.url} className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-200">Services</h4>
            <ul className="space-y-2">
              {[
                'Web Development',
                'Automation',
                'Digital Marketing',
                'Brand Design',
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-200">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  title={social.label}
                  className="w-10 h-10 rounded-lg glass-effect-dark flex items-center justify-center hover:border-blue-500 hover:bg-blue-500/10 transition-all hover:scale-110"
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/50 pt-8">
          {/* Bottom Info */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {year} Jay Dev. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Sitemap
              </a>
            </div>
          </div>

          {/* Built With */}
          <div className="mt-6 text-center text-xs text-slate-500">
            <p>
              Built with <span className="text-red-500">♥</span> using Next.js, React, TypeScript & Tailwind CSS
            </p>
            <p className="mt-2">
              Deployed on <span className="text-blue-400 font-semibold">Vercel</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
