import { motion } from 'motion/react';
import { MapPin, Users, Calendar, TrendingUp } from 'lucide-react';

export function Chapters() {
  const regions = [
    { name: 'North America', chapters: 285, members: '8,500+', growth: '+18%' },
    { name: 'Europe', chapters: 240, members: '7,200+', growth: '+22%' },
    { name: 'Asia Pacific', chapters: 185, members: '5,800+', growth: '+35%' },
    { name: 'Latin America', chapters: 85, members: '2,100+', growth: '+28%' },
    { name: 'Middle East & Africa', chapters: 55, members: '1,400+', growth: '+42%' },
  ];

  const featuredChapters = [
    { city: 'New York', country: 'USA', members: 450, events: 24 },
    { city: 'London', country: 'UK', members: 380, events: 18 },
    { city: 'Singapore', country: 'Singapore', members: 320, events: 20 },
    { city: 'Dubai', country: 'UAE', members: 280, events: 16 },
    { city: 'Toronto', country: 'Canada', members: 260, events: 15 },
    { city: 'Sydney', country: 'Australia', members: 240, events: 14 },
  ];

  return (
    <section id="chapters" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px]" />
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Global
            </span>{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#E8C547] bg-clip-text text-transparent">
              Chapters
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Connect locally, grow globally with our worldwide network of business chapters
          </p>
        </motion.div>

        {/* World Map Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 p-12 rounded-3xl bg-white/5 backdrop-blur-[30px] border border-[#D4AF37]/20 relative overflow-hidden"
        >
          {/* Simplified World Map with Dots */}
          <div className="relative h-[400px] flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#E8C547] bg-clip-text text-transparent mb-4">
                850+
              </div>
              <div className="text-xl text-white/80 mb-2">Active Chapters Worldwide</div>
              <div className="text-sm text-white/60">Across 35+ Countries</div>
            </div>

            {/* Decorative Elements */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute w-3 h-3 rounded-full bg-[#D4AF37]"
                style={{
                  left: `${10 + (i * 7)}%`,
                  top: `${20 + (i % 3) * 20}%`,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Regional Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-[30px] border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all cursor-pointer"
            >
              <div className="text-lg font-bold text-white mb-1">{region.name}</div>
              <div className="text-2xl font-bold text-[#D4AF37] mb-2">{region.chapters}</div>
              <div className="text-sm text-white/60 mb-2">{region.members} Members</div>
              <div className="flex items-center gap-1 text-xs text-green-400">
                <TrendingUp className="w-3 h-3" />
                {region.growth} YoY
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Chapters */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8"
          >
            Featured Chapters
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredChapters.map((chapter, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group p-6 rounded-2xl bg-white/5 backdrop-blur-[30px] border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-xl font-bold text-white mb-1">{chapter.city}</div>
                    <div className="text-sm text-white/60">{chapter.country}</div>
                  </div>
                  <div className="p-2 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 group-hover:from-[#D4AF37] group-hover:to-[#E8C547] transition-all">
                    <MapPin className="w-5 h-5 text-[#D4AF37] group-hover:text-[#050B1A] transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-white/70">
                      <Users className="w-4 h-4" />
                      Members
                    </div>
                    <div className="text-[#D4AF37] font-semibold">{chapter.members}</div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-white/70">
                      <Calendar className="w-4 h-4" />
                      Events/Year
                    </div>
                    <div className="text-[#D4AF37] font-semibold">{chapter.events}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
