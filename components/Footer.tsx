import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Link href="/" className="footer-logo" aria-label="EmchiD — Tibetan Sorig">
              <img
                src="/images/logo.png"
                alt="EmchiD Emblem"
                className="footer-logo-circle"
                width={56}
                height={56}
              />
              <div className="footer-brand-text">
                <span className="footer-logo-title">EmchiD</span>
                <span className="footer-logo-sub">Tibetan Sorig & Wellness</span>
              </div>
            </Link>
            <p className="footer-tagline">Ancient Wisdom for Modern Healing</p>
            <p className="footer-description">
              Emchi Tsundu Dolma brings the profound healing wisdom of Sowa Rigpa — Tibetan Medicine — to Werribee and Melbourne, Australia.
            </p>
          </div>
          <div className="footer-col">
            <h2>Quick Links</h2>
            <ul>
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h2>Treatments</h2>
            <ul>
              {['Pulse Reading', 'Kanye', 'Cupping', 'Acupuncture', 'Moxibustion', 'Shirodhara', 'Nasya', 'Skin Detox'].map((service) => (
                <li key={service}>
                  <Link href="/services">{service}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h2>Contact & Location</h2>
            <address>
              <p>📞 <a href="tel:+61458494785">0458 494 785</a></p>
              <p>📍 Werribee, Victoria, Australia</p>
              <p>🏛 Monthly at Tara Institute</p>
              <p>⏰ By appointment only</p>
            </address>
            <Link href="/contact#book" className="footer-cta">Book Consultation</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} EmchiD · Tibetan Sorig. All rights reserved.</p>
          <p>Tibetan Medicine is a complementary practice. Always consult your healthcare provider.</p>
        </div>
      </div>
    </footer>
  );
}
