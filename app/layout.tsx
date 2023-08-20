import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './utils/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Agri Africa | Home',
  description: 'Agri Africa',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header />
        {children}
      </body>
    </html>
  )
}
