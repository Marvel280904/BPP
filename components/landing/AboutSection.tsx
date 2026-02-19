"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

export default function AboutSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="container mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Images */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/images/img3.png"
                alt="PT Bahtera Prima Perkasa Vessel"
                width={600}
                height={700}
                className="object-cover  w-full h-[400px] md:h-[550px]"
              />
            </div>

            {/* Secondary Image Overlay (Collaborative Design) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -right-6 md:-right-12 z-20 w-1/2 overflow-hidden rounded-xl border-8 border-white shadow-xl hidden sm:block"
            >
              <Image
                src="/images/img1.png"
                alt="Logistics Operation"
                width={300}
                height={200}
                className="object-cover h-60 w-full"
              />
            </motion.div>

            {/* Decorative Background Element */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-red-50 rounded-full -z-10" />
          </motion.div>

          {/* Right Side: Professional Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-6"
          >
            <div className="space-y-6">
              <span className="text-red-600 font-bold tracking-widest uppercase text-lg">
                About Us
              </span>
              <h2 className="pt-4 text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                Your Trusted Maritime Gateway
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                Founded on the principles of integrity and operational precision, 
                <strong> PT. Bahtera Prima Perkasa</strong> has emerged as a premier 
                integrated shipping agency and logistics provider in Indonesia.
              </p>
              <p>
                We specialize in comprehensive ship husbandry, bulk transportation, 
                and bespoke logistics solutions. Our deep understanding of local 
                maritime regulations combined with a global service standard ensures 
                that your fleet and cargo are handled with utmost priority.
              </p>
            </div>

            <div className="pt-4">
              <Button variant="secondary" className="py-3 text-lg hover:shadow-red-200 transition-shadow">
                Read Full Profile
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}