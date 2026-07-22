'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'Accueil', href: '/' },
  { label: 'Nos Missions', href: '/nos-missions' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Nos Projets', href: '/nos-projets' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm'
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo_2- png.png"
              alt="Fondation Fanta Sy"
              width={411}
              height={607}
              priority
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                    active
                      ? 'text-[#1e3a8a] bg-[#1e3a8a]/8'
                      : 'text-slate-700 hover:text-[#1e3a8a] hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/faire-un-don"
              className="ml-3 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#15803d] to-[#0f6b32] hover:from-[#0f6b32] hover:to-[#0a5226] transition-all shadow-md shadow-[#15803d]/25 hover:shadow-lg hover:-translate-y-0.5"
            >
              ❤ Faire un don
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <motion.span animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }} className="block h-0.5 bg-current rounded origin-center transition-all" />
              <motion.span animate={{ opacity: mobileOpen ? 0 : 1 }} className="block h-0.5 bg-current rounded" />
              <motion.span animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }} className="block h-0.5 bg-current rounded origin-center transition-all" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-200 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2.5 text-sm font-semibold text-slate-700 hover:text-[#1e3a8a] hover:bg-slate-50 rounded-lg"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="/faire-un-don"
                  className="block w-full text-center px-5 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#15803d] to-[#0f6b32]"
                >
                  ❤ Faire un don
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
