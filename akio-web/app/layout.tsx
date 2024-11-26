import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Personal Website',
  description: 'A clean and modern personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col sm:flex-row`}>
        <Navbar />
        <main className="flex-grow sm:ml-48 p-4 sm:p-6 lg:p-8 mt-16 sm:mt-0">{children}</main>
      </body>
    </html>
  )
}

