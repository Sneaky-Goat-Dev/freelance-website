'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';

const navLinks = [
  { href: '/', label: 'Home', nav: 'home' },
  { href: '/work', label: 'Work', nav: 'work' },
  { href: '/services', label: 'Services', nav: 'services' },
  { href: '/process', label: 'Process', nav: 'process' },
  { href: '/about', label: 'About', nav: 'about' },
];

export default function Navigation() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="brand">
          <span>Adam Berger</span>
          <span className="dot"></span>
        </Link>

        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
        </button>

        <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? 'active' : ''}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>
              </svg>
            ) : (
              <svg className="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>
              </svg>
            )}
          </button>

          <Link href="/contact" className="nav-cta" onClick={() => setMobileOpen(false)}>
            Start a project
          </Link>
        </div>
      </div>
    </nav>
  );
}
