import { motion } from 'motion/react';
import {
  Menu,
  LayoutGrid,
  MessageSquare,
  Calendar,
  FolderOpen,
  User,
  Heart,
  Eye,
  Play
} from 'lucide-react';

export function Sample3() {
  const menuItems = [
    { icon: Menu, label: 'MENU' },
    { icon: LayoutGrid, label: 'Dashboard' },
    { icon: MessageSquare, label: 'Messages' },
    { icon: Calendar, label: 'Calendar' },
    { icon: FolderOpen, label: 'Files' },
    { icon: User, label: 'Profile' },
  ];

  const artworks = [
    {
      id: 1,
      title: 'Abstract Pink',
      image: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=400&h=300&fit=crop',
      likes: 200,
      views: 1200,
      color: 'from-pink-400 to-purple-400'
    },
    {
      id: 2,
      title: 'Wave',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
      likes: 150,
      views: 900,
      color: 'from-blue-400 to-cyan-400'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#7B5FBF] via-[#6B4DB5] to-[#5A3DA8] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl" />
      </div>

      <div className="relative flex min-h-screen">
        {/* Left Sidebar */}
        <motion.aside
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="w-24 flex flex-col items-center py-6 gap-8"
        >
          {/* Logo */}
          <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">DS.</span>
          </div>

          {/* Profile */}
          <div className="relative">
            <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden p-1">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-[#7B5FBF]" />
          </div>

          {/* Menu Items */}
          <nav className="flex-1 flex flex-col items-center gap-6 mt-4">
            {menuItems.map((item, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${
                  idx === 0
                    ? 'bg-white/20 backdrop-blur-md border border-white/30 shadow-lg'
                    : 'bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20'
                }`}
                title={item.label}
              >
                <item.icon className="w-6 h-6 text-white" />
              </motion.button>
            ))}
          </nav>
        </motion.aside>

        {/* Main Content */}
        <main className="flex-1 p-12">
          <div className="max-w-6xl">
            {/* Header */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="mb-12"
            >
              <h1 className="text-6xl font-bold text-white mb-2">
                History of
              </h1>
              <h1 className="text-6xl font-bold text-white">
                Glassmorphism
              </h1>
            </motion.div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Featured Card */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-2 relative"
              >
                <div className="relative rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8 overflow-hidden">
                  {/* Decorative circles */}
                  <div className="absolute top-6 right-6 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-white/30" />
                    <div className="w-3 h-3 rounded-full bg-white/30" />
                    <div className="w-3 h-3 rounded-full bg-white/30" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col lg:flex-row gap-6 items-center">
                    {/* Image */}
                    <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=500&h=500&fit=crop"
                        alt="Sleep better"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent" />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                      <div className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-6">
                        <span className="text-white font-medium">Sleep better</span>
                      </div>

                      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-6">
                        <p className="text-white/90 leading-relaxed">
                          Listen the calming music
                          <br />
                          help you relax
                        </p>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                      >
                        Get Started
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Artwork Cards */}
              <div className="space-y-6">
                {artworks.map((artwork, idx) => (
                  <motion.div
                    key={artwork.id}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="relative group cursor-pointer"
                  >
                    <div className="relative rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={artwork.image}
                          alt={artwork.title}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${artwork.color} mix-blend-overlay opacity-60`} />

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center">
                            <Play className="w-6 h-6 text-white fill-white" />
                          </div>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-4">
                        <h3 className="text-white font-semibold mb-3">{artwork.title}</h3>
                        <div className="flex items-center justify-between text-white/70 text-sm">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Heart className="w-4 h-4" />
                              <span>{artwork.likes}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              <span>{artwork.views}</span>
                            </div>
                          </div>
                          <span className="text-xs">0:30</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      <style>{`
        /* Custom glassmorphism styles */
        @supports (backdrop-filter: blur(20px)) {
          .backdrop-blur-xl {
            backdrop-filter: blur(20px);
          }
          .backdrop-blur-md {
            backdrop-filter: blur(12px);
          }
        }
      `}</style>
    </div>
  );
}
