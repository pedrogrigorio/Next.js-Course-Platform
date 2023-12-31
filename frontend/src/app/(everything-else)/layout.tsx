import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import '../globals.css'
import { ReactNode } from 'react'
import Sidemenu from '@/components/layout/Sidemenu'
import Topbar from '@/components/layout/Topbar'
import { Providers } from '../providers'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'videoplatform',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${poppins.variable} ${inter.variable} font-poppins text-white`}
      >
        <Providers>
          <main className="flex min-h-screen">
            <div className="hidden md:block">
              <Sidemenu />
            </div>

            <div className="relative flex-1 overflow-hidden bg-[#191820]">
              <div className="absolute inset-0 z-10 flex flex-col overflow-y-auto">
                <Topbar />
                {children}
              </div>

              <div
                className="absolute inset-0 z-0"
                style={{
                  background: `linear-gradient(to bottom right, #322F41 4%, #191820 29%) bottom right / 50% 51% no-repeat,
                linear-gradient(to bottom left, #322F41 4%, #191820 29%) bottom left / 50.5% 51% no-repeat,
                linear-gradient(to top left, #322F41 4%, #191820 29%) top left / 50.5% 50% no-repeat,
                linear-gradient(to top right, #322F41 4%, #191820 29%) top right / 50% 50% no-repeat`,
                  backgroundColor: '#191820',
                  transform:
                    'rotate(-5deg) scale(1.7) translateY(-27%) translateX(-4%)',
                }}
              />
            </div>
          </main>
        </Providers>
      </body>
    </html>
  )
}
