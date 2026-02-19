"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Zap, Anchor, Headphones, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const reasons = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Uncompromising Safety",
    description: "We adhere to the highest international maritime safety standards to protect your cargo and fleet.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
    tag: "ISO 9001 Certified",
    accent: "from-red-600/20 to-orange-500/10",
    tagColor: "bg-red-50 text-red-600 border-red-100",
    iconBg: "bg-red-600"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Operational Efficiency",
    description: "Streamlined processes and local expertise ensure the fastest turnaround times in every port.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    tag: "30% Faster Turnaround",
    accent: "from-amber-500/20 to-yellow-400/10",
    tagColor: "bg-amber-50 text-amber-700 border-amber-100",
    iconBg: "bg-amber-500"
  },
  {
    icon: <Anchor className="w-6 h-6" />,
    title: "Comprehensive Network",
    description: "Strategic presence across all major Indonesian ports providing seamless end-to-end logistics.",
    image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800&q=80",
    tag: "50+ Port Coverage",
    accent: "from-blue-600/20 to-cyan-400/10",
    tagColor: "bg-blue-50 text-blue-600 border-blue-100",
    iconBg: "bg-blue-600"
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "24/7 Dedicated Support",
    description: "Real-time monitoring and proactive communication for complete peace of mind during voyages.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    tag: "Always Available",
    accent: "from-emerald-500/20 to-teal-400/10",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
    iconBg: "bg-emerald-600"
  }
];

export default function ChooseUsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reasons.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const active = reasons[activeIndex];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 order-2 lg:order-1"
          >
            <div className="space-y-4">
              <h4 className="text-red-600 font-bold tracking-widest uppercase text-lg">
                Why Choose Us
              </h4>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                Setting the Standard in <br />
                <span className="text-slate-500">Maritime Excellence</span>
              </h2>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
              PT. Bahtera Prima Perkasa combines decades of experience with innovative
              logistics technology to provide agency services that are not just reliable,
              but transformative for your business operations.
            </p>

            <button className="group flex items-center gap-2 text-red-600 font-bold hover:gap-4 transition-all duration-300">
              View Our Complete Service Standards
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Right Side: Layered Card */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center">
            {/* Wrapper dengan padding-bottom untuk ruang badge overlay */}
            <div className="relative w-full max-w-md pb-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 30, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 1.02 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  {/* LAYER 1: Image */}
                  <div className="rounded-[2rem] overflow-hidden w-full aspect-[4/3] shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
                    <motion.img
                      key={active.image}
                      src={active.image}
                      alt={active.title}
                      initial={{ scale: 1.08 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 6, ease: "linear" }}
                      className="w-full h-full object-cover"
                    />
                    {/* Dark gradient di bawah agar badge overlay terbaca */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent rounded-[2rem]" />
                  </div>

                  {/* LAYER 2: Badge Card */}
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.45, ease: "easeOut" }}
                    className="absolute -bottom-14 left-4 right-4"
                  >
                    <div className="bg-white/90 rounded-[1rem] shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-slate-100 p-5 flex items-start gap-4">
                      {/* Icon */}
                      <div className={cn(
                        "w-11 h-11 rounded-xl flex items-center justify-center text-white shrink-0 shadow-md",
                        active.iconBg
                      )}>
                        {active.icon}
                      </div>
                      {/* Text */}
                      <div className="space-y-1 min-w-0">
                        <h3 className="text-base font-bold text-slate-900 leading-snug">
                          {active.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                          {active.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}