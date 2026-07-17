import { motion } from 'motion/react';
import { Users, GitBranch, Bot, Calendar, MapPin, Rocket } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Users,
      title: 'Business Networking',
      description: 'Professional connections worldwide',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: GitBranch,
      title: 'Referral Exchange',
      description: 'Verified business opportunities',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Bot,
      title: 'AI Business Assistant',
      description: 'Smart networking recommendations',
      color: 'from-[#D4AF37] to-[#E8C547]',
    },
    {
      icon: Calendar,
      title: 'Events & Meetups',
      description: 'Local and global networking events',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: MapPin,
      title: 'Chapter Ecosystem',
      description: 'Strong regional business communities',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Rocket,
      title: 'Growth Accelerator',
      description: 'Business scaling programs',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px]" />
      
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
              Powerful Features for
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#E8C547] bg-clip-text text-transparent">
              Global Growth
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Everything you need to build meaningful connections and accelerate your business success
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-[30px] border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] cursor-pointer"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
