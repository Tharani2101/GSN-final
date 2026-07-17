import { motion } from 'motion/react';
import { BookOpen, Lightbulb, Brain, TrendingUp, Award, ArrowRight } from 'lucide-react';

export function Resources() {
  const categories = [
    {
      icon: BookOpen,
      title: 'Business Guides',
      count: '120+ Articles',
      description: 'Comprehensive guides on business development and growth strategies',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Lightbulb,
      title: 'Networking Strategies',
      count: '85+ Resources',
      description: 'Best practices for effective business networking and relationship building',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Brain,
      title: 'AI Resources',
      count: '60+ Tools',
      description: 'Leverage AI and technology to accelerate your business growth',
      color: 'from-[#D4AF37] to-[#E8C547]',
    },
    {
      icon: Award,
      title: 'Leadership Content',
      count: '95+ Materials',
      description: 'Develop your leadership skills with expert insights and frameworks',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: TrendingUp,
      title: 'Growth Frameworks',
      count: '70+ Templates',
      description: 'Proven frameworks and templates for scaling your business',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const featuredResources = [
    {
      title: 'The Ultimate Guide to Business Networking',
      type: 'eBook',
      readTime: '45 min',
    },
    {
      title: 'AI-Powered Networking Strategies for 2026',
      type: 'Whitepaper',
      readTime: '30 min',
    },
    {
      title: 'Building Strategic Partnerships That Last',
      type: 'Video Course',
      readTime: '2 hours',
    },
  ];

  return (
    <section id="resources" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px]" />
      
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
              Resources
            </span>{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#E8C547] bg-clip-text text-transparent">
              Hub
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Access our comprehensive library of business resources, tools, and insights
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-[30px] border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] cursor-pointer"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${category.color} mb-4`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title & Count */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                <div className="text-[#D4AF37] text-sm font-semibold mb-3">
                  {category.count}
                </div>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {category.description}
                </p>

                {/* Link */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-[#D4AF37] text-sm font-semibold"
                >
                  Explore
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Resources */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Featured Resources
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-[30px] border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all cursor-pointer group"
              >
                <div className="text-xs text-[#D4AF37] font-semibold mb-3">{resource.type}</div>
                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {resource.title}
                </h4>
                <div className="flex items-center justify-between text-sm text-white/60">
                  <span>{resource.readTime}</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-[#D4AF37]/30 text-white font-semibold hover:bg-white/10 transition-all"
            >
              View All Resources
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
