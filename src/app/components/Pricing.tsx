import { motion } from 'motion/react';
import { Check, Star } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for growing entrepreneurs',
      features: [
        'Access to local chapter',
        'Monthly networking events',
        'Basic AI matchmaking',
        'Member directory access',
        'Quarterly business reviews',
        'Email support',
      ],
      highlighted: false,
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'For established business leaders',
      features: [
        'Everything in Starter',
        'Access to all global chapters',
        'Weekly networking events',
        'Advanced AI business assistant',
        'Priority referral placement',
        'Monthly 1-on-1 coaching',
        'Exclusive webinars',
        'Priority support',
      ],
      highlighted: true,
      popular: true,
    },
    {
      name: 'Elite',
      price: '$1,299',
      period: '/month',
      description: 'Ultimate networking power',
      features: [
        'Everything in Professional',
        'VIP event access',
        'Personal success manager',
        'Custom AI insights & analytics',
        'Global expansion consulting',
        'Speaking opportunities',
        'Board member introductions',
        'White-glove concierge',
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px]" />
      
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
              Plans
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Choose the plan that fits your business goals and unlock unlimited networking potential
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: plan.highlighted ? 1.05 : 1.02 }}
              className={`relative p-8 rounded-3xl backdrop-blur-[30px] border transition-all cursor-pointer ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-white/10 to-white/5 border-[#D4AF37] shadow-[0_0_60px_rgba(212,175,55,0.3)] scale-105'
                  : 'bg-white/5 border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)]'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E8C547] text-[#050B1A] text-xs font-semibold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-white/60">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-start justify-center mb-2">
                  <span className="text-5xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#E8C547] bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-white/60 text-sm mt-2">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-[#D4AF37]" />
                    </div>
                    <span className="text-white/80 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-full font-semibold transition-all ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#E8C547] text-[#050B1A] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]'
                    : 'bg-white/5 border border-[#D4AF37]/30 text-white hover:bg-white/10'
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-white/60 text-sm">
            All plans include a 30-day money-back guarantee. Need a custom solution?{' '}
            <button className="text-[#D4AF37] hover:underline">Contact us</button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
