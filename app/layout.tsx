import type { Metadata } from 'next';
import '../src/styles/global.css';
import '../src/styles/animations.css';
import '../src/styles/next.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://emchidolma.com'),
  title: { default: 'EmchiD — Tibetan Sorig & Wellness', template: '%s | EmchiD' },
  description: 'Emchi Tsundu Dolma — Tibetan Medicine (Sowa Rigpa) & Ayurveda Consultant in Werribee, VIC. Tibetan Sorig, Ayurveda & Wellness.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/logo.png', sizes: '1024x1024', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: { type: 'website', locale: 'en_AU', images: ['/images/medicine-buddha.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a href="#main-content" className="skip-link">Skip to main content</a><Navbar /><main id="main-content">{children}</main><Footer /></body></html>;
}
