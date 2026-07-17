import { motion } from 'motion/react';
import { Heart, Bone, Stethoscope, Brain, ArrowRight, Calendar, Clock } from 'lucide-react';

export function Sample4() {
  const specialties = [
    { icon: Heart, name: 'Heart', color: 'bg-gradient-to-br from-pink-400 to-pink-500' },
    { icon: Stethoscope, name: 'Lung', color: 'bg-gradient-to-br from-purple-400 to-purple-500' },
    { icon: Bone, name: 'Orthopedic', color: 'bg-gradient-to-br from-orange-400 to-orange-500' },
  ];

  const doctors = [
    {
      name: 'Dr. Marcus Horizon',
      specialty: 'Chardiologist',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
    },
    {
      name: 'Dr. Maria Elena',
      specialty: 'Psychologist',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop',
    },
  ];

  const stats = [
    { value: '300+', label: 'Active Specialist' },
    { value: '120+', label: 'Health Surgeons' },
    { value: '20+', label: 'Years Experience' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E0D5F5] via-[#D5E5F5] to-[#C5E8F5] relative overflow-hidden p-8">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-300/30 rounded-full blur-3xl" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl" />

        {/* Floating shapes */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-1/4 w-16 h-16 bg-yellow-300/40 rounded-2xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-1/4 w-12 h-12 bg-white/40 rounded-full"
        />
      </div>

      {/* Main Content Grid */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Main Doctor Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="relative rounded-3xl bg-white/40 backdrop-blur-2xl border border-white/60 shadow-2xl p-6 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <div className="w-2 h-2 bg-purple-300 rounded-full" />
                <div className="w-2 h-2 bg-purple-200 rounded-full" />
              </div>
            </div>

            {/* Doctor Image */}
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-orange-300 to-orange-400 rounded-3xl opacity-80" />
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&h=500&fit=crop"
                alt="Doctor"
                className="relative w-full h-64 object-cover object-top rounded-3xl"
              />

              {/* Stats Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-2 shadow-lg">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">300+</p>
                  <p className="text-xs text-gray-600">Patients</p>
                </div>
              </div>
            </div>

            {/* Doctor Info */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Dr. David Patel</h2>
              <p className="text-gray-600 mb-4">Orthopedic Surgeon</p>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600">(4.5)</span>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                Experience in orthopedic surgery with successful procedures and patient satisfaction
              </p>
            </div>

            {/* Book Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Book an Appointment
            </motion.button>
          </motion.div>

          {/* Specialties Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl bg-white/40 backdrop-blur-2xl border border-white/60 shadow-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Top Doctors</h3>
              <button className="text-sm text-cyan-500 hover:text-cyan-600">See All</button>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {specialties.map((specialty, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/50 backdrop-blur-md border border-white/60 cursor-pointer hover:shadow-lg transition-all"
                >
                  <div className={`w-12 h-12 ${specialty.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <specialty.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-medium text-gray-700">{specialty.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Middle Column */}
        <div className="space-y-6">
          {/* Welcome Card */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="rounded-3xl bg-white/40 backdrop-blur-2xl border border-white/60 shadow-xl p-6"
          >
            <h3 className="text-sm text-gray-600 mb-2">Features</h3>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Hello, Diana.
              <br />
              Choose the specialist
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Find experienced doctors across all specialties
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold shadow-lg flex items-center gap-2"
            >
              Find a Doctor
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Appointment Cards */}
          <div className="space-y-4">
            {doctors.map((doctor, idx) => (
              <motion.div
                key={idx}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="rounded-2xl bg-white/40 backdrop-blur-2xl border border-white/60 shadow-lg p-4 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-16 h-16 rounded-2xl object-cover shadow-md"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{doctor.name}</h4>
                    <p className="text-sm text-gray-600">{doctor.specialty}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <span className="text-sm text-gray-600">{doctor.rating}</span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg"
                  >
                    <Calendar className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Stats Card */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="rounded-3xl bg-white/40 backdrop-blur-2xl border border-white/60 shadow-xl p-6"
          >
            <div className="relative mb-6">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=300&fit=crop"
                alt="Medical"
                className="w-full h-48 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-xl px-3 py-1.5 shadow-md">
                <p className="text-sm font-semibold text-gray-900">120+</p>
              </div>
            </div>

            <h3 className="font-semibold text-gray-900 mb-4">About</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Our platform connects you with the best medical professionals. Get expert care and treatment from certified doctors.
            </p>

            {/* Stats Grid */}
            <div className="space-y-3">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/50 backdrop-blur-md border border-white/60"
                >
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-gray-600">{stat.label}</p>
                  </div>
                  {idx === 0 && <Heart className="w-8 h-8 text-pink-400" />}
                  {idx === 1 && <Stethoscope className="w-8 h-8 text-purple-400" />}
                  {idx === 2 && <Clock className="w-8 h-8 text-cyan-400" />}
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-6 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              See All
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
