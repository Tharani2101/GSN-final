import { motion } from 'motion/react';
import {
  Heart,
  MapPin,
  ChevronRight,
  Check,
  X,
  Play,
  ArrowRight,
  Calendar,
  Clock,
  ChevronLeft,
  Briefcase,
  TrendingUp,
} from 'lucide-react';

export function Sample8() {
  const jobs = [
    {
      company: 'Dribbble',
      position: 'Senior UI/UX Designer',
      type: 'Full-time',
      location: 'Switzerland',
      salary: '$120k+',
      color: 'bg-gray-900',
      icon: '○',
    },
    {
      company: 'Google',
      position: 'Graphic Designer',
      type: 'Full-time',
      location: 'Flexible schedule',
      salary: '$100 - $200',
      color: 'bg-white',
      icon: 'G',
      iconColor: 'text-blue-500',
    },
    {
      company: 'Dribbble',
      position: 'Senior Motion Designer',
      type: 'Contract',
      location: 'Remote',
      salary: '$80/hr',
      color: 'bg-pink-500',
      icon: '●',
    },
    {
      company: 'Webflow',
      position: 'Web Designer',
      type: 'Full-time',
      location: 'Juninho',
      salary: '$100 - $250',
      color: 'bg-blue-600',
      icon: '∞',
    },
    {
      company: 'Adobe',
      position: 'Junior UX/UI Designer',
      type: 'Contract',
      location: 'Remote',
      salary: '$100/hr',
      color: 'bg-red-600',
      icon: 'A',
    },
    {
      company: 'Figma',
      position: 'Graphic Designer',
      type: 'Full-time',
      location: 'Flexible schedule',
      salary: '$85 - $120k',
      color: 'bg-gray-900',
      icon: '○',
    },
  ];

  const webinars = [
    { title: 'Color Theory', time: '3 Sep', duration: '1pm', color: 'bg-orange-400' },
    { title: 'Double Diamond', time: '7 Sep', duration: '5pm', color: 'bg-green-400' },
    { title: 'Architecture', time: '7 Sep', duration: '1pm', color: 'bg-blue-400' },
  ];

  const tags = [
    { label: 'Skill-Based', active: false },
    { label: 'Business', active: false },
    { label: 'Marketing', active: false },
    { label: 'Leadership', active: true },
    { label: 'Coordination', active: false },
    { label: 'Science', active: false },
    { label: 'Power', active: false },
    { label: 'Design', active: false },
    { label: 'Endurance', active: false },
    { label: 'Writing', active: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Section 1 - Travel Discount Card */}
      <section className="py-20 px-8 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-gray-400 text-sm font-medium">UI Cards</h2>
            <h2 className="text-gray-400 text-sm font-medium">Statistics</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <h1 className="text-6xl font-light text-gray-400 mb-4">
                Choose
                <br />
                the perfect
                <br />
                trip for <span className="font-semibold text-gray-800">you</span>
              </h1>
              <p className="text-gray-400 text-sm mt-8">Eloovnt</p>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="w-80 bg-gradient-to-br from-orange-600 via-orange-700 to-amber-900 rounded-3xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/80 text-sm">Srilanka</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-4 py-1 rounded-full border border-white/30 text-white text-xs">
                      Super Offer
                    </button>
                    <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <Heart className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>

                <div className="mb-6">
                  <h2 className="text-7xl font-bold text-white mb-2">35%</h2>
                  <p className="text-white/90 font-semibold mb-1">Sunglasses xxll Sunkland Aola</p>
                  <p className="text-white/60 text-sm">Lorem lpsum dolor sit amet</p>
                </div>

                <div className="bg-black/20 rounded-2xl p-4 backdrop-blur-sm">
                  <img
                    src="https://images.unsplash.com/photo-1557129604-e953b0a6c70a?w=600&h=200&fit=crop"
                    alt="Elephants"
                    className="w-full h-24 object-cover rounded-xl"
                  />
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <p className="text-white/60 text-xs">www.eloovnt.com</p>
                  <button className="text-white/60 hover:text-white">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          <p className="text-right text-gray-300 text-xs mt-12 max-w-xs ml-auto">
            Travel cards provided brief travel statistics from the past months. It helps to keep track of tours, cruises, and road trips.
          </p>
        </div>
      </section>

      {/* Section 2 - Confirmation & Studio Cards */}
      <section className="py-20 px-8 bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Confirmation Card */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center mb-6">
                <Check className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">Can you confirm the following?</h3>
              <p className="text-gray-500 text-sm mb-8">
                This is specifically to see how many files you have
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm mb-2">
                    Can it ever been possible?
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-400">
                    <option>Undisclosed</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm mb-2">
                    When was the last time you put that?
                  </label>
                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-3 rounded-xl bg-orange-400 text-white font-semibold">
                      Outstanding
                    </button>
                    <button className="px-4 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold">
                      Not Okay
                    </button>
                    <button className="px-4 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold">
                      Okay
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm mb-2">
                    Which one is better?
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl bg-orange-400 text-white font-semibold">
                    <option>Outstanding</option>
                  </select>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <button className="text-gray-400 hover:text-gray-600 flex items-center gap-2">
                  <ChevronLeft className="w-4 h-4" />
                  <span className="text-sm">Back</span>
                </button>
                <button className="text-orange-400 hover:text-orange-600 flex items-center gap-2">
                  <span className="text-sm font-semibold">Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Studio Card & Info Card */}
            <div className="space-y-6">
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl p-6 shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <p className="text-gray-600 text-sm">Lorem ipsum dolor sit consectetur te</p>
                  <button className="text-gray-400">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex gap-2 mb-4">
                  <span className="px-4 py-2 rounded-full bg-orange-700 text-white text-xs font-semibold flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    Mongoloia
                  </span>
                  <span className="px-4 py-2 rounded-full bg-orange-600 text-white text-xs font-semibold flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    September 2019
                  </span>
                </div>

                <div className="flex gap-2 mb-6">
                  <span className="px-4 py-2 rounded-full border border-gray-200 text-gray-600 text-xs font-semibold flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    Tropical Island
                  </span>
                  <span className="px-4 py-2 rounded-full border border-gray-200 text-gray-600 text-xs font-semibold flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Roadstream
                  </span>
                </div>

                <div className="bg-gradient-to-br from-amber-300 via-amber-400 to-orange-500 rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between mb-8">
                    <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-xs font-semibold">
                      Verified
                    </span>
                  </div>
                  <h2 className="text-4xl font-bold">Ocs Studio</h2>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Service Cards (Dark Theme) */}
      <section className="py-20 px-8 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Web Design\nand Development',
                description: 'A website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
                gradient: 'from-green-900/50 to-emerald-700/50',
                iconBg: 'from-green-500/20 to-emerald-500/20',
              },
              {
                title: 'Digital Brand\nDesign',
                description: 'We design key brand elements such as the logo, color palette, typography, and other design components that makes your brand stand out from competitors.',
                gradient: 'from-purple-900/50 to-purple-600/50',
                iconBg: 'from-purple-500/20 to-purple-400/20',
                featured: true,
              },
              {
                title: 'UX Design\nperiences',
                description: "Looking to improve your product design? We can help you to figure out where to go next and we'll make your digital product shine.",
                gradient: 'from-pink-900/50 to-pink-600/50',
                iconBg: 'from-pink-500/20 to-pink-400/20',
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className={`relative ${service.featured ? 'lg:-mt-8' : ''}`}
              >
                <div className={`bg-gradient-to-br ${service.gradient} backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl h-full`}>
                  {/* Hexagon Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className={`w-32 h-32 bg-gradient-to-br ${service.iconBg} backdrop-blur-xl rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                      <div className="w-24 h-24 border-4 border-white/20 rotate-45 rounded-xl" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-lg" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 whitespace-pre-line">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {service.featured && (
                    <button className="px-6 py-3 rounded-full bg-purple-500 text-white font-semibold hover:bg-purple-400 transition-colors">
                      Learn more
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - Ride Tracking Card */}
      <section className="py-20 px-8 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-gray-400 text-sm font-medium">UI Cards</h2>
            <h2 className="text-gray-400 text-sm font-medium">Timeline</h2>
          </div>

          <div className="flex justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-96"
            >
              <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 rounded-3xl p-8 shadow-2xl">
                {/* Top Tabs */}
                <div className="flex gap-3 mb-6">
                  <button className="flex-1 px-4 py-2 rounded-full bg-white text-gray-900 text-sm font-semibold">
                    Flight
                  </button>
                  <button className="flex-1 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold backdrop-blur-sm">
                    Airplane
                  </button>
                </div>

                <div className="flex gap-3 mb-8">
                  <button className="flex-1 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold backdrop-blur-sm">
                    Sharing
                  </button>
                  <button className="flex-1 px-4 py-2 rounded-full bg-purple-500 text-white text-sm font-semibold">
                    Traveling
                  </button>
                </div>

                {/* Play Button */}
                <div className="flex justify-center mb-6">
                  <button className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center hover:bg-purple-400 transition-colors">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </button>
                </div>

                {/* Stats */}
                <div className="flex justify-between mb-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white mb-1">2 miles</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white mb-1">-31 minutes</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="w-full h-2 bg-purple-950 rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-purple-500 rounded-full" />
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-purple-300 text-xs">PICK-UP POINT</span>
                    <span className="text-purple-300 text-xs">10:30 AM</span>
                  </div>
                </div>

                {/* Destination Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                    <p className="text-white text-sm">From: Cathedral Circle</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-white" />
                    <p className="text-white text-sm">Drop: Dome Station</p>
                  </div>
                </div>

                {/* Driver Images */}
                <div className="flex gap-3 mt-6">
                  <img
                    src="https://i.pravatar.cc/150?img=33"
                    alt="Driver"
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <img
                    src="https://i.pravatar.cc/150?img=44"
                    alt="Vehicle"
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <p className="text-right text-gray-300 text-xs mt-12 max-w-xs ml-auto">
            Timeline cards capture the result by tracking, driving, and flying.
          </p>
          <p className="text-left text-gray-400 text-sm mt-8">Eloovnt</p>
        </div>
      </section>

      {/* Section 5 - Job Listings */}
      <section className="py-20 px-8 bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 ${job.color} rounded-2xl flex items-center justify-center`}>
                    <span className={`text-2xl font-bold ${job.iconColor || 'text-white'}`}>
                      {job.icon}
                    </span>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>

                <div className="mb-6">
                  <p className="text-gray-500 text-xs mb-2">{job.company}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{job.position}</h3>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                      {job.type}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                      {job.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-gray-900">{job.salary}</p>
                  <button className="px-6 py-3 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-colors">
                    Apply job
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 - Dashboard Widgets */}
      <section className="py-20 px-8 bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Progress Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <div className="flex justify-center mb-6">
                <div className="relative w-40 h-40">
                  <svg className="w-full h-full -rotate-90">
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      fill="none"
                      stroke="#f3f4f6"
                      strokeWidth="12"
                    />
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="12"
                      strokeDasharray="440"
                      strokeDashoffset="88"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#f59e0b" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-900">82%</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Weekly progress</h3>
              <p className="text-gray-500 text-sm text-center">4/5 tasks done</p>
            </motion.div>

            {/* 3D Objects Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-green-400 to-green-600 rounded-3xl p-8 shadow-lg relative overflow-hidden"
            >
              <div className="relative z-10">
                <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold">
                  #Business
                </span>
                <h3 className="text-2xl font-bold text-white mt-4 mb-6">
                  Sales Marketing
                  <br />
                  Workshop
                </h3>
                <button className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <Play className="w-5 h-5 text-white fill-white" />
                </button>
              </div>

              {/* 3D Objects */}
              <div className="absolute top-4 right-4 w-32 h-32">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full shadow-xl" />
                <div className="absolute top-8 right-12 w-12 h-12 bg-white rounded-lg shadow-xl transform rotate-12" />
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-br from-green-900 to-green-700 rounded-full shadow-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-green-700 to-green-900" />
                  <div className="absolute inset-x-0 top-1/2 h-px bg-green-800" />
                  <div className="absolute inset-x-0 top-1/4 h-px bg-green-800" />
                  <div className="absolute inset-x-0 top-3/4 h-px bg-green-800" />
                </div>
              </div>
            </motion.div>

            {/* Total Hours Chart */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Total Hours</h3>
                <div className="text-right">
                  <span className="text-3xl font-bold text-gray-900">7</span>
                  <span className="text-sm text-gray-500">h </span>
                  <span className="text-3xl font-bold text-gray-900">48</span>
                  <span className="text-sm text-gray-500">min</span>
                </div>
              </div>

              <div className="relative h-32">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
                  <div key={day} className="absolute bottom-0" style={{ left: `${idx * 14.28}%` }}>
                    <div
                      className={`w-8 rounded-lg ${
                        idx === 2 ? 'bg-gray-900' : 'bg-gray-200'
                      }`}
                      style={{ height: `${Math.random() * 80 + 20}px` }}
                    />
                    <p className="text-xs text-gray-500 mt-2 text-center">{day}</p>
                  </div>
                ))}
                {/* Tooltip */}
                <div className="absolute top-0 left-1/3 bg-gray-900 text-white px-3 py-1 rounded-lg text-xs">
                  7h 61
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Webinars Card */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Webinars</h3>
                <span className="text-gray-500">124 webinars</span>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {webinars.map((webinar, idx) => (
                  <div key={idx} className="text-center">
                    <div className={`w-16 h-16 ${webinar.color} rounded-2xl mx-auto mb-2 flex items-center justify-center`}>
                      <div className="w-8 h-8 bg-white/30 rounded-full" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">{webinar.title}</p>
                    <p className="text-xs text-gray-500">{webinar.time}</p>
                    <p className="text-xs text-gray-500">{webinar.duration}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                  <button
                    key={idx}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                      tag.active
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {tag.label}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Calendar Card */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">September 2022</h3>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center">
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center">
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center text-xs text-gray-500 font-medium">
                    {day}
                  </div>
                ))}
                {[...Array(7)].map((_, idx) => (
                  <div key={idx} className="text-center py-2 text-sm text-gray-900">
                    {idx + 2}
                  </div>
                ))}
              </div>

              {/* Tasks */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 rounded-xl bg-purple-50">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                    <span className="text-sm font-medium text-gray-900">Music</span>
                    <span className="text-xs text-gray-500">5 hours per day</span>
                  </div>
                  <span className="text-sm font-bold text-gray-900">80%</span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-green-50">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-sm font-medium text-gray-900">Food</span>
                    <span className="text-xs text-gray-500">5 hours per day</span>
                  </div>
                  <span className="text-sm font-bold text-gray-900">65%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper component for MoreVertical icon
function MoreVertical({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
      />
    </svg>
  );
}
