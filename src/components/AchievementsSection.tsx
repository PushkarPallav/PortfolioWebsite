"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Award } from "lucide-react";
import React from "react";

const achievements = [
  {
    title: "International Finalist",
    description:
      "Developed an advanced extraterrestrial rover shortlisted for the International Rover Challenge (IRC) finals.",
    Icon: Trophy,
    accent: "cyan",
    colorClass: "text-cyan-400",
    bgClass: "bg-cyan-400/10",
    hoverBorderClass: "hover:border-cyan-400/30",
    hoverBgClass: "group-hover:bg-cyan-400/5",
  },
  {
    title: "3rd Rank - Ideathon",
    description:
      "Ideathon by Dept. of CSE (Cyber Security), DSU. Theme: Cyber Security in IoT.",
    Icon: Medal,
    accent: "emerald",
    colorClass: "text-emerald-400",
    bgClass: "bg-emerald-400/10",
    hoverBorderClass: "hover:border-emerald-400/30",
    hoverBgClass: "group-hover:bg-emerald-400/5",
  },
  {
    title: "Robowar Award",
    description:
      "Certificate of Appreciation in Robowar (Electroblitz Club, DSU) for Best Robot Design.",
    Icon: Award,
    accent: "amber",
    colorClass: "text-amber-400",
    bgClass: "bg-amber-400/10",
    hoverBorderClass: "hover:border-amber-400/30",
    hoverBgClass: "group-hover:bg-amber-400/5",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function AchievementsSection() {
  return (
    <section id="achievements" className="w-full py-32 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-4"
          >
            Honours & Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-400 max-w-2xl mx-auto text-lg"
          >
            Recognition in competitive robotics, cybersecurity, and innovation.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8"
        >
          {achievements.map((item, index) => {
            const { Icon } = item;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: -5,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                className={`group relative bg-white/[0.03] backdrop-blur-md border border-white/[0.06] rounded-2xl p-6 md:p-8 transition-colors duration-300 overflow-hidden ${item.hoverBorderClass}`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className={`absolute inset-0 transition-colors duration-500 rounded-2xl ${item.hoverBgClass}`} />
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-2xl ${item.bgClass} flex items-center justify-center mb-6 ${item.colorClass} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-4">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
