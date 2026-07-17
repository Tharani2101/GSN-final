import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsMobileMenuOpen(false);
    setIsPagesDropdownOpen(false);
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Membership', id: 'membership' },
    { name: 'Chapters', id: 'chapters' },
    { name: 'Events', id: 'events' },
    { name: 'AI Network', id: 'ai-network' },
    { name: 'Success Stories', id: 'success-stories' },
    { name: 'Resources', id: 'resources' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050B1A]/80 backdrop-blur-[30px] border-b border-[#D4AF37]/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#B8941F] flex items-center justify-center">
              <Globe className="w-6 h-6 text-[#050B1A]" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#E8C547] bg-clip-text text-transparent">
              GSN
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm text-white/80 hover:text-[#D4AF37] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
              </button>
            ))}

            {/* Pages Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsPagesDropdownOpen(true)}
              onMouseLeave={() => setIsPagesDropdownOpen(false)}
            >
              <button
                className="text-sm text-white/80 hover:text-[#D4AF37] transition-colors relative group flex items-center gap-1"
              >
                Pages
                <ChevronDown className={`w-4 h-4 transition-transform ${isPagesDropdownOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
              </button>

              {isPagesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 mt-2 w-48 rounded-xl bg-[#050B1A]/95 backdrop-blur-[30px] border border-[#D4AF37]/20 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
                >
                  <button
                    onClick={() => {
                      navigate('/sample-1');
                      setIsPagesDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-sm text-white/80 hover:text-[#D4AF37] hover:bg-white/5 transition-all"
                  >
                    Sample 1
                  </button>
                  <button
                    onClick={() => {
                      navigate('/sample-2');
                      setIsPagesDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-sm text-white/80 hover:text-[#D4AF37] hover:bg-white/5 transition-all"
                  >
                    Sample 2
                  </button>
                  <button
                    onClick={() => {
                      navigate('/sample-3');
                      setIsPagesDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-sm text-white/80 hover:text-[#D4AF37] hover:bg-white/5 transition-all"
                  >
                    Sample 3
                  </button>
                  <button
                    onClick={() => {
                      navigate('/sample-4');
                      setIsPagesDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-sm text-white/80 hover:text-[#D4AF37] hover:bg-white/5 transition-all"
                  >
                    Sample 4
                  </button>
                  <button
                    onClick={() => {
                      navigate('/sample-5');
                      setIsPagesDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-sm text-white/80 hover:text-[#D4AF37] hover:bg-white/5 transition-all"
                  >
                    Sample 5
                  </button>
                  <button
                    onClick={() => {
                      navigate('/sample-6');
                      setIsPagesDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-sm text-white/80 hover:text-[#D4AF37] hover:bg-white/5 transition-all"
                  >
                    Sample 6
                  </button>
                  <button
                    onClick={() => {
                      navigate('/sample-7');
                      setIsPagesDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-sm text-white/80 hover:text-[#D4AF37] hover:bg-white/5 transition-all"
                  >
                    Sample 7
                  </button>
                  <button
                    onClick={() => {
                      navigate('/sample-8');
                      setIsPagesDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-sm text-white/80 hover:text-[#D4AF37] hover:bg-white/5 transition-all"
                  >
                    Sample 8
                  </button>
                  <button
                    onClick={() => {
                      navigate('/sample-9');
                      setIsPagesDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-sm text-white/80 hover:text-[#D4AF37] hover:bg-white/5 transition-all"
                  >
                    Sample 9
                  </button>
                  <button
                    onClick={() => {
                      navigate('/sample-10');
                      setIsPagesDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-sm text-white/80 hover:text-[#D4AF37] hover:bg-white/5 transition-all"
                  >
                    Sample 10
                  </button>
                  <button
                    onClick={() => {
                      navigate('/sample-11');
                      setIsPagesDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-sm text-white/80 hover:text-[#D4AF37] hover:bg-white/5 transition-all"
                  >
                    Sample 11
                  </button>
                </motion.div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('membership')}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E8C547] text-[#050B1A] font-semibold hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-shadow"
            >
              Join GSN
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white/80 hover:text-[#D4AF37] transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 pb-4 border-t border-[#D4AF37]/20 pt-4"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left py-3 text-white/80 hover:text-[#D4AF37] hover:bg-white/5 px-4 rounded-xl transition-all"
              >
                {link.name}
              </button>
            ))}

            {/* Mobile Pages Dropdown */}
            <div className="mt-2">
              <button
                onClick={() => setIsPagesDropdownOpen(!isPagesDropdownOpen)}
                className="flex items-center justify-between w-full text-left py-3 text-white/80 hover:text-[#D4AF37] hover:bg-white/5 px-4 rounded-xl transition-all"
              >
                Pages
                <ChevronDown className={`w-4 h-4 transition-transform ${isPagesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isPagesDropdownOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  <button
                    onClick={() => {
                      navigate('/sample-1');
                      setIsMobileMenuOpen(false);
                      setIsPagesDropdownOpen(false);
                    }}
                    className="block w-full text-left py-3 text-white/60 hover:text-[#D4AF37] hover:bg-white/5 px-4 rounded-xl transition-all"
                  >
                    Sample 1
                  </button>
                  <button
                    onClick={() => {
                      navigate('/sample-2');
                      setIsMobileMenuOpen(false);
                      setIsPagesDropdownOpen(false);
                    }}
                    className="block w-full text-left py-3 text-white/60 hover:text-[#D4AF37] hover:bg-white/5 px-4 rounded-xl transition-all"
                  >
                    Sample 2
                  </button>
                  <button
                    onClick={() => {
                      navigate('/sample-3');
                      setIsMobileMenuOpen(false);
                      setIsPagesDropdownOpen(false);
                    }}
                    className="block w-full text-left py-3 text-white/60 hover:text-[#D4AF37] hover:bg-white/5 px-4 rounded-xl transition-all"
                  >
                    Sample 3
                  </button>
                  <button
                    onClick={() => {
                      navigate('/sample-4');
                      setIsMobileMenuOpen(false);
                      setIsPagesDropdownOpen(false);
                    }}
                    className="block w-full text-left py-3 text-white/60 hover:text-[#D4AF37] hover:bg-white/5 px-4 rounded-xl transition-all"
                  >
                    Sample 4
                  </button>
                  <button
                    onClick={() => {
                      navigate('/sample-5');
                      setIsMobileMenuOpen(false);
                      setIsPagesDropdownOpen(false);
                    }}
                    className="block w-full text-left py-3 text-white/60 hover:text-[#D4AF37] hover:bg-white/5 px-4 rounded-xl transition-all"
                  >
                    Sample 5
                  </button>
                  <button
                    onClick={() => {
                      navigate('/sample-6');
                      setIsMobileMenuOpen(false);
                      setIsPagesDropdownOpen(false);
                    }}
                    className="block w-full text-left py-3 text-white/60 hover:text-[#D4AF37] hover:bg-white/5 px-4 rounded-xl transition-all"
                  >
                    Sample 6
                  </button>
                  <button
                    onClick={() => {
                      navigate('/sample-7');
                      setIsMobileMenuOpen(false);
                      setIsPagesDropdownOpen(false);
                    }}
                    className="block w-full text-left py-3 text-white/60 hover:text-[#D4AF37] hover:bg-white/5 px-4 rounded-xl transition-all"
                  >
                    Sample 7
                  </button>
                  <button
                    onClick={() => {
                      navigate('/sample-8');
                      setIsMobileMenuOpen(false);
                      setIsPagesDropdownOpen(false);
                    }}
                    className="block w-full text-left py-3 text-white/60 hover:text-[#D4AF37] hover:bg-white/5 px-4 rounded-xl transition-all"
                  >
                    Sample 8
                  </button>
                  <button
                    onClick={() => {
                      navigate('/sample-9');
                      setIsMobileMenuOpen(false);
                      setIsPagesDropdownOpen(false);
                    }}
                    className="block w-full text-left py-3 text-white/60 hover:text-[#D4AF37] hover:bg-white/5 px-4 rounded-xl transition-all"
                  >
                    Sample 9
                  </button>
                  <button
                    onClick={() => {
                      navigate('/sample-10');
                      setIsMobileMenuOpen(false);
                      setIsPagesDropdownOpen(false);
                    }}
                    className="block w-full text-left py-3 text-white/60 hover:text-[#D4AF37] hover:bg-white/5 px-4 rounded-xl transition-all"
                  >
                    Sample 10
                  </button>
                  <button
                    onClick={() => {
                      navigate('/sample-11');
                      setIsMobileMenuOpen(false);
                      setIsPagesDropdownOpen(false);
                    }}
                    className="block w-full text-left py-3 text-white/60 hover:text-[#D4AF37] hover:bg-white/5 px-4 rounded-xl transition-all"
                  >
                    Sample 11
                  </button>
                </div>
              )}
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('membership')}
              className="w-full mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E8C547] text-[#050B1A] font-semibold"
            >
              Join GSN
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
