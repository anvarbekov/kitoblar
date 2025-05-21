import './globals.css'
import type { Metadata } from 'next'
import { Arvo } from 'next/font/google'
import Providers from '@/components/Providers'
import DrawerButton from '@/components/DrawerButton'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/header/Header1'

const arvo = Arvo({   weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap', });

export const metadata: Metadata = {
  title: 'KITOBLAR',
  description: "Zamonaviy online kitoblar do'koni",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="dim" lang="en">
      <body className={arvo.className}>
        <Providers>
          <div className="drawer">
            <DrawerButton />
            <div className="drawer-content">
              <div className="min-h-screen flex flex-col">
                <Header />
                {children}
                <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                  <p>
                    Mualliflik huquqi © 2025 - Barcha huquqlar "KITOBLAR DO'KONI" tomonidan himoyalangan
                  </p>
                </footer>
              </div>
            </div>
            <div className="drawer-side z-[5]">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <Sidebar />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
