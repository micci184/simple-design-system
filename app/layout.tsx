import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Simple Design System',
  description: 'Design system synced with Figma tokens',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
