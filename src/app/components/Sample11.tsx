import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Sample11() {
  const [currentSlide1, setCurrentSlide1] = useState(2);
  const [currentSlide2, setCurrentSlide2] = useState(1);

  const carousel1Images = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop',
    'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=500&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop',
  ];

  const carousel2Images = [
    {
      image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=600&h=800&fit=crop',
      title: 'Alien World',
    },
    {
      image: 'https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?w=600&h=800&fit=crop',
      title: 'Volcano Sunset',
    },
    {
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop',
      title: 'Mountain Sky',
    },
  ];

  const nextSlide1 = () => {
    setCurrentSlide1((prev) => (prev + 1) % carousel1Images.length);
  };

  const prevSlide1 = () => {
    setCurrentSlide1((prev) => (prev - 1 + carousel1Images.length) % carousel1Images.length);
  };

  const nextSlide2 = () => {
    setCurrentSlide2((prev) => (prev + 1) % carousel2Images.length);
  };

  const prevSlide2 = () => {
    setCurrentSlide2((prev) => (prev - 1 + carousel2Images.length) % carousel2Images.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Section 1 - Simple Image Carousel */}
      <section className="py-20 px-8 bg-white min-h-screen flex items-center justify-center">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Simple Image Carousel</h1>
          <p className="text-sm text-gray-500 mb-12">
            Pure CSS & JavaScript Carousel
            <br />
            created by Coding Artist
          </p>

          {/* Carousel Container */}
          <div className="relative mb-8">
            {/* Carousel Track */}
            <div className="flex items-center justify-center gap-6 overflow-hidden py-8">
              {carousel1Images.map((image, index) => {
                const offset = index - currentSlide1;
                const isActive = index === currentSlide1;

                return (
                  <motion.div
                    key={index}
                    animate={{
                      scale: isActive ? 1 : 0.8,
                      opacity: Math.abs(offset) <= 1 ? 1 : 0.3,
                      x: offset * 320,
                      zIndex: isActive ? 10 : 1,
                    }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="absolute"
                    style={{ width: '280px' }}
                  >
                    <div className="rounded-3xl overflow-hidden shadow-2xl">
                      <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide1}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-20"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={nextSlide1}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-20"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2">
            {carousel1Images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide1(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide1 ? 'bg-gray-900 w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Credit */}
          <p className="text-xs text-gray-400 mt-12">created by Coding Artist</p>
        </div>
      </section>

      {/* Section 2 - XPLORE Dark Slider */}
      <section className="py-20 px-8 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 min-h-screen relative overflow-hidden">
        {/* Background Stars */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random(),
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg" />
              <span className="text-2xl font-bold text-white">XPLORE</span>
            </div>

            <nav className="flex items-center gap-8">
              <a href="#" className="text-white text-sm hover:text-purple-300 transition-colors">
                Home
              </a>
              <a href="#" className="text-white text-sm hover:text-purple-300 transition-colors">
                About
              </a>
              <a href="#" className="text-white text-sm hover:text-purple-300 transition-colors">
                Packages
              </a>
              <a href="#" className="text-white text-sm hover:text-purple-300 transition-colors">
                Contact
              </a>
            </nav>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <h1 className="text-6xl font-bold text-white mb-6">SLIDER</h1>
              <p className="text-white/80 leading-relaxed mb-8 max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="px-8 py-3 rounded-lg bg-white text-purple-900 font-bold hover:bg-gray-100 transition-colors">
                EXPLORE NOW
              </button>
            </motion.div>

            {/* Right - Card Slider */}
            <div className="relative">
              <div className="relative h-96">
                <AnimatePresence mode="popLayout">
                  {carousel2Images.map((item, index) => {
                    const offset = index - currentSlide2;
                    const isActive = index === currentSlide2;

                    if (Math.abs(offset) > 1) return null;

                    return (
                      <motion.div
                        key={index}
                        initial={{ x: 400, opacity: 0, rotateY: -45 }}
                        animate={{
                          x: offset * 200,
                          scale: isActive ? 1 : 0.85,
                          opacity: isActive ? 1 : 0.5,
                          rotateY: offset * -15,
                          zIndex: isActive ? 10 : 1,
                        }}
                        exit={{ x: -400, opacity: 0, rotateY: 45 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{
                          transformStyle: 'preserve-3d',
                          width: '280px',
                        }}
                      >
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-96 object-cover"
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prevSlide2}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-purple-900" />
            </button>
            <button
              onClick={nextSlide2}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-purple-900" />
            </button>
          </div>
        </div>
      </section>

      {/* Section 3 - Spectra Business Landing */}
      <section className="py-20 px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rounded-sm" />
              </div>
              <span className="text-2xl font-bold text-gray-900">Spectra</span>
            </div>

            <nav className="flex items-center gap-8">
              <a href="#" className="text-gray-700 text-sm font-medium hover:text-gray-900 transition-colors">
                Home
              </a>
              <div className="relative group">
                <a href="#" className="text-gray-700 text-sm font-medium hover:text-gray-900 transition-colors flex items-center gap-1">
                  Features
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
              <a href="#" className="text-cyan-500 text-sm font-medium hover:text-cyan-600 transition-colors">
                Solutions
              </a>
              <a href="#" className="text-gray-700 text-sm font-medium hover:text-gray-900 transition-colors">
                Resources
              </a>
              <a href="#" className="text-gray-700 text-sm font-medium hover:text-gray-900 transition-colors">
                Contact Us
              </a>
              <button className="px-6 py-2 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-colors">
                Explore
              </button>
            </nav>
          </div>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                <span className="text-cyan-500">Modern</span> <span className="text-gray-900">Strategies</span>
                <br />
                <span className="text-gray-900">for Modern </span>
                <span className="text-cyan-500">Business.</span>
              </h1>

              <p className="text-gray-600 mb-8 max-w-lg">
                Empowering leaders with strategic clarity and operational excellence to build thriving, future-ready businesses.
              </p>

              <div className="flex items-center gap-4 mb-12">
                <button className="px-8 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors">
                  Book Appointment
                </button>
                <button className="px-8 py-3 rounded-full border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-colors">
                  Contact Us
                </button>
              </div>

              {/* Stats Section */}
              <div className="mb-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Elevate Your Business with
                  <br />
                  Expert Guidance.
                </h3>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-5xl font-bold text-gray-900 mb-2">98.5%</p>
                    <p className="text-sm text-gray-600">Client Satisfaction Rate</p>
                  </div>
                  <div>
                    <p className="text-5xl font-bold text-gray-900 mb-2">100%</p>
                    <p className="text-sm text-gray-600">Business we have helped</p>
                  </div>
                </div>
              </div>

              {/* Partner Logos */}
              <div className="flex items-center gap-8 flex-wrap">
                <div className="px-6 py-3 rounded-xl bg-white shadow-sm">
                  <span className="text-blue-600 font-bold text-xl">zoom</span>
                </div>
                <div className="px-6 py-3 rounded-xl bg-white shadow-sm">
                  <span className="text-gray-900 font-bold text-xl">ASUS</span>
                </div>
                <div className="px-6 py-3 rounded-xl bg-white shadow-sm">
                  <span className="text-gray-900 font-bold text-xl">AECOM</span>
                </div>
                <div className="px-6 py-3 rounded-xl bg-white shadow-sm">
                  <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.4 5.52c-.32.27-.64.54-.96.81-1.76 1.44-3.52 2.88-5.28 4.32-.96.78-1.92 1.56-2.88 2.34-.48.39-.96.78-1.44 1.17-.08.06-.16.12-.24.18v.12c.24.18.48.36.72.54 1.28 1.05 2.56 2.1 3.84 3.15.64.52 1.28 1.05 1.92 1.57.08.06.16.12.24.18l.48-.39c1.84-1.5 3.68-3 5.52-4.5.16-.13.32-.26.48-.39v-.12c-.16-.13-.32-.26-.48-.39-1.84-1.5-3.68-3-5.52-4.5l-.48-.39v-.12c.08.06.16.12.24.18.64.52 1.28 1.05 1.92 1.57 1.28 1.05 2.56 2.1 3.84 3.15.24.18.48.36.72.54v-.12c-.08-.06-.16-.12-.24-.18-.48-.39-.96-.78-1.44-1.17-.96-.78-1.92-1.56-2.88-2.34-1.76-1.44-3.52-2.88-5.28-4.32-.32-.27-.64-.54-.96-.81z" />
                  </svg>
                </div>
                <div className="px-6 py-3 rounded-xl bg-white shadow-sm">
                  <span className="text-purple-600 font-bold text-xl">stripe</span>
                </div>
              </div>
            </motion.div>

            {/* Right - Business Person Image */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop"
                  alt="Business Professional"
                  className="w-full h-auto object-cover rounded-3xl"
                />

                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-50" />
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl opacity-50" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
