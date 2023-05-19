import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import SessionProvider from '@/components/SessionProvider'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import Login from '@/components/Login'
import ClientProvider from '@/components/ClientProvider'

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
        <SessionProvider session={session} >
          {
            <>
              <div className="block md:hidden bg-black text-white h-screen relative">
                <h1 className="absolute top-40 right-[10%] left-[10%] text-center">The mobile version is currently not available. <br /> Please check on desktop.</h1>
              </div>
              <div className="hidden md:block">
                {!session ? (
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
                )}
              </div>
            </>
          }


        </SessionProvider>

      </body>
    </html >
  )
}
