import { motion } from 'motion/react';
import { Leaf, Droplet, Sun, Wind } from 'lucide-react';

export function Sample5() {
  const careSteps = [
    {
      id: 1,
      title: 'Light Requirements',
      description: 'Bright indirect light is best for healthy growth',
      image: 'https://images.unsplash.com/photo-1509937528035-ad76254b0356?w=400&h=300&fit=crop',
      icon: Sun,
    },
    {
      id: 2,
      title: 'Watering Guide',
      description: 'Water when top 2 inches of soil is dry',
      image: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=400&h=300&fit=crop',
      icon: Droplet,
    },
    {
      id: 3,
      title: 'Soil & Potting',
      description: 'Use well-draining potting mix with perlite',
      image: 'https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=400&h=300&fit=crop',
      icon: Leaf,
    },
    {
      id: 4,
      title: 'Air Circulation',
      description: 'Good airflow prevents pests and diseases',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop',
      icon: Wind,
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=1920&h=1080&fit=crop"
          alt="Monstera leaves"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-8">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex items-center gap-2"
          >
            <Leaf className="w-6 h-6 text-green-400" />
            <span className="text-white font-semibold text-lg">Plant Paradise</span>
          </motion.div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col justify-center px-8 pb-32">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Left - Title */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-7xl lg:text-8xl font-bold text-white leading-none mb-6">
                  BEFRIENDING
                  <br />
                  A MONSTERA
                </h1>
              </motion.div>

              {/* Right - Description */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center"
              >
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                  <p className="text-white/90 leading-relaxed text-lg">
                    The Monstera deliciosa, also known as the Swiss Cheese Plant, is a stunning
                    tropical plant that brings a touch of the jungle to your home. With its iconic
                    split leaves and easy-care nature, it's perfect for both beginners and experienced
                    plant parents.
                  </p>
                  <p className="text-white/80 leading-relaxed text-base mt-4">
                    Learn how to care for your Monstera and watch it thrive with these essential tips.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Care Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {careSteps.map((step, idx) => (
                <motion.div
                  key={step.id}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group cursor-pointer"
                >
                  <div className="relative rounded-3xl bg-white/15 backdrop-blur-2xl border border-white/30 shadow-2xl overflow-hidden">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                      {/* Icon Badge */}
                      <div className="absolute top-4 right-4 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-white/80 text-sm leading-relaxed">{step.description}</p>
                    </div>

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/40 rounded-3xl transition-colors duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative p-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center justify-between text-white/60 text-sm"
            >
              <p>© 2024 Plant Paradise. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Care Guide</a>
                <a href="#" className="hover:text-white transition-colors">Shop</a>
                <a href="#" className="hover:text-white transition-colors">Community</a>
              </div>
            </motion.div>
          </div>
        </footer>
      </div>

      <style>{`
        /* Ensure backdrop blur works */
        @supports (backdrop-filter: blur(20px)) {
          .backdrop-blur-xl {
            backdrop-filter: blur(24px);
          }
          .backdrop-blur-2xl {
            backdrop-filter: blur(40px);
          }
          .backdrop-blur-md {
            backdrop-filter: blur(12px);
          }
        }
      `}</style>
    </div>
  );
}
