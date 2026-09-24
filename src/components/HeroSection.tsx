'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';

const ROLES = [
  'AI & ML Engineer',
  'Backend Developer'
];

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const currentRole = ROLES[roleIndex];
    
    if (isDeleting) {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(prev => prev.slice(0, -1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    } else {
      if (displayText.length < currentRole.length) {
        timer = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#09090b] text-white pt-28 md:pt-36 pb-20">
      <ParticleCanvas />
      
      <div className="relative z-10 max-w-4xl px-4 flex flex-col items-center text-center">
        {/* Profile Avatar Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-6 flex flex-col items-center group"
        >
          {/* Neon Glow backdrop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-r from-cyan-500/20 via-emerald-500/20 to-cyan-500/20 blur-2xl group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          {/* Avatar Container */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-emerald-400 to-cyan-500 shadow-[0_0_50px_rgba(34,211,238,0.2)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-zinc-950 border-2 border-black/60 flex items-center justify-center">
              <img
                src="/pushkar.png"
                alt="Pushkar Pallav"
                className="w-full h-full object-cover object-[center_18%] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Active Status Badge */}
          <div className="mt-3 flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-zinc-950/90 border border-emerald-500/40 text-emerald-400 text-xs font-mono backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-3.5" />
            <span>Open to Opportunities</span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-gradient"
        >
          Pushkar Pallav
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="h-10 text-xl md:text-2xl font-medium text-emerald-400 mb-8 font-mono"
        >
          {displayText}
          <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed"
        >
          Specializing in Java, Spring Boot, and scalable backend architectures, alongside Machine Learning and Deep Learning solutions.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <button 
            onClick={() => scrollTo('skills')}
            className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-full px-8 py-4 font-semibold transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/20"
          >
            Explore Skills & Projects
          </button>
          
          <button 
            onClick={() => scrollTo('connect')}
            className="border border-cyan-500/50 hover:bg-cyan-500/10 text-white rounded-full px-8 py-4 font-semibold transition-colors backdrop-blur-sm"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
