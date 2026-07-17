import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Handshake, 
  Eye, 
  Globe, 
  Award, 
  Brain, 
  Users, 
  Heart 
} from 'lucide-react';

export function MembershipBenefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Referral Generation',
      description: 'Access to high-quality business referrals from trusted network members',
    },
    {
      icon: Handshake,
      title: 'Strategic Partnerships',
      description: 'Form valuable partnerships that drive mutual growth and success',
    },
    {
      icon: Eye,
      title: 'Business Visibility',
      description: 'Increase your brand presence across our global network',
    },
    {
      icon: Globe,
      title: 'Global Expansion',
      description: 'Tap into international markets with local chapter support',
    },
    {
      icon: Award,
      title: 'Leadership Development',
      description: 'Exclusive training programs and mentorship opportunities',
    },
    {
      icon: Brain,
      title: 'AI Business Insights',
      description: 'Data-driven recommendations to optimize your networking strategy',
    },
    {
      icon: Users,
      title: 'Exclusive Networking',
      description: 'Connect with vetted entrepreneurs, CEOs, and industry leaders',
    },
    {
      icon: Heart,
      title: 'Community Support',
      description: 'A supportive ecosystem committed to your success',
    },
  ];

  return (
    <section id="membership" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px]" />
      
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
              Membership
            </span>{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#E8C547] bg-clip-text text-transparent">
              Benefits
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Unlock unlimited opportunities and accelerate your business growth
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group relative p-6 rounded-3xl bg-white/5 backdrop-blur-[30px] border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] cursor-pointer"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                {/* Icon */}
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 mb-4 group-hover:from-[#D4AF37] group-hover:to-[#E8C547] transition-all">
                  <benefit.icon className="w-6 h-6 text-[#D4AF37] group-hover:text-[#050B1A] transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/60 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E8C547] text-[#050B1A] font-semibold text-lg hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-shadow"
          >
            Become a Member
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
