import { motion } from 'motion/react';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Events() {
  const events = [
    {
      title: 'Global Business Summit 2026',
      date: 'July 15-17, 2026',
      location: 'New York, USA',
      attendees: '2,500+',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMGNvbmZlcmVuY2V8ZW58MXx8fHwxNzgwNzMxNDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      speakers: 'Tim Cook, Satya Nadella, Mary Barra',
      type: 'Conference',
    },
    {
      title: 'AI & Innovation Forum',
      date: 'August 5, 2026',
      location: 'San Francisco, USA',
      attendees: '800+',
      image: 'https://images.unsplash.com/photo-1631193816258-28b44b21e78b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBtb2Rlcm4lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzgwNzMxNDUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      speakers: 'Sam Altman, Demis Hassabis',
      type: 'Forum',
    },
    {
      title: 'European Leadership Retreat',
      date: 'September 20-22, 2026',
      location: 'London, UK',
      attendees: '300+',
      image: 'https://images.unsplash.com/photo-1758519290846-255734761926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG5ldHdvcmtpbmclMjBnbG9iYWwlMjBjb25uZWN0aW9uc3xlbnwxfHx8fDE3ODA3MzE0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      speakers: 'Exclusive Member Session',
      type: 'Retreat',
    },
  ];

  return (
    <section id="events" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px]" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Upcoming
            </span>{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#E8C547] bg-clip-text text-transparent">
              Events
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Join world-class networking events and conferences designed for business leaders
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl bg-white/5 backdrop-blur-[30px] border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] overflow-hidden cursor-pointer"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B1A] via-[#050B1A]/50 to-transparent" />
                
                {/* Event Type Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#D4AF37]/90 backdrop-blur-sm text-[#050B1A] text-xs font-semibold">
                  {event.type}
                </div>
              </div>

              {/* Event Details */}
              <div className="relative p-6">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors">
                  {event.title}
                </h3>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <Calendar className="w-4 h-4 text-[#D4AF37]" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <MapPin className="w-4 h-4 text-[#D4AF37]" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <Users className="w-4 h-4 text-[#D4AF37]" />
                    {event.attendees} Expected Attendees
                  </div>
                </div>

                <div className="pt-4 border-t border-[#D4AF37]/20">
                  <div className="text-xs text-white/60 mb-3">Featured Speakers</div>
                  <div className="text-sm text-white/90 mb-4">{event.speakers}</div>
                  
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-[#D4AF37] font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    Register Now
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-[#D4AF37]/30 text-white font-semibold hover:bg-white/10 transition-all"
          >
            View All Events
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
