"use client";

import React, { useState, MouseEvent, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SKILL_CATEGORIES = [
  'All',
  'AI / ML & Multimodal',
  'Programming Languages',
  'Backend & Enterprise',
  'Robotics & Embedded',
  'Core CS'
] as const;

type Category = typeof SKILL_CATEGORIES[number];

const SKILLS_DATA: Record<Exclude<Category, 'All'>, string[]> = {
  'AI / ML & Multimodal': [
    'Generative AI', 'Multimodal Vision-Language Models', 'Voice/Speech AI', 
    'Deep Learning (YOLO)', 'Computer Vision', 'RGB-D Sensor Fusion', 
    '3D Mapping', 'NLP / NER', 'Machine Learning'
  ],
  'Programming Languages': ['Python', 'Java', 'C', 'HTML', 'OOP', 'RDBMS'],
  'Backend & Enterprise': [
    'Spring Boot', 'Spring Core', 'IoC Container', 'Dependency Injection', 
    'Bean Lifecycle', 'ApplicationContext', 'Auto-configuration', 'RESTful APIs'
  ],
  'Robotics & Embedded': ['IoT Systems', 'Sensor Integration', 'Switch-Based Embedded Systems'],
  'Core CS': ['Data Structures & Algorithms']
};

// Flatten skills for 'All' view
const allSkills = Object.entries(SKILLS_DATA).flatMap(([category, skills]) => 
  skills.map(skill => ({ skill, category: category as Category }))
);

const SkillCard = ({ skill }: { skill: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const rY = ((mouseX / width) - 0.5) * 20; // max 10 deg
    const rX = ((mouseY / height) - 0.5) * -20;
    
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      layout
      transition={{ duration: 0.3 }}
      style={{
        perspective: 1000,
      }}
      className="group relative"
    >
      <motion.div
        animate={{
          rotateX,
          rotateY,
          scale: 1,
        }}
        whileHover={{
          scale: 1.05,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="h-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 font-mono text-sm text-zinc-300 shadow-xl transition-colors duration-300 group-hover:border-cyan-400/30 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] flex items-center justify-center text-center cursor-default"
      >
        {skill}
      </motion.div>
    </motion.div>
  );
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<Category>('All');

  const filteredSkills = activeTab === 'All' 
    ? allSkills 
    : allSkills.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="w-full py-32 bg-[#09090b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 via-cyan-400 to-emerald-400 mb-6 tracking-tight"
          >
            Skills & Technologies
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            A comprehensive toolkit spanning AI, backend engineering, and embedded systems.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-12 -mx-4 px-4 md:mx-0 md:px-0 justify-start md:justify-center gap-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {SKILL_CATEGORIES.map((category) => {
            const isActive = activeTab === category;
            return (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-300 ${
                  isActive ? 'text-cyan-400' : 'text-zinc-400 hover:text-zinc-200 bg-white/[0.05]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-cyan-500/20 border border-cyan-500/30 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="flex flex-wrap justify-center gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((item) => (
              <SkillCard key={`${item.skill}-${item.category}`} skill={item.skill} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
