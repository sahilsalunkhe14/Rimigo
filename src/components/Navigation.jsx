import { Menu, X, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Destinations', href: '#destinations' },
    { label: 'Experiences', href: '#testimonial' },
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'About', href: '#about' },
  ];

  return (
    <motion.nav
      className={`
        fixed left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-7xl transition-all duration-500
        ${scrolled
          ? 'top-4 bg-white shadow-lg rounded-xl'
          : 'top-0 bg-transparent'}
      `}
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-between px-6 py-3">
        <motion.a
          href="/"
          className={`flex items-center gap-2 text-2xl font-semibold transition-colors duration-300 ${
            scrolled ? 'text-slate-900' : 'text-white'
          }`}
        >
          <Globe size={28} />
          Rimigo
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-300 hover:text-orange-500 ${
                scrolled ? 'text-slate-700' : 'text-white'
              }`}
              whileHover={{ y: -2 }}
            >
              {item.label}
            </motion.a>
          ))}

          <motion.a
            href="#calltoaction"
            className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-200 hover:scale-105 active:scale-95 ${
              scrolled
                ? 'bg-orange-500 text-white hover:bg-orange-600'
                : 'bg-white text-slate-900 hover:bg-white/90'
            }`}
          >
            Get Started
          </motion.a>
        </div>

        <motion.button
          className={`md:hidden transition-colors duration-300 ${
            scrolled ? 'text-slate-900' : 'text-white'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden mt-2 bg-white rounded-xl shadow-xl overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <div className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-6 py-4 text-slate-900 hover:bg-gray-100 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="px-6 py-4 border-t border-gray-200">
                <a
                  href="#calltoaction"
                  className="w-full block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-medium transition-colors text-center"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
