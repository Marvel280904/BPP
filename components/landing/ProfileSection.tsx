"use client";
import { motion, Variants } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const profiles = [
  {
    name: "Budi Santoso",
    title: "Chief Executive Officer",
    tenure: "Est. 2008",
    bio: "Leading PT. Bahtera Prima Perkasa for over 15 years with a vision to establish the company as the foremost leader in Indonesia's maritime industry.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
    linkedin: "#",
    email: "budi@bahtera.co.id",
    index: "01"
  },
  {
    name: "Andi Wijaya",
    title: "Director of Operations",
    tenure: "Est. 2011",
    bio: "A logistics expert with a proven track record of optimizing operations across more than 30 major ports throughout the Indonesian archipelago.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
    linkedin: "#",
    email: "andi@bahtera.co.id",
    index: "02"
  },
  {
    name: "Sari Dewi Kusuma",
    title: "Chief Financial Officer",
    tenure: "Est. 2013",
    bio: "A Chartered Financial Analyst specializing in maritime and international trade sectors, ensuring the company's financial foundation remains strong and resilient.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    linkedin: "#",
    email: "sari@bahtera.co.id",
    index: "03"
  },
  {
    name: "Hendra Prabowo",
    title: "Director of Business Development",
    tenure: "Est. 2015",
    bio: "Spearheading the expansion of strategic partnerships across Southeast Asia, unlocking new business opportunities at every international port of call.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80",
    linkedin: "#",
    email: "hendra@bahtera.co.id",
    index: "04"
  }
];

const cardVariants:Variants = {
  hidden: { opacity: 0, y: 40 },
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

export default function ProfileSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-16">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h4 className="text-red-600 font-bold tracking-widest uppercase text-lg mb-4">
            Our Leadership
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Guided by <br />
            <span className="text-slate-400">Industry's Finest Professionals</span>
          </h2>
        </motion.div>

        {/* Profile Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((person, i) => (
            <motion.div
              key={person.index}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              className="group relative flex flex-col bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[3/4] bg-slate-100">
                <motion.img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />

                {/* Tenure badge */}
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-slate-600 border border-white/50">
                    {person.tenure}
                  </span>
                </div>

                {/* Social links — appear on hover */}
                <div className="absolute bottom-4 right-4 flex flex-col gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <a
                    href={person.linkedin}
                    className="w-9 h-9 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-slate-700 hover:text-blue-600 hover:bg-white transition-colors shadow-sm"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${person.email}`}
                    className="w-9 h-9 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-slate-700 hover:text-red-600 hover:bg-white transition-colors shadow-sm"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-1.5 flex-1">
                {/* Thin red accent line */}
                <div className="w-8 h-0.5 bg-red-500 mb-1 transition-all duration-500 group-hover:w-14" />

                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {person.name}
                </h3>
                <p className="text-xs font-semibold text-red-600 uppercase tracking-wider">
                  {person.title}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mt-1">
                  {person.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}