import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@gsn.network',
      href: 'mailto:hello@gsn.network',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Headquarters',
      value: 'New York, USA',
      href: '#',
    },
  ];

  const offices = [
    { city: 'New York', country: 'USA' },
    { city: 'London', country: 'UK' },
    { city: 'Singapore', country: 'Singapore' },
    { city: 'Dubai', country: 'UAE' },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px]" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Get in
            </span>{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#E8C547] bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Ready to transform your business networking? Let's start the conversation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-[30px] border border-[#D4AF37]/20"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-white/80 mb-2">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#D4AF37]/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#D4AF37]/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/80 mb-2">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#D4AF37]/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#D4AF37]/40 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-white/80 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#D4AF37]/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#D4AF37]/40 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-white/80 mb-2">Business</label>
                <input
                  type="text"
                  placeholder="Your Company"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#D4AF37]/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#D4AF37]/40 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-white/80 mb-2">Industry</label>
                <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#D4AF37]/20 text-white focus:outline-none focus:border-[#D4AF37]/40 transition-colors">
                  <option value="">Select Industry</option>
                  <option value="technology">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-white/80 mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your business goals..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#D4AF37]/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#D4AF37]/40 transition-colors resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E8C547] text-[#050B1A] font-semibold hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-shadow flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-[30px] border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all cursor-pointer group"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 group-hover:from-[#D4AF37] group-hover:to-[#E8C547] transition-all">
                    <info.icon className="w-6 h-6 text-[#D4AF37] group-hover:text-[#050B1A] transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60 mb-1">{info.label}</div>
                    <div className="text-white font-semibold">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Regional Offices */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 rounded-3xl bg-white/5 backdrop-blur-[30px] border border-[#D4AF37]/20"
            >
              <h3 className="text-xl font-bold text-white mb-6">Regional Offices</h3>
              <div className="grid grid-cols-2 gap-4">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-white/5 border border-[#D4AF37]/20"
                  >
                    <div className="text-white font-semibold mb-1">{office.city}</div>
                    <div className="text-sm text-white/60">{office.country}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-64 rounded-3xl bg-white/5 backdrop-blur-[30px] border border-[#D4AF37]/20 overflow-hidden relative"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[#D4AF37] mx-auto mb-3" />
                  <div className="text-white/60">Global Presence</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
