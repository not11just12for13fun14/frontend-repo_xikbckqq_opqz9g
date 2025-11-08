import { useEffect, useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldDark = stored ? stored === 'dark' : prefersDark;
    setDark(shouldDark);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  const toggleTheme = () => setDark((d) => !d);

  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40 border-b border-black/5 dark:border-white/10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-gray-900 dark:text-white">
            <span className="text-blue-600 dark:text-emerald-400">S</span>anketh
          </a>
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-emerald-400 transition"
              >
                {l.label}
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-emerald-400 dark:to-cyan-400 w-0 group-hover:w-full"
                  whileHover={{ width: '100%' }}
                />
              </a>
            ))}
            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/70 dark:bg-white/10 border border-black/5 dark:border-white/10 text-gray-800 dark:text-gray-100 hover:scale-105 transition"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/70 dark:bg-white/10 border border-black/5 dark:border-white/10 text-gray-800 dark:text-gray-100"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setOpen((o) => !o)} aria-label="Open menu" className="p-2">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
        {open && (
          <div className="md:hidden px-4 pb-4 space-y-2 bg-white/80 dark:bg-black/40 backdrop-blur border-t border-black/5 dark:border-white/10">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-gray-800 dark:text-gray-100">
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
