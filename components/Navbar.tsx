'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import BookingModal from './BookingModal';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const active = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(href));

  const handleBookingClick = () => {
    setOpen(false);
    setModalOpen(true);
  };

  return (
    <>
      <header className="navbar">
        <div className="nav-inner container">
          <Link href="/" className="nav-logo" aria-label="Emchi Dolma — Tibetan Sorig">
            <img
              src="/images/logo-horizontal.png"
              alt="Emchi Dolma — Tibetan Sorig, Ayurveda & Wellness"
              className="nav-logo-image"
              width={180}
              height={60}
            />
          </Link>
          <nav className="nav-desktop" aria-label="Main navigation">
            <ul>
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`nav-link ${active(link.href) ? 'active' : ''}`}
                    aria-current={active(link.href) ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            className="nav-cta"
            onClick={handleBookingClick}
            aria-haspopup="dialog"
          >
            Book Consultation
          </button>
          <button
            className={`hamburger ${open ? 'open' : ''}`}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
        <div id="mobile-menu" className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
          <nav aria-label="Mobile navigation">
            <ul>
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`mobile-link ${active(link.href) ? 'active' : ''}`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  className="mobile-cta"
                  onClick={handleBookingClick}
                >
                  Book Consultation
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
