"use client";
import { motion, Variants } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "PT. Bahtera Prima Perkasa has completely transformed how we manage our fleet operations across Indonesian waters. Their responsiveness and local expertise are second to none.",
    name: "James Hartwell",
    title: "Fleet Manager, Pacific Bulk Carriers",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    rating: 5,
    index: "01"
  },
  {
    quote: "We've worked with many ship agents across Southeast Asia, but Bahtera's professionalism and 24/7 support truly sets them apart. Every port call is seamless and stress-free.",
    name: "Mei Ling Chen",
    title: "Head of Logistics, Sino Maritime Group",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    rating: 5,
    index: "02"
  },
  {
    quote: "Their comprehensive port network gave us the confidence to expand our routes into eastern Indonesia. A genuinely reliable partner for any serious shipping operator.",
    name: "Rajan Mehta",
    title: "CEO, IndoShip Ventures",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    rating: 5,
    index: "03"
  }
];

const cardVariants:Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export default function TestiSection() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-16">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h4 className="text-red-600 font-bold tracking-widest uppercase text-lg mb-4">
            Testimonial
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight max-w-3xl mx-auto">
            Trusted by Industry Leaders Across the Globe
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.index}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              className="group relative flex flex-col bg-white rounded-2xl border border-slate-100 p-8 hover:border-slate-200 hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)] hover:scale-105 transition-all duration-500"
            >
              {/* Top row: quote mark + stars */}
              <div className="flex items-start justify-between mb-6">
                {/* Large quote mark */}
                <div className="flex gap-0.5">
                  <span className="text-red-500 text-5xl font-serif leading-none select-none">"</span>
                </div>

                {/* Star rating */}
                <div className="flex gap-0.5 pt-1">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              {/* Quote text */}
              <p className="text-slate-600 text-md leading-relaxed italic flex-1 mb-8">
                "{t.quote}"
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-slate-200 mb-6" />

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-slate-100 group-hover:ring-red-100 transition-all duration-300"
                  />
                  {/* Online dot */}
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full" />
                </div>
                <div>
                  <p className="text-md font-bold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-400 leading-snug mt-0.5">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-slate-400 text-md"
        >
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="font-semibold text-slate-700">4.9 / 5.0</span>
            <span>Average Rating</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-slate-200" />
          <span><span className="font-semibold text-slate-700">200+</span> Satisfied Clients</span>
          <div className="hidden sm:block w-px h-4 bg-slate-200" />
          <span><span className="font-semibold text-slate-700">15+</span> Years of Trust</span>
        </motion.div>

      </div>
    </section>
  );
}