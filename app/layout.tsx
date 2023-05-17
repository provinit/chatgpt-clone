import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import SessionProvider from '@/components/SessionProvider'
import { getServerSession } from 'next-auth/next'
import {authOptions} from './api/auth/[...nextauth]/route'
import Login from '@/components/Login'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ChatGPT Clone',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session =  await getServerSession(authOptions)

  return (
    <html lang="en">
      <body className={inter.className}>
      <SessionProvider session={session}>
        {
          !session? (
              <Login/>
          ): (
            <div className="flex">
         
            <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
            <Sidebar/>
            </div>
          
          {
            // Client Provider
          }
          <div className="bg-[#343541] flex-1">
          {children}
          </div>
         
          </div>
           )
        }
     
     
      </SessionProvider> 
      
        </body>
    </html>
  )
}