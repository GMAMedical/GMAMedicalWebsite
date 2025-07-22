import type { Metadata } from 'next'
import './globals.css';
import ConfigureAmplify from '@/utils/configureAmplify';
import Header from './Components/Header'
import Footer from './Components/Footer'

export const metadata: Metadata = {
  title: 'GMA Medical',
  description: 'GMA Medical - Premuim Medical Consulting',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">

        <Header />

        <main className="flex-grow">
          <ConfigureAmplify />
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}