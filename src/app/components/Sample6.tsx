import { motion } from 'motion/react';
import { Heart, MapPin, Clock, TrendingUp, Star, ArrowRight } from 'lucide-react';

export function Sample6() {
  const darkCards = [
    {
      id: 1,
      title: 'Santorini Villa',
      description: 'Luxury villa overlooking the Aegean Sea, offering stunning sunset views and exclusive infinity pool.',
      image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600&h=700&fit=crop',
      rating: 5,
      tags: ['Lake Habitat', 'High Altitude'],
    },
    {
      id: 2,
      title: 'Swiss Chalet',
      description: 'Cozy wooden chalet nestled in the Swiss Alps, perfect for ski lovers and nature enthusiasts alike.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=700&fit=crop',
      rating: 5,
      tags: ['Lake Habitat', 'High Altitude'],
    },
  ];

  const lightCards = [
    {
      id: 1,
      title: 'Ukraine de Pico da Neblina',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=400&fit=crop',
      distance: '34 km',
      duration: '1h 30 min',
      elevation: '30 m',
      rating: 4,
      difficulty: 'moderate',
    },
    {
      id: 2,
      title: 'Pico Mount Oliveira City',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      distance: '342 km',
      duration: '30 min',
      elevation: '30 m',
      rating: 5,
      difficulty: 'hard',
    },
    {
      id: 3,
      title: 'Haleakala Volcano',
      image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=600&h=400&fit=crop',
      distance: '214 km',
      duration: '30 min',
      elevation: '30 m',
      rating: 5,
      difficulty: 'easy',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Discover Amazing Destinations</h1>
          <p className="text-gray-600 text-lg">Explore luxury villas and breathtaking hiking trails</p>
        </motion.div>

        {/* Dark Theme Cards Section */}
        <div className="mb-20">
          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-gray-900 mb-8"
          >
            Featured Stays
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {darkCards.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl">
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
                      <p className="text-white/80 text-sm leading-relaxed mb-4">
                        {card.description}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(card.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex gap-2 mb-4">
                        {card.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Reserve Button */}
                  <div className="p-6">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-full bg-white text-gray-900 font-semibold shadow-lg hover:shadow-xl transition-all"
                    >
                      Reserve now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Light Theme Cards Section */}
        <div>
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-between mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900">Hiking Adventures</h2>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Alko Nordeste</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lightCards.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-gray-900 text-xs font-semibold shadow-lg flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        Trail
                      </span>
                    </div>

                    {/* Favorite Icon */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg hover:bg-white transition-all"
                    >
                      <Heart className="w-5 h-5 text-gray-700" />
                    </motion.button>

                    {/* Title and Button Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="flex items-center justify-between">
                        <h3 className="text-white font-bold text-lg">{card.title}</h3>
                        <button className="px-4 py-2 rounded-full bg-white text-gray-900 text-xs font-semibold hover:bg-gray-100 transition-all flex items-center gap-1">
                          Read Now
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="p-5">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Distance</p>
                        <p className="font-bold text-gray-900">{card.distance}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Duration</p>
                        <p className="font-bold text-gray-900">{card.duration}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Elevation</p>
                        <p className="font-bold text-gray-900">{card.elevation}</p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < card.rating
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-500 ml-1">(4.{card.rating})</span>
                    </div>

                    {/* Elevation Chart */}
                    <div className="relative h-16 bg-gray-100 rounded-xl overflow-hidden">
                      <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id={`gradient-${card.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
                          </linearGradient>
                        </defs>
                        <path
                          d={
                            card.difficulty === 'easy'
                              ? 'M0,50 L50,45 L100,40 L150,42 L200,38'
                              : card.difficulty === 'moderate'
                              ? 'M0,50 L50,35 L100,40 L150,25 L200,30'
                              : 'M0,45 L50,30 L100,20 L150,15 L200,25'
                          }
                          fill={`url(#gradient-${card.id})`}
                          stroke="#3B82F6"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
