import { motion } from 'motion/react';
import { Globe, Twitter, Linkedin, Facebook, Instagram, Youtube, Mail, ArrowRight } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const footerLinks = {
    company: [
      { name: 'About GSN', id: 'about' },
      { name: 'Our Mission', id: 'about' },
      { name: 'Success Stories', id: 'success-stories' },
      { name: 'Careers', id: 'contact' },
    ],
    membership: [
      { name: 'Join GSN', id: 'membership' },
      { name: 'Pricing Plans', id: 'membership' },
      { name: 'Benefits', id: 'membership' },
      { name: 'Member Portal', id: 'membership' },
    ],
    chapters: [
      { name: 'Find a Chapter', id: 'chapters' },
      { name: 'Start a Chapter', id: 'chapters' },
      { name: 'Chapter Events', id: 'events' },
      { name: 'Regional Offices', id: 'contact' },
    ],
    resources: [
      { name: 'Business Guides', id: 'resources' },
      { name: 'Networking Tips', id: 'resources' },
      { name: 'AI Tools', id: 'ai-network' },
      { name: 'Blog', id: 'resources' },
    ],
    events: [
      { name: 'Upcoming Events', id: 'events' },
      { name: 'Past Events', id: 'events' },
      { name: 'Event Calendar', id: 'events' },
      { name: 'Host an Event', id: 'contact' },
    ],
    legal: [
      { name: 'Privacy Policy', id: 'contact' },
      { name: 'Terms of Service', id: 'contact' },
      { name: 'Cookie Policy', id: 'contact' },
      { name: 'GDPR', id: 'contact' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="relative pt-24 pb-8 overflow-hidden border-t border-[#D4AF37]/20">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px]" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-[30px] border border-[#D4AF37]/30"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-3">
                Stay Connected
              </h3>
              <p className="text-white/60">
                Subscribe to our newsletter for the latest networking insights, events, and opportunities
              </p>
            </div>
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-4 rounded-full bg-white/5 border border-[#D4AF37]/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#D4AF37]/40 transition-colors"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E8C547] text-[#050B1A] font-semibold hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-shadow flex items-center gap-2"
              >
                Subscribe
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#B8941F] flex items-center justify-center">
                <Globe className="w-6 h-6 text-[#050B1A]" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#E8C547] bg-clip-text text-transparent">
                GSN
              </span>
            </motion.div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              The world's leading business networking ecosystem, powered by AI and built for global success.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 flex items-center justify-center transition-all group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white/60 group-hover:text-[#D4AF37] transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/60 hover:text-[#D4AF37] text-sm transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Membership */}
          <div>
            <h4 className="font-bold text-white mb-4">Membership</h4>
            <ul className="space-y-3">
              {footerLinks.membership.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/60 hover:text-[#D4AF37] text-sm transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Chapters */}
          <div>
            <h4 className="font-bold text-white mb-4">Chapters</h4>
            <ul className="space-y-3">
              {footerLinks.chapters.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/60 hover:text-[#D4AF37] text-sm transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/60 hover:text-[#D4AF37] text-sm transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Events & Legal */}
          <div>
            <h4 className="font-bold text-white mb-4">Events</h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.events.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/60 hover:text-[#D4AF37] text-sm transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#D4AF37]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2026 Global Success Network. All rights reserved.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.id)}
                  className="text-white/40 hover:text-[#D4AF37] text-sm transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
