"use client";

import { motion } from "framer-motion";
import { Landmark, Users } from "lucide-react";
import React from "react";

const leadershipRoles = [
  {
    title: "Treasurer, IEEE CIS Student Chapter, DSU",
    period: "May 2024 - Dec 2024",
    description:
      "Managed financial transactions, bill of materials (BOM), and budget approvals for technical events.",
    Icon: Landmark,
  },
  {
    title: "Treasurer, Yantrove (Dept. of CSE-AIML, DSU)",
    period: "Sep 2023 - Dec 2024",
    description:
      "Oversaw fiscal planning and budget allocation for university AI/ML club initiatives.",
    Icon: Users,
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

export default function LeadershipSection() {
  return (
    <section id="leadership" className="w-full py-32 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-4"
          >
            Leadership & Responsibility
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-400 max-w-2xl mx-auto text-lg"
          >
            Driving impact through fiscal stewardship and organizational leadership.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {leadershipRoles.map((role, index) => {
            const { Icon } = role;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  rotateX: 5,
                  rotateY: -5,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                className="group relative bg-white/[0.03] backdrop-blur-md border border-white/[0.06] hover:border-emerald-400/20 rounded-2xl p-6 md:p-8 transition-colors duration-300 overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 bg-emerald-400/0 group-hover:bg-emerald-400/5 transition-colors duration-500 rounded-2xl" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-emerald-400/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {role.title}
                  </h3>
                  <div className="font-mono text-cyan-400 text-sm mb-4">
                    {role.period}
                  </div>
                  <p className="text-zinc-400 leading-relaxed">
                    {role.description}
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
