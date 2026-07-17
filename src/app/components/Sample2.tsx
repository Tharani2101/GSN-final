import { motion } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export function Sample2() {
  const partners = [
    { name: 'Coindesk', logo: 'https://img.logo.dev/coindesk.com?token=pk_X-NzHVKBSSqqBdLmHC9uEw' },
    { name: 'TRON', logo: 'https://img.logo.dev/tron.network?token=pk_X-NzHVKBSSqqBdLmHC9uEw' },
    { name: 'BNB', logo: 'https://img.logo.dev/binance.com?token=pk_X-NzHVKBSSqqBdLmHC9uEw' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-12">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white rounded-sm" />
                </div>
                <span className="text-2xl font-bold text-gray-900">ONDS</span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center gap-8">
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  NFT Marketplace
                </a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Auctions
                </a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Artists
                </a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Community
                </a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Wallet
                </a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Docs
                </a>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button className="hidden lg:block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                My Auctions
              </button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors"
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-7xl lg:text-8xl font-bold text-gray-900 leading-none mb-6">
                  BACK TO
                  <br />
                  <span className="relative inline-block">
                    TOP
                    <div className="absolute -right-4 top-0 w-3 h-3 bg-orange-500 rounded-full" />
                  </span>
                </h1>
                <p className="text-gray-600 leading-relaxed max-w-md">
                  Create, sell and collect truly rare digital artworks. Powered by blockchain technology.
                  <br />
                  <br />
                  Trading on OpenSky is simple and secure. All transactions are verified through the blockchain.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors flex items-center gap-2"
                >
                  Explore more
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-colors"
                >
                  Create NFT
                </motion.button>
              </div>
            </motion.div>

            {/* Right Content - 3D Figure */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Main 3D Figure Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-80 h-96">
                    {/* Simulated 3D figure with gradients */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 rounded-[40px] shadow-2xl">
                      {/* Head */}
                      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full shadow-lg" />

                      {/* Body */}
                      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-32 h-40 bg-gradient-to-br from-gray-200 to-gray-400 rounded-3xl shadow-lg" />

                      {/* Arms */}
                      <div className="absolute top-36 left-8 w-6 h-32 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full shadow-md transform -rotate-12" />
                      <div className="absolute top-36 right-8 w-6 h-32 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full shadow-md transform rotate-12" />

                      {/* Legs */}
                      <div className="absolute bottom-8 left-20 w-8 h-24 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full shadow-md" />
                      <div className="absolute bottom-8 right-20 w-8 h-24 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full shadow-md" />
                    </div>
                  </div>
                </div>

                {/* NFT Card - Top Right */}
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute -top-4 -right-4 lg:right-0 bg-white rounded-2xl shadow-2xl p-4 w-48"
                >
                  <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mb-3 flex items-center justify-center overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1635031541697-b5c8bb5d6d8c?w=400&h=400&fit=crop"
                      alt="NFT"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">Crypto Punk #7890</h3>
                  <p className="text-xs text-gray-500 mb-2">Current bid</p>
                  <p className="text-sm font-bold text-gray-900">2.5 ETH</p>
                </motion.div>

                {/* Floating Dots */}
                <div className="absolute top-10 right-20 w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                <div className="absolute bottom-20 left-10 w-2 h-2 bg-orange-500 rounded-full animate-pulse delay-75" />
                <div className="absolute top-1/2 right-4 w-2 h-2 bg-orange-500 rounded-full animate-pulse delay-150" />
              </div>

              {/* Navigation Arrows */}
              <div className="absolute bottom-0 right-0 flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="border-t border-gray-100 py-12">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">Our Partners</p>
            <div className="flex items-center gap-12">
              {partners.map((partner, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-center"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    onError={(e) => {
                      // Fallback to text if logo fails to load
                      e.currentTarget.style.display = 'none';
                      const textFallback = e.currentTarget.nextElementSibling;
                      if (textFallback) {
                        (textFallback as HTMLElement).style.display = 'block';
                      }
                    }}
                  />
                  <span className="hidden text-lg font-bold text-gray-400 hover:text-gray-900 transition-colors">
                    {partner.name}
                  </span>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex items-center"
              >
                <span className="text-lg font-bold text-gray-400 hover:text-gray-900 transition-colors">
                  OKX
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .delay-75 {
          animation-delay: 75ms;
        }
        .delay-150 {
          animation-delay: 150ms;
        }
      `}</style>
    </div>
  );
}
