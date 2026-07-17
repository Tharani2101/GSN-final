import { motion } from 'motion/react';
import {
  Search,
  Bell,
  Heart,
  MoreVertical,
  CheckCircle,
  Users,
  MessageCircle,
  Calendar,
  MapPin,
  Eye,
  Instagram,
  Twitter,
  Dribbble,
  Facebook,
  Plus,
  Clock,
} from 'lucide-react';

export function Sample10() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Section 1 - NFT Marketplace */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-8">
              <div className="text-2xl font-bold">🎨</div>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-12 pr-4 py-3 rounded-full bg-gray-100 border-none focus:outline-none focus:ring-2 focus:ring-gray-300 w-64"
                />
              </div>
            </div>

            <div className="flex items-center gap-6">
              <button className="px-6 py-2 rounded-full bg-gray-900 text-white text-sm font-semibold">
                Collection
              </button>
              {['Art', 'Sports', 'Gaming', 'Utility', 'Cards'].map((tab) => (
                <button key={tab} className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                  {tab}
                </button>
              ))}
              <div className="flex items-center gap-3">
                <button className="relative p-2">
                  <Bell className="w-5 h-5 text-gray-600" />
                  <div className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full" />
                </button>
                <img
                  src="https://i.pravatar.cc/150?img=68"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
              </div>
            </div>
          </div>

          {/* NFT Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Top NFT Section */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Top NFT</h2>
                <button className="text-gray-400">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                {/* NFT Card 1 */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src="https://i.pravatar.cc/150?img=33"
                      alt="Creator"
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">NFT Artist</p>
                      <p className="text-xs text-gray-500">@nftartist</p>
                    </div>
                    <Heart className="w-5 h-5 text-gray-400" />
                  </div>

                  <div className="relative mb-4">
                    <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400&h=400&fit=crop"
                        alt="NFT"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3">DRO_#39707</h3>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">Price</p>
                      <p className="text-lg font-bold text-gray-900">0.5 ETH</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Highest Bid</p>
                      <p className="text-sm font-semibold text-gray-700">0.8 ETH</p>
                    </div>
                  </div>
                </motion.div>

                {/* NFT Card 2 */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src="https://i.pravatar.cc/150?img=44"
                      alt="Creator"
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">Crypto Art</p>
                      <p className="text-xs text-gray-500">@cryptoart</p>
                    </div>
                    <Heart className="w-5 h-5 text-gray-400" />
                  </div>

                  <div className="relative mb-4">
                    <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-teal-300 to-cyan-500 flex items-center justify-center">
                      <div className="w-32 h-32 bg-white/20 rounded-full" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3">Abstract #2341</h3>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">Price</p>
                      <p className="text-lg font-bold text-gray-900">0.3 ETH</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Highest Bid</p>
                      <p className="text-sm font-semibold text-gray-700">0.5 ETH</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Rare NFT Section */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Rare NFT</h2>
                <button className="text-gray-400">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl p-6 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="https://i.pravatar.cc/150?img=12"
                    alt="Creator"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-bold text-white">Rare Artist</p>
                    <p className="text-xs text-white/80">@rareart</p>
                  </div>
                  <Heart className="w-5 h-5 text-white" />
                </div>

                <div className="relative mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop"
                    alt="Rare NFT"
                    className="w-full aspect-square rounded-2xl object-cover"
                  />
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-white/80">Price</p>
                    <p className="text-xl font-bold text-white">ETH 5.00</p>
                  </div>
                  <button className="px-6 py-2 rounded-full bg-white text-emerald-600 font-bold text-sm hover:bg-gray-100 transition-colors">
                    Place a Bid
                  </button>
                </div>

                <div className="pt-4 border-t border-white/20">
                  <p className="text-xs text-white/60">Highest Bid</p>
                  <p className="text-sm font-semibold text-white">ETH 7.50</p>
                </div>
              </motion.div>
            </div>

            {/* Third Column - More NFTs */}
            <div className="space-y-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="https://i.pravatar.cc/150?img=25"
                    alt="Creator"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">Digital Art</p>
                    <p className="text-xs text-gray-500">@digitalart</p>
                  </div>
                  <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
                </div>

                <div className="relative mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=400&h=400&fit=crop"
                    alt="NFT"
                    className="w-full aspect-square rounded-2xl object-cover"
                  />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3">Fire Art #5623</h3>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">Price</p>
                    <p className="text-lg font-bold text-gray-900">1.2 ETH</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Highest Bid</p>
                    <p className="text-sm font-semibold text-gray-700">1.5 ETH</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl p-6 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="https://i.pravatar.cc/150?img=55"
                    alt="Creator"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-bold text-white">Sunset</p>
                    <p className="text-xs text-white/80">@sunset</p>
                  </div>
                  <Heart className="w-5 h-5 text-white" />
                </div>

                <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-yellow-300 to-orange-500 mb-4" />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/80">Price</p>
                    <p className="text-xl font-bold text-white">0.9 ETH</p>
                  </div>
                  <button className="px-6 py-2 rounded-full bg-white text-orange-600 font-bold text-sm">
                    Bid Now
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Bento Grid */}
      <section className="py-20 px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto">
            {/* Stats Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="lg:col-span-1 lg:row-span-2 bg-gradient-to-br from-emerald-300 to-teal-400 rounded-3xl p-8 shadow-lg"
            >
              <Users className="w-12 h-12 text-emerald-700 mb-6" />
              <h2 className="text-6xl font-bold text-gray-900 mb-2">645M</h2>
              <p className="text-gray-700 font-medium mb-6">
                followers across media
                <br />
                channels for facebook, twitter,
                <br />
                Instagram and linkedin
              </p>
              <p className="text-sm text-gray-600">Last updated Jan 2</p>
            </motion.div>

            {/* Newsletter Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="lg:col-span-1 bg-white rounded-3xl p-8 shadow-lg"
            >
              <h3 className="text-4xl font-bold text-gray-900 mb-2">1,234+</h3>
              <p className="text-sm text-gray-600 mb-6">
                monthly newsletter
                <br />
                subscribers
              </p>
              <MessageCircle className="w-10 h-10 text-gray-300" />
            </motion.div>

            {/* Availability Calendar */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="lg:col-span-2 lg:row-span-2 bg-white rounded-3xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Let people know your availability</h3>
              <p className="text-sm text-gray-600 mb-6">Weekly availability (overview)</p>

              <div className="flex gap-4">
                {[
                  { day: 'Mon', hours: 5 },
                  { day: 'Tue', hours: 4 },
                  { day: 'Wed', hours: 6 },
                  { day: 'Thu', hours: 3 },
                  { day: 'Fri', hours: 2 },
                ].map((item, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center">
                    <div className="w-full bg-gray-100 rounded-2xl overflow-hidden mb-2" style={{ height: '120px' }}>
                      <div
                        className="w-full bg-gray-900 rounded-2xl"
                        style={{ height: `${(item.hours / 6) * 100}%`, marginTop: `${100 - (item.hours / 6) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs font-medium text-gray-600">{item.day}</p>
                    <p className="text-xs text-gray-400">{item.hours} hours</p>
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-400 mt-4">* days shown indicate availability</p>
            </motion.div>

            {/* Influencer Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="lg:col-span-1 bg-gradient-to-br from-pink-100 to-rose-200 rounded-3xl p-8 shadow-lg"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-2">Need an influencer?</h4>
              <p className="text-sm text-gray-700 mb-4">
                I provide exclusive influencer
                <br />
                and model services.
              </p>
              <button className="text-sm font-semibold text-pink-600 hover:text-pink-700">
                Send me a message
              </button>
            </motion.div>

            {/* Partnership Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="lg:col-span-2 bg-gray-900 rounded-3xl p-8 shadow-lg text-white"
            >
              <h3 className="text-xl font-bold mb-2">Partnership chat with me</h3>
              <p className="text-sm text-gray-400 mb-6">
                Let's find some time to talk about your upcoming project or
                <br />
                partnership opportunity (seeds)
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-sm">30 Minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-sm">Google Meets</span>
                </div>
              </div>
            </motion.div>

            {/* Event Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="lg:col-span-2 bg-gradient-to-br from-blue-900 to-purple-900 rounded-3xl overflow-hidden shadow-lg relative"
            >
              <div className="absolute top-6 right-6 px-4 py-2 rounded-xl bg-purple-600 text-white font-bold">
                24
                <br />
                <span className="text-xs">JAN</span>
              </div>

              <div className="p-8">
                <div className="w-64 h-64 absolute -bottom-12 -right-12 opacity-50">
                  <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2">Name of your event</h3>
                  <p className="text-sm text-white/80 mb-6">
                    Here is a breakdown of your upcoming
                    <br />
                    conference event coming up this month
                  </p>
                  <button className="px-6 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors">
                    Get tickets
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Product Cards */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="lg:col-span-1 bg-white rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop"
                alt="Product"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm font-semibold text-gray-900 mb-1">$24.00</p>
                <p className="text-xs text-gray-500">Black winter fall hoodie</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="lg:col-span-1 bg-white rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop"
                alt="Product"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm font-semibold text-gray-900 mb-1">$44.00</p>
                <p className="text-xs text-gray-500">Green flannel fall hoodie</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 - Profile Card */}
      <section className="py-20 px-8 relative overflow-hidden min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800" />
        <div className="absolute inset-0 opacity-50">
          <img
            src="https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&h=1080&fit=crop"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative z-10 bg-white rounded-3xl p-8 shadow-2xl max-w-md"
        >
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=300&fit=crop"
            alt="Kieran Glover"
            className="w-full h-48 object-cover rounded-2xl mb-6"
          />

          <h2 className="text-3xl font-bold text-gray-900 mb-1">Kieran Glover</h2>
          <p className="text-gray-600 mb-6">Web Designer & YouTuber</p>

          <p className="text-gray-700 text-sm leading-relaxed mb-8">
            Hi, I'm Kieran, a professional web designer and developer, I develop responsive websites with the latest tools and technologies,
            you can checkout my socials below to see my work.
          </p>

          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <Facebook className="w-5 h-5 text-gray-700" />
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <Twitter className="w-5 h-5 text-gray-700" />
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <Dribbble className="w-5 h-5 text-gray-700" />
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <Instagram className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          <div className="absolute bottom-8 right-8 text-xs text-gray-400">
            By JustInCoders
          </div>
        </motion.div>
      </section>

      {/* Section 4 - Sophie Bennett Cards */}
      <section className="py-20 px-8 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((idx) => (
              <motion.div
                key={idx}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl p-6 shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
                  alt="Sophie Bennett"
                  className="w-full aspect-square object-cover rounded-3xl mb-6"
                />

                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Sophie Bennett</h3>
                  <CheckCircle className="w-5 h-5 text-green-500 fill-green-500" />
                </div>

                <p className="text-sm text-gray-700 mb-6">
                  {idx === 3
                    ? 'A Product Designer focused on intuitive user experiences.'
                    : 'Product Designer who focuses on simplicity & usability.'}
                </p>

                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-semibold text-gray-900">312</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-semibold text-gray-900">48</span>
                  </div>
                </div>

                <button className="w-full py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                  Follow
                  <Plus className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 - Noah Thompson Cards */}
      <section className="py-20 px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200"
              >
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=200&fit=crop"
                    alt="Background"
                    className="w-full h-32 object-cover blur-sm"
                  />
                  <div className="absolute top-4 right-4">
                    <button className="px-4 py-2 rounded-full bg-white text-gray-900 text-sm font-semibold shadow-lg">
                      {idx === 1 ? 'Follow +' : '+'}
                    </button>
                  </div>

                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                    <div className="w-24 h-24 rounded-full bg-white p-1 shadow-xl">
                      <img
                        src="https://i.pravatar.cc/150?img=52"
                        alt="Noah Thompson"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-16 pb-8 px-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Noah Thompson</h3>
                  <p className="text-sm text-gray-600 mb-8">
                    Product Designer who focuses on
                    <br />
                    simplicity & usability
                  </p>

                  <div className="flex items-center justify-center gap-12 mb-8">
                    <div>
                      <p className="text-2xl font-bold text-gray-900">72.9K</p>
                      <p className="text-xs text-gray-500">Followers</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">828</p>
                      <p className="text-xs text-gray-500">Following</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">342.9K</p>
                      <p className="text-xs text-gray-500">Likes</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-4">
                    <button className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <Instagram className="w-5 h-5 text-gray-700" />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <Twitter className="w-5 h-5 text-gray-700" />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <Dribbble className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 - Credit Card Landing */}
      <section className="py-20 px-8 relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400" />

        {/* Floating Circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-2xl opacity-50" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full blur-2xl opacity-50" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-white"
          >
            <div className="flex items-center gap-8 mb-12">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-purple-600" />
              </div>
              <div className="flex gap-6 text-sm">
                <a href="#" className="hover:text-white/80">Home</a>
                <a href="#" className="hover:text-white/80">About</a>
                <a href="#" className="hover:text-white/80">Benefits</a>
                <a href="#" className="hover:text-white/80">Services</a>
              </div>
            </div>

            <p className="text-white/80 mb-4">— The card is free to</p>
            <h1 className="text-7xl font-bold mb-8 leading-tight">
              The Thinking
              <br />
              Behind the
              <br />
              Money
            </h1>

            <button className="px-8 py-4 rounded-full bg-purple-600 text-white font-bold hover:bg-purple-500 transition-colors">
              GET STARTED
            </button>

            <p className="text-xs text-white/60 mt-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </motion.div>

          {/* Right - Credit Cards */}
          <motion.div
            initial={{ x: 50, opacity: 0, rotateY: -20 }}
            animate={{ x: 0, opacity: 1, rotateY: 0 }}
            className="relative"
            style={{ perspective: '1200px' }}
          >
            <div className="relative w-full h-[500px]">
              {/* Card 1 - Purple */}
              <motion.div
                whileHover={{ rotateY: 10, z: 50 }}
                className="absolute top-0 right-20 w-80 h-48 rounded-3xl bg-gradient-to-br from-purple-700 to-purple-900 shadow-2xl p-6 text-white"
                style={{
                  transform: 'rotateX(15deg) rotateY(-15deg) rotateZ(-5deg)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg" />
                  <p className="text-sm">VISA</p>
                </div>
                <p className="text-lg mb-2">**** **** **** 1234</p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs opacity-60">Card Holder</p>
                    <p className="text-sm">John Doe</p>
                  </div>
                  <div>
                    <p className="text-xs opacity-60">Expires</p>
                    <p className="text-sm">12/25</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 - Pink */}
              <motion.div
                whileHover={{ rotateY: 10, z: 50 }}
                className="absolute top-24 left-10 w-80 h-48 rounded-3xl bg-gradient-to-br from-pink-500 to-purple-600 shadow-2xl p-6 text-white"
                style={{
                  transform: 'rotateX(10deg) rotateY(20deg) rotateZ(3deg)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 bg-yellow-300 rounded-lg" />
                  <p className="text-sm">VISA</p>
                </div>
                <p className="text-lg mb-2">**** **** **** 5678</p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs opacity-60">Card Holder</p>
                    <p className="text-sm">Jane Smith</p>
                  </div>
                  <div>
                    <p className="text-xs opacity-60">Expires</p>
                    <p className="text-sm">08/26</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
