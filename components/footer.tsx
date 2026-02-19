import { Facebook, Instagram, Linkedin, Youtube, Anchor } from "lucide-react";

const footerLinks = [
  {
    heading: "Company",
    links: ["About Us", "Our Services", "Investor Relations", "Contact Us"]
  },
  {
    heading: "Services",
    links: ["Ship Agency", "Port Clearance", "Cargo Handling", "Crew Management"]
  },
];

const socialLinks = [
  { icon: <Facebook className="w-4 h-4" />, label: "Facebook", href: "#" },
  { icon: <Instagram className="w-4 h-4" />, label: "Instagram", href: "#" },
  { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn", href: "#" },
  { icon: <Youtube className="w-4 h-4" />, label: "YouTube", href: "#" }
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">

      {/* Main Footer */}
      <div className="container mx-auto px-6 md:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left: Logo + About */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/logo/logo2.png"
                alt="PT. Bahtera Prima Perkasa"
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Description */}
            <p className="text-slate-400 text-md leading-relaxed max-w-xs">
              A trusted maritime shipping agency with over 15 years of experience
              providing end-to-end port and logistics solutions across major
              Indonesian waters.
            </p>

            {/* Social Icons */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                Follow Us
              </p>
              <div className="flex items-center gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-red-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Nav Links */}
          <div className="lg:col-span-8 grid grid-cols-2 gap-8">
            {footerLinks.map((col) => (
              <div key={col.heading} className="space-y-4">
                <h4 className="text-white text-lg font-bold tracking-wide">
                  {col.heading}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-md text-slate-400 hover:text-white transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-6 md:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-md text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} PT. Bahtera Prima Perkasa. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-md text-slate-500 hover:text-white transition-colors duration-200">
              Terms & Conditions
            </a>
            <span className="text-slate-700 text-md">|</span>
            <a href="#" className="text-md text-slate-500 hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}