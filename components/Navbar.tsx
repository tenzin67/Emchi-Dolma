'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [{ href: '/', label: 'Home' }, { href: '/services', label: 'Services' }, { href: '/about', label: 'About' }, { href: '/contact', label: 'Contact' }];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(href));
  return <header className="navbar">
    <div className="nav-inner container">
      <Link href="/" className="nav-logo" aria-label="TibetanSorig — Home"><span className="logo-icon">☸</span><span className="logo-text">TibetanSorig</span></Link>
      <nav className="nav-desktop" aria-label="Main navigation"><ul>{links.map((link) => <li key={link.href}><Link href={link.href} className={`nav-link ${active(link.href) ? 'active' : ''}`} aria-current={active(link.href) ? 'page' : undefined}>{link.label}</Link></li>)}</ul></nav>
      <Link href="/contact" className="nav-cta">Book Consultation</Link>
      <button className={`hamburger ${open ? 'open' : ''}`} aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}><span className="bar" /><span className="bar" /><span className="bar" /></button>
    </div>
    <div id="mobile-menu" className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden={!open}><nav aria-label="Mobile navigation"><ul>{links.map((link) => <li key={link.href}><Link href={link.href} className={`mobile-link ${active(link.href) ? 'active' : ''}`} onClick={() => setOpen(false)}>{link.label}</Link></li>)}<li><Link href="/contact" className="mobile-cta" onClick={() => setOpen(false)}>Book Consultation</Link></li></ul></nav></div>
  </header>;
}
