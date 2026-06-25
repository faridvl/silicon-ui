import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Silicon Builder — AI Landing Page Generator',
  description: 'Genera landing pages profesionales basadas en el design system Silicon usando IA',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  )
}
