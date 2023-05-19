import './globals.css'

import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import SessionProvider from '@/components/SessionProvider'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import Login from '@/components/Login'
import ClientProvider from '@/components/ClientProvider'
import { Bars3Icon } from '@heroicons/react/24/solid'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ChatGPT Clone by Vinit',
  description: 'ChatGPT in Next JS',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)



  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          {
            !session ? (
              <Login />
            ) : (
              <div>

                <div className="flex">

                  <div className="bg-[#202123] max-w-xs h-screen md:overflow-y-auto md:min-w-[20rem]" >
                    <Sidebar />
                  </div>

                  <ClientProvider />
                  <div className="bg-[#343541] flex-1">
                    {children}
                  </div>

                </div>
              </div>
            )
          }


        </SessionProvider>

      </body>
    </html >
  )
}
