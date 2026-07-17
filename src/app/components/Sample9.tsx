import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export function Sample9() {
  const products = [
    {
      id: 1,
      name: 'PRODUCT NAME',
      badge: 'SALE',
      badgeColor: 'bg-blue-500',
      image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=500&h=500&fit=crop',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
      rating: 4,
      buttonColor: 'from-blue-500 to-cyan-500',
      gradient: 'from-gray-800 via-gray-900 to-black',
      accentColor: 'blue',
    },
    {
      id: 2,
      name: 'PRODUCT NAME',
      badge: 'SALE',
      badgeColor: 'bg-purple-500',
      image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&h=500&fit=crop',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
      rating: 5,
      buttonColor: 'from-purple-500 to-pink-500',
      gradient: 'from-purple-900 via-gray-900 to-black',
      accentColor: 'purple',
    },
    {
      id: 3,
      name: 'PRODUCT NAME',
      badge: 'SALE',
      badgeColor: 'bg-orange-500',
      image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500&h=500&fit=crop',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
      rating: 4,
      buttonColor: 'from-orange-500 to-red-500',
      gradient: 'from-orange-900 via-gray-900 to-black',
      accentColor: 'orange',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
      {/* Section 1 - Isometric Card Layout */}
      <section className="py-20 px-8 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 relative">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-7xl font-bold text-gray-900 mb-20"
          >
            Building a
            <br />
            Card-Based UI
          </motion.h1>

          {/* Isometric Card Grid */}
          <div className="relative" style={{ height: '500px', perspective: '1200px' }}>
            {/* Top Left - Blue Card with Shapes */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute"
              style={{
                left: '10%',
                top: '30%',
                width: '220px',
                height: '280px',
                transform: 'rotateX(25deg) rotateY(-25deg) rotateZ(5deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl shadow-2xl p-6 relative">
                <div className="absolute top-8 left-8 w-16 h-16 bg-purple-500 rounded-2xl opacity-80" />
                <div className="absolute bottom-12 right-8 w-12 h-12 bg-yellow-400 rounded-full" />
                <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-blue-400 rounded-full opacity-60" style={{ transform: 'translate(-50%, -50%)' }} />
              </div>
            </motion.div>

            {/* Top Middle - White Card with Blue Shape */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute"
              style={{
                left: '35%',
                top: '15%',
                width: '200px',
                height: '260px',
                transform: 'rotateX(20deg) rotateY(-10deg) rotateZ(-3deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="w-full h-full bg-white rounded-3xl shadow-2xl p-6 relative">
                <div className="absolute top-6 left-6 w-20 h-1 bg-gray-300" />
                <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-500 rounded-full" style={{ transform: 'translate(-50%, -50%)' }} />
              </div>
            </motion.div>

            {/* Top Right - Coral/Red Card with Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute"
              style={{
                left: '55%',
                top: '10%',
                width: '210px',
                height: '270px',
                transform: 'rotateX(25deg) rotateY(15deg) rotateZ(-8deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-red-400 to-orange-500 rounded-3xl shadow-2xl p-6 relative flex items-center justify-center">
                <div className="w-28 h-28 bg-white/90 rounded-3xl flex items-center justify-center">
                  <svg className="w-16 h-16 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Bottom Right - White Card with Dot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute"
              style={{
                left: '70%',
                top: '45%',
                width: '200px',
                height: '250px',
                transform: 'rotateX(20deg) rotateY(20deg) rotateZ(2deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="w-full h-full bg-white rounded-3xl shadow-2xl p-6 relative">
                <div className="absolute top-8 left-8 w-4 h-4 bg-gray-900 rounded-full" />
                <div className="absolute top-16 left-8 w-16 h-1 bg-gray-300" />
              </div>
            </motion.div>

            {/* Center Bottom - Dark Card with Charts */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute"
              style={{
                left: '40%',
                top: '50%',
                width: '230px',
                height: '290px',
                transform: 'rotateX(22deg) rotateY(0deg) rotateZ(-2deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-6 relative">
                <div className="absolute top-8 right-8 w-20 h-20 bg-purple-500 rounded-full opacity-80" />
                <div className="absolute bottom-12 left-8 w-24 h-24 bg-cyan-400 rounded-full opacity-70" />
              </div>
            </motion.div>

            {/* Bottom Left - White Card with Red Dot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute"
              style={{
                left: '15%',
                top: '65%',
                width: '190px',
                height: '240px',
                transform: 'rotateX(18deg) rotateY(-15deg) rotateZ(4deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="w-full h-full bg-white rounded-3xl shadow-2xl p-6 relative">
                <div className="absolute top-8 left-8 w-6 h-6 bg-red-400 rounded-full" />
                <div className="absolute top-20 left-8 w-20 h-1 bg-gray-300" />
                <div className="absolute bottom-8 left-8 w-24 h-1 bg-gray-300" />
              </div>
            </motion.div>
          </div>

          {/* Watermark */}
          <div className="absolute bottom-8 right-8">
            <div className="w-12 h-12 bg-white/50 rounded-xl flex items-center justify-center text-gray-400 font-bold">
              ai
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Product Cards */}
      <section className="py-20 px-8 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ y: 50, opacity: 0, rotateY: -10 }}
                animate={{ y: 0, opacity: 1, rotateY: 0 }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{
                  y: -20,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group cursor-pointer"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
              >
                <div className={`bg-gradient-to-br ${product.gradient} rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-300`}>
                  {/* Product Image with Badge */}
                  <div className="relative p-8 pt-12">
                    {/* Badge */}
                    <div className="absolute top-6 right-6 z-10">
                      <div className={`${product.badgeColor} text-white px-4 py-2 rounded-lg text-xs font-bold shadow-lg`}>
                        {product.badge}
                      </div>
                    </div>

                    {/* Wave Decoration */}
                    <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden opacity-30">
                      <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                        <path
                          d="M0,50 Q100,20 200,50 T400,50 L400,0 L0,0 Z"
                          fill={product.accentColor === 'blue' ? '#3b82f6' : product.accentColor === 'purple' ? '#a855f7' : '#f97316'}
                          opacity="0.3"
                        />
                      </svg>
                    </div>

                    {/* Product Image */}
                    <div className="relative z-10 flex items-center justify-center mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotateZ: 5 }}
                        transition={{ duration: 0.3 }}
                        className="w-64 h-64 flex items-center justify-center"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain drop-shadow-2xl"
                          style={{
                            filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))',
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="px-8 pb-8">
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">
                      {product.name}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < product.rating
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Buy Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-4 rounded-2xl bg-gradient-to-r ${product.buttonColor} text-white font-bold text-lg shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group`}
                    >
                      <span className="relative z-10">BUY NOW</span>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                    </motion.button>
                  </div>

                  {/* Decorative Wave at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                      <path
                        d="M0,50 Q100,80 200,50 T400,50 L400,100 L0,100 Z"
                        fill={product.accentColor === 'blue' ? '#3b82f6' : product.accentColor === 'purple' ? '#a855f7' : '#f97316'}
                        opacity="0.5"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        /* Smooth 3D transforms */
        * {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
}
