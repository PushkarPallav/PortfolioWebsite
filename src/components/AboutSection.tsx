'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Server, Brain, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transition = 'none';
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transition = 'transform 0.3s ease-out';
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const leftColumnVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const cards = [
    {
      icon: <Server className="w-6 h-6 text-cyan-400" />,
      title: 'Backend Engineering',
      description: 'Java-based development, Spring Boot, RESTful APIs, enterprise application architecture.'
    },
    {
      icon: <Brain className="w-6 h-6 text-emerald-400" />,
      title: 'Artificial Intelligence & Deep Learning',
      description: 'Machine Learning, Deep Learning architectures, Neural Networks, Computer Vision.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-cyan-400" />,
      title: 'Generative AI & Multimodal Tech',
      description: 'Vision-Language models, speech processing, and autonomous intelligent agents.'
    }
  ];

  return (
    <section id="about" className="w-full py-32 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
            About Me
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Bridging scalable enterprise backend systems with cutting-edge artificial intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT Column */}
          <motion.div
            variants={leftColumnVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-zinc-300 text-lg leading-relaxed space-y-6"
          >
            <p>
              I am an engineer driven by building robust, high-performance systems and intelligent architectures. My core interest lies in backend engineering with Java-based programming and the Spring Boot framework—designing resilient APIs, modular architectures, and efficient data pipelines.
            </p>
            <p>
              Alongside backend systems, I have a deep fascination with the frontier of Artificial Intelligence: exploring Generative AI, Deep Learning, Machine Learning, and Computer Vision to build intelligent solutions that solve complex real-world problems.
            </p>

            <div className="pt-2">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md hover:border-cyan-400/40 transition-colors shadow-lg">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-cyan-400/40 flex-shrink-0 shadow-md">
                  <img
                    src="/pushkar.png"
                    alt="Pushkar Pallav"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-white font-semibold text-base">Pushkar Pallav</h4>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">Active Researcher</span>
                  </div>
                  <p className="text-cyan-400 text-xs font-mono mt-0.5">B.Tech CSE (AI & ML) • Dayananda Sagar University</p>
                  <div className="flex items-center gap-2 mt-1.5 text-xs text-zinc-400">
                    <span>CGPA: <strong className="text-emerald-400 font-mono">8.77</strong></span>
                    <span className="text-zinc-600">•</span>
                    <span className="truncate">Bengaluru, India</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col gap-6"
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="group relative bg-white/[0.03] backdrop-blur-md border border-white/[0.06] rounded-2xl p-6 hover:border-cyan-400/30 hover:shadow-[0_4px_30px_rgba(34,211,238,0.1)] cursor-default transition-colors duration-300"
                style={{
                  transformStyle: 'preserve-3d',
                  willChange: 'transform'
                }}
              >
                <div className="flex items-start gap-4" style={{ transform: 'translateZ(20px)' }}>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">{card.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
