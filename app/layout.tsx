import type { Metadata } from 'next'
import './globals.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Amplify } from 'aws-amplify'
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs, { ssr: true })

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
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}