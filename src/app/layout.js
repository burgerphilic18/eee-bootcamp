import { Luckiest_Guy } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

const luckiestGuy = Luckiest_Guy({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-luckiest-guy',
});

export const metadata = {
  title: 'EEE Bootcamp',
  description: 'The digital hub for the Electrical and Electronics Engineering batch of IIIT Bhubaneswar.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${luckiestGuy.variable} font-sans bg-yellow-100`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

