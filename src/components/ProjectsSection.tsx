'use client';

import { useState, useRef, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

import { projects, Project } from '@/data/projects';

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.5 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="group flex flex-col h-full bg-white/[0.03] backdrop-blur-md border border-white/[0.06] rounded-2xl p-6 md:p-8 transition-colors duration-300 hover:border-cyan-400/20 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"
      >
        <div className="flex flex-wrap gap-2 mb-4" style={{ transform: 'translateZ(30px)' }}>
          {project.tags.map(tag => (
            <span key={tag} className="bg-cyan-500/10 text-cyan-400 text-xs font-mono px-2.5 py-1 rounded-full border border-cyan-500/20">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold text-white mt-4" style={{ transform: 'translateZ(40px)' }}>{project.title}</h3>
        <p className="text-zinc-400 text-sm mt-3 leading-relaxed flex-grow" style={{ transform: 'translateZ(20px)' }}>
          {project.description || project.summary}
        </p>
        
        <div className="flex items-center gap-4 mt-6 pt-4 border-t border-white/[0.06]" style={{ transform: 'translateZ(30px)' }}>
          {project.github && (
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.1] text-white text-sm px-4 py-2 rounded-full border border-white/[0.1] transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              View on GitHub
            </a>
          )}
          <button 
            onClick={onOpen}
            className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors ml-auto"
          >
            View Details
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="w-full py-32 bg-[#09090b] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white to-zinc-400 bg-clip-text text-transparent mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg md:text-xl max-w-2xl"
          >
            Innovative solutions spanning AI, IoT, and automation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              onOpen={() => setSelectedProject(project)} 
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full max-w-2xl bg-[#0f0f11] border-l border-white/[0.06] z-50 overflow-y-auto"
            >
              <div className="p-8 h-full flex flex-col">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-8 right-8 p-2 rounded-full hover:bg-white/[0.06] text-zinc-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 pr-12">
                  {selectedProject.title}
                </h2>
                
                <div className="prose prose-invert max-w-none">
                  <h3 className="text-lg font-semibold text-white mb-3">Overview</h3>
                  <p className="text-zinc-400 leading-relaxed mb-8">
                    {selectedProject.description || selectedProject.summary}
                  </p>
                  
                  <h3 className="text-lg font-semibold text-white mb-4">Tech Stack & Tags</h3>
                  <ul className="space-y-3">
                    {selectedProject.tags.map(tag => (
                      <li key={tag} className="flex items-center gap-3 text-zinc-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span className="font-mono text-sm">{tag}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {selectedProject.github && (
                    <div className="mt-10 pt-8 border-t border-white/[0.06]">
                      <a 
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-black hover:bg-zinc-200 font-medium px-6 py-3 rounded-full transition-colors"
                      >
                        <GithubIcon className="w-5 h-5" />
                        View Source Code
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
