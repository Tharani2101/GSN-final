import { motion } from 'motion/react';
import {
  Heart,
  Star,
  MapPin,
  Clock,
  Users,
  ArrowRight,
  Plane,
  Calendar,
  Music,
  Camera,
  Sun,
  CloudRain,
  Hotel,
  QrCode,
  Crown,
  MoreVertical,
  Search,
  Filter,
  ChevronRight,
} from 'lucide-react';

export function Sample7() {
  // Section 1 - Destination Cards
  const destinations = [
    {
      id: 1,
      name: 'Dubai',
      country: 'UAE',
      flag: '🇦🇪',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=800&fit=crop',
      places: '100+ Places',
      color: 'from-purple-900 to-pink-900',
    },
    {
      id: 2,
      name: 'Armenia',
      country: 'ARM',
      flag: '🇦🇲',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=800&fit=crop',
      places: '50+ Places',
      color: 'from-green-800 to-green-600',
    },
    {
      id: 3,
      name: 'India',
      country: 'IND',
      flag: '🇮🇳',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=800&fit=crop',
      places: '200+ Places',
      color: 'from-blue-900 to-blue-600',
    },
    {
      id: 4,
      name: 'Japan',
      country: 'JPN',
      flag: '🇯🇵',
      image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&h=800&fit=crop',
      places: '150+ Places',
      color: 'from-red-900 to-orange-700',
    },
  ];

  // Section 4 - Mixed Cards
  const mixedCards = [
    {
      type: 'music',
      title: 'Chillout music...',
      time: '10:23',
      color: 'from-orange-500 to-orange-700',
    },
    {
      type: 'photography',
      title: 'Photography',
      subtitle: 'Stunning captures',
      user: 'Jenny Drew',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    {
      type: 'weather',
      city: 'New York',
      temp: '22°C',
      condition: 'sunny',
    },
    {
      type: 'hotel',
      title: 'Hotel Room',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop',
    },
    {
      type: 'travel',
      title: 'Cappadocia',
      subtitle: 'View Trip',
      tag: 'TRAVELING',
      image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&h=400&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Section 1 - Destination Cards Carousel */}
      <section className="py-20 px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold text-gray-900 mb-12 text-center"
          >
            Explore Destinations
          </motion.h2>

          <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide">
            {destinations.map((dest, idx) => (
              <motion.div
                key={dest.id}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="min-w-[280px] cursor-pointer group"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-xl h-[400px]">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${dest.color} opacity-70`} />

                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-3xl font-bold text-white">{dest.name}</h3>
                          <span className="text-2xl">{dest.flag}</span>
                        </div>
                        <p className="text-white/80 text-sm">{dest.places}</p>
                      </div>
                    </div>

                    <button className="flex items-center gap-2 text-white font-semibold hover:gap-4 transition-all">
                      Explore now
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 - Property Card */}
      <section className="py-20 px-8">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=400&fit=crop"
                  alt="Santorini Sunset Loft"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Heart Icon */}
                <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-all">
                  <Heart className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">Santorini Sunset Loft</h3>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-white">$600</p>
                    <p className="text-white/60 text-sm">per night</p>
                  </div>
                </div>

                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  Stunning white-washed villa with breathtaking sunset views over the Aegean Sea. Perfect for a romantic getaway with magical sunset views.
                </p>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white font-semibold">4.8</span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                    <span className="text-white text-xs font-medium">Romantic</span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                    <span className="text-white text-xs font-medium">2 Nights Trip</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-2xl bg-white text-gray-900 font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  Book now
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3 - Travel Dashboard */}
      <section className="py-20 px-8 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white rounded-3xl shadow-2xl p-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="px-4 py-2 rounded-full bg-gray-900 text-white font-bold flex items-center gap-2">
                  <Plane className="w-4 h-4" />
                  wander it
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
                    <span className="text-xs font-bold">🎯</span>
                  </div>
                  <span className="text-2xl font-bold text-gray-900">0</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Search className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Users className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Filter className="w-5 h-5 text-gray-600" />
                </button>
                <button className="px-6 py-2 rounded-full bg-teal-500 text-white font-semibold hover:bg-teal-600 transition-colors">
                  Explore
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Greeting */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Hello, Gerald</h2>
                  <p className="text-gray-600">Ready for your next adventure?</p>
                </div>

                {/* Discount Card */}
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
                    alt="Discount"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-3xl font-bold mb-2">GET 30% DISCOUNT</h3>
                      <p className="text-white/80">Book your dream vacation</p>
                    </div>
                  </div>
                </div>

                {/* QR & Ticket Info */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-900 rounded-2xl p-4 flex items-center justify-center">
                      <QrCode className="w-20 h-20 text-white" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="text-4xl font-bold text-gray-900 mb-2">DC</div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                        <ChevronRight className="w-4 h-4" />
                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      </div>
                      <div className="text-4xl font-bold text-gray-900 mt-2">LA</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-gray-500 text-xs mb-1">Date</p>
                      <p className="font-bold text-gray-900">5/26/2023</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs mb-1">Time</p>
                      <p className="font-bold text-gray-900">4:30 am</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs mb-1">Gate</p>
                      <p className="font-bold text-gray-900">Gareth Bingham</p>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <p className="text-gray-500 text-xs">Seat</p>
                    <p className="font-bold text-gray-900">A03</p>
                  </div>
                </div>
              </div>

              {/* Middle Column - Map */}
              <div className="lg:col-span-2">
                <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 h-full">
                  <div className="relative h-full min-h-[500px] bg-white rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&h=600&fit=crop"
                      alt="Map"
                      className="w-full h-full object-cover opacity-20"
                    />

                    {/* Location Cards on Map */}
                    <div className="absolute top-8 left-8 bg-white rounded-2xl shadow-lg p-4 max-w-[200px]">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">Washington, DC</h4>
                          <p className="text-xs text-gray-500">United States</p>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-8 right-8 bg-white rounded-2xl shadow-lg p-4 max-w-[200px]">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">Los Angeles, LA</h4>
                          <p className="text-xs text-gray-500">United States</p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Controls */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                      <button className="px-4 py-2 rounded-full bg-teal-500 text-white text-sm font-semibold">
                        Check In
                      </button>
                      <button className="px-4 py-2 rounded-full bg-white text-gray-900 text-sm font-semibold border border-gray-200">
                        See All
                      </button>
                      <button className="px-4 py-2 rounded-full bg-white text-gray-900 text-sm font-semibold border border-gray-200 flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        Peaceful Lot
                      </button>
                      <button className="px-4 py-2 rounded-full bg-white text-gray-900 text-sm font-semibold border border-gray-200 flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        Add User
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PRO PLAN Card */}
            <div className="mt-6">
              <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Crown className="w-8 h-8 text-yellow-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">PRO PLAN</h3>
                <p className="text-white/80 mb-4">Unlock access for a vast range of features and tools</p>
                <button className="px-6 py-3 rounded-full bg-yellow-400 text-gray-900 font-bold hover:bg-yellow-300 transition-colors">
                  ⚡ Try Pro Plan
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4 - Mixed Cards Grid */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold text-gray-900 mb-12 text-center"
          >
            Discover More
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Music Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-3xl p-6 shadow-xl cursor-pointer relative overflow-hidden h-48"
            >
              <Music className="w-16 h-16 text-white/20 absolute top-4 right-4" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">Chillout music...</h3>
                <p className="text-white/80 text-4xl font-bold">10:23</p>
              </div>
            </motion.div>

            {/* Photography Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 shadow-xl cursor-pointer h-48"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Photography</h3>
                <MoreVertical className="w-5 h-5 text-white/60" />
              </div>
              <p className="text-white/60 text-sm mb-4">Stunning captures</p>
              <div className="flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/150?img=1"
                  alt="Jenny Drew"
                  className="w-10 h-10 rounded-full border-2 border-white/20"
                />
                <div>
                  <p className="text-white font-semibold">Jenny Drew</p>
                  <p className="text-white/60 text-xs">Photographer</p>
                </div>
              </div>
            </motion.div>

            {/* Weather Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 shadow-xl cursor-pointer relative overflow-hidden h-48"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">New York</h3>
                <MoreVertical className="w-5 h-5 text-white/60" />
              </div>
              <div className="flex items-center gap-4">
                <p className="text-6xl font-bold text-white">22°C</p>
                <Sun className="w-16 h-16 text-yellow-400" />
              </div>
            </motion.div>

            {/* Hotel Room Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-3xl overflow-hidden shadow-xl cursor-pointer relative h-64"
            >
              <img
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop"
                alt="Hotel Room"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div className="flex items-center justify-between w-full">
                  <h3 className="text-2xl font-bold text-white">Hotel Room</h3>
                  <Heart className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>

            {/* Cappadocia Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="lg:col-span-2 rounded-3xl overflow-hidden shadow-xl cursor-pointer relative h-64"
            >
              <img
                src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&h=400&fit=crop"
                alt="Cappadocia"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-bold">
                  TRAVELING
                </span>
              </div>

              <div className="absolute top-4 right-4">
                <MoreVertical className="w-6 h-6 text-white" />
              </div>

              <div className="absolute bottom-6 left-6">
                <h3 className="text-4xl font-bold text-white mb-2">Cappadocia</h3>
                <button className="flex items-center gap-2 text-white font-semibold hover:gap-4 transition-all">
                  View Trip
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
