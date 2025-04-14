import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from './client-layout';

export const metadata: Metadata = {
  title: 'Data-Driven Hope',
  description: 'Interactive Touchscreen Exhibition',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
