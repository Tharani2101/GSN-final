import { motion } from 'motion/react';
import { Brain, Sparkles, Target, TrendingUp, Users, Zap } from 'lucide-react';

export function AINetwork() {
  const features = [
    {
      icon: Brain,
      title: 'AI Matchmaking',
      description: 'Intelligent algorithm connects you with the right people at the right time',
    },
    {
      icon: Sparkles,
      title: 'Smart Referral Engine',
      description: 'Automated referral suggestions based on member needs and expertise',
    },
    {
      icon: Target,
      title: 'Business Opportunity Discovery',
      description: 'Real-time alerts for opportunities matching your business profile',
    },
    {
      icon: TrendingUp,
      title: 'Personalized Recommendations',
      description: 'Customized networking strategies powered by machine learning',
    },
    {
      icon: Users,
      title: 'Automated Follow-Ups',
      description: 'Never miss a connection with AI-powered relationship management',
    },
    {
      icon: Zap,
      title: 'Growth Analytics',
      description: 'Track your network ROI with comprehensive data insights',
    },
  ];

  return (
    <section id="ai-network" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[150px] animate-pulse delay-1000" />
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-[#D4AF37]/30 mb-6">
            <Brain className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-sm text-white/90">Powered by Artificial Intelligence</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              AI-Powered
            </span>{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#E8C547] bg-clip-text text-transparent">
              Networking
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Harness the power of artificial intelligence to maximize your networking effectiveness and business growth
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Dashboard Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-[30px] border border-[#D4AF37]/30">
              {/* Mock Dashboard */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-[#D4AF37]/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#E8C547]" />
                    <div>
                      <div className="text-sm font-semibold text-white">Sarah Chen</div>
                      <div className="text-xs text-white/60">95% Match</div>
                    </div>
                  </div>
                  <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                </div>

                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-[#D4AF37]/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
                    <div>
                      <div className="text-sm font-semibold text-white">Marcus Johnson</div>
                      <div className="text-xs text-white/60">89% Match</div>
                    </div>
                  </div>
                  <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                </div>

                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-[#D4AF37]/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500" />
                    <div>
                      <div className="text-sm font-semibold text-white">Elena Rodriguez</div>
                      <div className="text-xs text-white/60">87% Match</div>
                    </div>
                  </div>
                  <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                <div className="p-3 rounded-xl bg-white/5 border border-[#D4AF37]/20 text-center">
                  <div className="text-xl font-bold text-[#D4AF37]">248</div>
                  <div className="text-xs text-white/60">Matches</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-[#D4AF37]/20 text-center">
                  <div className="text-xl font-bold text-[#D4AF37]">156</div>
                  <div className="text-xs text-white/60">Referrals</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-[#D4AF37]/20 text-center">
                  <div className="text-xl font-bold text-[#D4AF37]">98%</div>
                  <div className="text-xs text-white/60">Accuracy</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 p-4 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#E8C547] shadow-[0_0_30px_rgba(212,175,55,0.4)]"
            >
              <Brain className="w-8 h-8 text-[#050B1A]" />
            </motion.div>
          </motion.div>

          {/* Right: Features List */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-[30px] border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all cursor-pointer group"
              >
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex-shrink-0 group-hover:from-[#D4AF37] group-hover:to-[#E8C547] transition-all">
                  <feature.icon className="w-5 h-5 text-[#D4AF37] group-hover:text-[#050B1A] transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1 group-hover:text-[#D4AF37] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
