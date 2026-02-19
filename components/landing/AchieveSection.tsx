"use client";
import { motion } from "framer-motion";
import { Ship, Globe, Users, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const achievements = [
  {
    icon: <Ship className="w-8 h-8 md:w-10 md:h-10" />,
    value: "500+",
    label: "Vessels Handled",
    description: "Annual ship husbandry & agency excellence."
  },
  {
    icon: <Globe className="w-8 h-8 md:w-10 md:h-10" />,
    value: "25+",
    label: "Port Networks",
    description: "Strategic coverage across Indonesian waters."
  },
  {
    icon: <Users className="w-8 h-8 md:w-10 md:h-10" />,
    value: "150+",
    label: "Client Partners",
    description: "Trusted by global shipping & mining companies."
  },
  {
    icon: <Award className="w-8 h-8 md:w-10 md:h-10" />,
    value: "15+",
    label: "Years Experience",
    description: "Decades of logistics & maritime expertise."
  }
];

export default function AchieveSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Parallax-like Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-fixed bg-center"
        style={{ backgroundImage: "url('/images/img4.png')" }}
      >
        {/* Overlay gelap agar teks kontras */}
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[1px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center text-center space-y-4"
            >
              {/* Icon Container with Glow Effect */}
              <div className="relative">
                <div className="absolute inset-0 bg-red-600 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/10 border border-white/20 text-red-500 transition-all duration-300 group-hover:scale-110 group-hover:border-red-500/50 group-hover:bg-red-500/5">
                  {item.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-1">
                <motion.h3 
                  className="text-4xl md:text-5xl font-bold text-white tracking-tight"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: index * 0.1 + 0.2 }}
                >
                  {item.value}
                </motion.h3>
                <p className="text-red-500 font-bold uppercase tracking-widest text-xs md:text-sm">
                  {item.label}
                </p>
                <p className="text-slate-400 text-sm max-w-[200px] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}