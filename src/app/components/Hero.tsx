import { motion } from 'motion/react';
import { Globe, Users, TrendingUp, Sparkles } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const stats = [
    { value: '25,000+', label: 'Members' },
    { value: '850+', label: 'Chapters' },
    { value: '35+', label: 'Countries' },
    { value: '1M+', label: 'Referrals Generated' },
  ];

  const floatingIcons = [
    { Icon: Globe, delay: 0, x: 100, y: -50 },
    { Icon: Users, delay: 0.2, x: -120, y: 80 },
    { Icon: TrendingUp, delay: 0.4, x: 150, y: 100 },
    { Icon: Sparkles, delay: 0.6, x: -80, y: -80 },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] animate-pulse delay-1000" />
        
        {/* Floating Icons */}
        {floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              x: [0, x, 0],
              y: [0, y, 0],
            }}
            transition={{
              duration: 8,
              delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute"
            style={{
              left: `${20 + index * 20}%`,
              top: `${30 + index * 10}%`,
            }}
          >
            <Icon className="w-16 h-16 text-[#D4AF37]/20" />
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-[#D4AF37]/30 mb-8"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-sm text-white/90">Next-Generation Business Networking</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Where Connections
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#E8C547] to-[#D4AF37] bg-clip-text text-transparent">
              Create Global Success
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            GSN is a next-generation networking ecosystem combining relationships, AI, and technology
            to help entrepreneurs grow, collaborate, and scale globally.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('membership')}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E8C547] text-[#050B1A] font-semibold text-lg hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-shadow"
            >
              Join GSN
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('chapters')}
              className="px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-[#D4AF37]/30 text-white font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Explore Chapters
            </motion.button>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-3xl bg-white/5 backdrop-blur-[30px] border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#E8C547] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050B1A] to-transparent pointer-events-none" />
    </section>
  );
}
