import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ANDRE - PORTFOLIO',
  description: 'Andre Eka Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900">{children}</body>
    </html>
  )
}
