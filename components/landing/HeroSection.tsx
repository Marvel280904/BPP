"use client";
import { motion, Variants } from "framer-motion";
import { Button } from "../ui/button";

export default function HeroSection() {
  // Definisi varian animasi untuk container dan anak-anaknya (stagger effect)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Memberikan jeda antar elemen teks
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center pt-20 overflow-hidden">
      {/* Background with Zoom Animation */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-[center_left_25%] md:bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero_bg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </motion.div>

      <div className="container mx-auto px-6 md:px-16 z-10">
        <motion.div 
          className="max-w-4xl space-y-6 md:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-center md:text-left text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]"
          >
            Empowering Your <br className="hidden md:block" /> 
            <span className="text-red-600">Supply Chain</span> at Sea
          </motion.h1>
          
          {/* Animated Description */}
          <motion.p 
            variants={itemVariants}
            className="text-center md:text-left text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
          >
            Leading the way in professional ship agency and bulk transportation. 
            We bridge the gap between global waters and your business goals with precision and safety.
          </motion.p>

          {/* Animated Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4 items-center md:items-start"
          >
            <Button variant="secondary" className="w-full sm:w-auto px-10 py-4 text-base md:text-lg">
              Explore Our Services
            </Button>
            <Button variant="primary" className="w-full sm:w-auto px-10 py-4 text-base md:text-lg">
              Watch Company Profile
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Bottom Glow Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
    </section>
  );
}