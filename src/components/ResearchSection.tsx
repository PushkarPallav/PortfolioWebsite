"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowUpRight } from "lucide-react";

const PUBLICATION_URL =
  "https://www.taylorfrancis.com/chapters/edit/10.1201/9781042017546-35/3d-terrain-mapping-autonomous-navigation-planetary-rovers-rgb-sensor-based-framework-akshat-agarwal-pradeep-kumar-vamsi-krishna-jayavrinda-vrindavanam-hariharan-pushkar-pallav-gopal-sharma-joshi?context=ubx&refId=f740a470-49d8-44bd-bd04-a66c46ab5c24";

const ResearchSection = () => {
  const handleOpenPublication = () => {
    if (typeof window !== "undefined") {
      window.open(PUBLICATION_URL, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="research" className="w-full py-32 bg-[#09090b] relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 mb-6">
            Research & Publications
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Peer-reviewed contributions advancing autonomous systems and robotics.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ y: -4 }}
          className="bg-white/[0.03] backdrop-blur-md border border-white/[0.06] hover:border-cyan-400/30 rounded-3xl p-8 md:p-12 transition-all duration-300 relative group overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]"
        >
          {/* Subtle Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="relative z-10">
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Taylor & Francis",
                "RGB-D Perception",
                "3D Point-Cloud Mapping",
                "SLAM",
                "Planetary Rovers",
                "Autonomous Navigation",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-cyan-500/10 text-cyan-400 text-xs font-mono px-3 py-1 rounded-full border border-cyan-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Paper Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              3D Terrain Mapping and Autonomous Navigation for Planetary Rovers: An RGB-D Sensor-Based Framework
            </h3>

            {/* Publisher */}
            <div className="flex items-center gap-2 text-emerald-400 font-medium mt-4">
              <BookOpen className="w-5 h-5" />
              <span>Taylor & Francis Group (CRC Press)</span>
            </div>

            {/* Research Abstract */}
            <p className="text-zinc-300 mt-6 text-lg leading-relaxed">
              Proposes an end-to-end framework leveraging RGB-D sensor fusion for real-time 3D terrain reconstruction, traversability estimation, and autonomous path planning on unstructured planetary terrains. Integrated and validated in conjunction with the International Rover Challenge (IRC) finals rover system.
            </p>

            {/* Publication External Action Link */}
            <div className="mt-8 flex items-center">
              <a
                href={PUBLICATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleOpenPublication}
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold px-7 py-3.5 rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-cyan-500/30 cursor-pointer select-none group/btn"
              >
                <span>Read Publication on Taylor & Francis</span>
                <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;
