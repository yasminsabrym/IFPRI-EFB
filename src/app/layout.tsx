
import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Data-Driven Hope',
  description: 'Interactive touchscreen exhibition showcasing the impact of nutrition-sensitive interventions.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    orientation: 'portrait',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="video-background">
          <video autoPlay loop muted className="video-foreground">
            <source src="https://efb.vps-dev.co.uk/wp-content/uploads/2025/04/thg-video-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="green-overlay"></div>
        {children}
      </body>
    </html>
  );
}
