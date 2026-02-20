"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);   // sudah scroll dari top?
  const [isVisible, setIsVisible] = useState(true);       // header visible?
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isAtTop = currentScrollY < 10;

      // Belum scroll sama sekali (di top)
      if (isAtTop) {
        setIsScrolled(false);
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Sudah scroll — tandai isScrolled
      setIsScrolled(true);

      // Scroll DOWN → hide
      if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      }
      // Scroll UP → show (dengan bg white)
      else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 md:py-5 transition-all duration-300 ease-in-out",
        // Translate: show/hide
        isVisible ? "translate-y-0" : "-translate-y-full",
        // Background: transparent di top, white setelah scroll
        isScrolled
          ? "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 md:px-16 flex items-center justify-between">

        {/* Logo */}
        <div className="relative h-8 w-64 md:h-12 xl:w-80">
          <Image
            src={isScrolled ? "/logo/logo1.png" : "/logo/logo2.png"}
            alt="PT Bahtera Prima Perkasa"
            fill
            className="object-contain object-left"
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          <ul className={cn(
            "flex items-center gap-8 font-medium transition-colors duration-300",
            isScrolled ? "text-slate-700" : "text-white/90"
          )}>
            {['Home', 'About Us', 'Services', 'Relations'].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase().replace(' ', '')}`}
                  className={cn(
                    "relative group py-2 transition-colors text-lg",
                    isScrolled ? "hover:text-slate-900" : "hover:text-white"
                  )}
                >
                  {item}
                  <span className={cn(
                    "absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] transition-all duration-300 ease-out",
                    "bg-red-600 opacity-0 shadow-[0_-4px_8px_rgba(220,38,38,0.5)]",
                    "w-0 group-hover:w-full group-hover:opacity-100"
                  )} />
                </Link>
              </li>
            ))}
          </ul>
          <Button
            variant={isScrolled ? "secondary" : "primary"}
            className="ml-4 text-lg transition-all duration-300"
          >
            Contact
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "lg:hidden p-2 rounded-lg transition-colors",
            isScrolled
              ? "text-slate-800 hover:bg-slate-100"
              : "text-white hover:bg-white/10"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white/70 backdrop-blur-md p-6 flex flex-col gap-6 lg:hidden shadow-2xl animate-in fade-in slide-in-from-top-5">
          {['Home', 'About Us', 'Services', 'Relations'].map((item) => (
            <Link
              key={item}
              href="#"
              onClick={() => setIsOpen(false)}
              className="text-black text-lg font-medium border-b border-black/10 pb-3"
            >
              {item}
            </Link>
          ))}
          <Button variant="secondary" className="w-full py-4 text-lg">Contact</Button>
        </div>
      )}
    </header>
  );
}