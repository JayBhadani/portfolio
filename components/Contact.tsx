'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would send the form data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="mb-4">Let's Work Together</h2>
          <p className="text-xl text-slate-400">
            Have a project in mind? I'd love to hear about it!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          {[
            { icon: '📧', label: 'Email', value: 'hello@jaydev.com', href: 'mailto:hello@jaydev.com' },
            { icon: '💼', label: 'LinkedIn', value: 'jaydev', href: '#' },
            { icon: '🌐', label: 'Website', value: 'jaydev.com', href: '#' },
          ].map((contact, idx) => (
            <a
              key={contact.label}
              href={contact.href}
              className="glass-effect-dark p-6 rounded-xl text-center hover:border-blue-500 transform hover:scale-105 transition-all animate-fade-in-up"
              style={{
                animationDelay: `${idx * 0.1}s`,
                animationFillMode: 'forwards',
                opacity: 0,
              }}
            >
              <div className="text-4xl mb-3">{contact.icon}</div>
              <p className="text-sm text-slate-400 mb-2">{contact.label}</p>
              <p className="font-semibold text-blue-400">{contact.value}</p>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="glass-effect-dark p-8 rounded-xl animate-fade-in-up">
          {submitted && (
            <div className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500 text-green-400 animate-fade-in-down">
              ✓ Thank you! I'll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-slate-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 focus:border-blue-500 focus:outline-none transition-colors text-white placeholder-slate-500"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-slate-300">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 focus:border-blue-500 focus:outline-none transition-colors text-white placeholder-slate-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-slate-300">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 focus:border-blue-500 focus:outline-none transition-colors text-white"
              >
                <option value="">Select a subject...</option>
                <option value="Web Development">Web Development Project</option>
                <option value="Automation">Automation Setup</option>
                <option value="Digital Marketing">Digital Marketing Campaign</option>
                <option value="Consultation">Consultation</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2 text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 focus:border-blue-500 focus:outline-none transition-colors text-white placeholder-slate-500 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t border-slate-700 space-y-4">
            <p className="text-slate-400 text-sm">
              <span className="text-blue-400 font-semibold">Response Time:</span> I typically respond within 24-48 hours
            </p>
            <p className="text-slate-400 text-sm">
              <span className="text-blue-400 font-semibold">Availability:</span> Open to freelance projects, full-time roles, and consultations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
