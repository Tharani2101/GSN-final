import { motion } from 'motion/react';
import { Star, TrendingUp, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SuccessStories() {
  const stories = [
    {
      name: 'Sarah Chen',
      role: 'CEO',
      company: 'TechVision Inc.',
      industry: 'Technology',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwZXhlY3V0aXZlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc4MDczMTQ0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      growth: '+320%',
      metric: 'Revenue Growth',
      quote: 'GSN transformed how we approach business development. The AI-powered networking helped us connect with the right partners at the perfect time.',
    },
    {
      name: 'Marcus Johnson',
      role: 'Founder',
      company: 'Global Ventures',
      industry: 'Investment',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXIlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3ODA3MzE0NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      growth: '+250%',
      metric: 'Network Expansion',
      quote: 'The quality of connections and business opportunities through GSN is unmatched. We\'ve expanded to 5 new countries in just 18 months.',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Managing Director',
      company: 'Innovation Labs',
      industry: 'Consulting',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      growth: '+180%',
      metric: 'Client Acquisition',
      quote: 'Being part of GSN gave us instant credibility and access to decision-makers we could never have reached on our own. A game-changer for our business.',
    },
  ];

  return (
    <section id="success-stories" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px]" />
      
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
              Success
            </span>{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#E8C547] bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Real results from real members who transformed their businesses with GSN
          </p>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-[30px] border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] cursor-pointer"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                {/* Quote Icon */}
                <div className="absolute -top-2 -left-2 p-2 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#E8C547]">
                  <Quote className="w-4 h-4 text-[#050B1A]" />
                </div>

                {/* Member Photo */}
                <div className="mb-6 mt-4">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#D4AF37]/30">
                    <ImageWithFallback
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Quote */}
                <p className="text-white/80 mb-6 leading-relaxed italic">
                  "{story.quote}"
                </p>

                {/* Member Info */}
                <div className="mb-4">
                  <div className="font-bold text-white mb-1">{story.name}</div>
                  <div className="text-sm text-white/60">{story.role}, {story.company}</div>
                  <div className="text-xs text-[#D4AF37] mt-1">{story.industry}</div>
                </div>

                {/* Success Metric */}
                <div className="pt-4 border-t border-[#D4AF37]/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-[#D4AF37] flex items-center gap-1">
                        <TrendingUp className="w-5 h-5" />
                        {story.growth}
                      </div>
                      <div className="text-xs text-white/60">{story.metric}</div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
