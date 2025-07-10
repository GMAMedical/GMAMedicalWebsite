import type { Metadata } from 'next'
import './globals.css';

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
      <body>
        {children}
      </body>
    </html>
  )
}
