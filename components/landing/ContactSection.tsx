"use client";
import { motion, Variants } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "info@bahtera-prima.co.id",
    sub: "We respond within 24 business hours"
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Telephone",
    value: "+62 21 6100-3321",
    sub: "Mon – Fri, 08:00 – 17:00 WIB"
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Office Address",
    value: "Jl. Pelabuhan Raya No. 45, Tanjung Priok",
    sub: "Jakarta Utara, DKI Jakarta 14310"
  }
];

const containerVariants:Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants:Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function ContactSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-2 items-start">

          {/* ── Left Side ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
            className="space-y-10"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-red-600 font-bold tracking-widest uppercase text-lg">
                Contact Us
              </h4>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Let's Start a <span className="text-slate-400">Conversation</span>
              </h2>
              <p className="text-slate-500 text-base leading-relaxed max-w-lg">
                Have a question about our services or need a custom logistics solution?
                Our team is ready to assist you.
              </p>
            </motion.div>

            {/* Divider */}
            <motion.div variants={itemVariants} className="w-12 h-0.5 bg-red-500" />

            {/* Contact Info List */}
            <motion.div variants={containerVariants} className="space-y-7">
              {contactInfo.map((item) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  className="flex items-start gap-4 group"
                >
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-red-100 group-hover:scale-105 transition-transform duration-300">
                    {item.icon}
                  </div>
                  {/* Text */}
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-slate-900 font-semibold text-sm">{item.value}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right Side: Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-4 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">

              {/* Form heading */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900">Send Us a Message</h3>
                <p className="text-slate-400 text-sm mt-1">Fill in the form below and we'll get back to you shortly.</p>
              </div>

              {/* Form — display only */}
              <div className="space-y-5">

                {/* Row 1: First + Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      First Name
                    </label>
                    <input
                      type="text"
                      disabled
                      placeholder="e.g. John"
                      className="w-full px-4 py-3 rounded-md border border-slate-200 bg-white text-slate-900 text-sm placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-400 transition-all duration-200 cursor-not-allowed"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Last Name
                    </label>
                    <input
                      type="text"
                      disabled
                      placeholder="e.g. Doe"
                      className="w-full px-4 py-3 rounded-md border border-slate-200 bg-white text-slate-900 text-sm placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-400 transition-all duration-200 cursor-not-allowed"
                    />
                  </div>
                </div>

                {/* Row 2: Phone + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      disabled
                      placeholder="e.g. +62 812 0000"
                      className="w-full px-4 py-3 rounded-md border border-slate-200 bg-white text-slate-900 text-sm placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-400 transition-all duration-200 cursor-not-allowed"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      disabled
                      placeholder="e.g. john@company.com"
                      className="w-full px-4 py-3 rounded-md border border-slate-200 bg-white text-slate-900 text-sm placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-400 transition-all duration-200 cursor-not-allowed"
                    />
                  </div>
                </div>

                {/* Row 3: Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    disabled
                    rows={5}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 rounded-md border border-slate-200 bg-white text-slate-900 text-sm placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-400 transition-all duration-200 resize-none cursor-not-allowed"
                  />
                </div>

                {/* Submit Button */}
                <button
                  disabled
                  className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl transition-colors duration-300 shadow-lg shadow-red-100 cursor-not-allowed opacity-80"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>

                <p className="text-center text-xs text-slate-400">
                  By submitting, you agree to our{" "}
                  <span className="text-red-500 font-medium cursor-pointer hover:underline">Privacy Policy</span>.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}