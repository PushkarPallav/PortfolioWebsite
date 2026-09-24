'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Research', id: 'research' },
  { name: 'Leadership', id: 'leadership' },
  { name: 'Achievements', id: 'achievements' },
  { name: 'Connect', id: 'connect' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    navLinks.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      navLinks.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center pointer-events-none"
    >
      {/* Desktop Cyber Capsule Navigation */}
      <nav
        className={`pointer-events-auto hidden md:flex items-center gap-1 p-1.5 rounded-full backdrop-blur-2xl transition-all duration-300 ${
          isScrolled
            ? 'bg-[#09090b]/90 border border-cyan-500/30 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(34,211,238,0.15)]'
            : 'bg-white/[0.04] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
        }`}
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`relative px-4 py-2 text-xs lg:text-sm font-mono tracking-wide rounded-full transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'text-cyan-300 font-semibold'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeCyberPill"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-emerald-500/20 to-cyan-500/20 border border-cyan-400/40 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.25)]"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </button>
          );
        })}
      </nav>

      {/* Mobile Floating Pill Toggle */}
      <div className="md:hidden pointer-events-auto flex items-center">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#09090b]/90 border border-cyan-500/30 text-white backdrop-blur-xl shadow-[0_0_20px_rgba(34,211,238,0.2)]"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-mono tracking-wider uppercase text-cyan-400 font-semibold">
            {navLinks.find((l) => l.id === activeSection)?.name || 'Menu'}
          </span>
          {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
        </button>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-14 left-1/2 -translate-x-1/2 w-64 p-3 bg-[#09090b]/95 backdrop-blur-2xl border border-cyan-500/30 rounded-2xl flex flex-col gap-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(34,211,238,0.2)]"
            >
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left px-3.5 py-2 rounded-xl text-xs font-mono transition-colors ${
                    activeSection === link.id
                      ? 'text-cyan-300 bg-cyan-500/20 border border-cyan-400/30 font-semibold'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
