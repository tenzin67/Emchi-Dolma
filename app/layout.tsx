import type { Metadata } from 'next';
import '../src/styles/global.css';
import '../src/styles/animations.css';
import '../src/styles/next.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://emchidolma.com'),
  title: { default: 'Emchi Dolma — Tibetan Sorig & Wellness', template: '%s | Emchi Dolma' },
  description: 'Emchi Tsundu Dolma — Tibetan Medicine (Sowa Rigpa) & Ayurveda Consultant in Werribee, VIC. Tibetan Sorig, Ayurveda & Wellness.',
  openGraph: { type: 'website', locale: 'en_AU', images: ['/images/medicine-buddha.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a href="#main-content" className="skip-link">Skip to main content</a><Navbar /><main id="main-content">{children}</main><Footer /></body></html>;
}
