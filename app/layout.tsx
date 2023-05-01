import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import RegisterModal from './components/modals/RegisterModal'
import LoginModal from './components/modals/LoginModal'
import ToasterProvider from './providers/ToasterProvider'
import getCurrentUser from './actions/getCurrentUser'
import prisma from './libs/prismadb'
import RentModal from './components/modals/RentModal'
import SearchModal from './components/modals/SearchModal'

export const metadata = {
  title: 'AirBnb',
  description: 'AirBnb clone',
}

const font = Nunito({
  subsets: ["latin"],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  //Solution without separate action
  // const currentUser = await prisma?.user.find({
        // ...
  // })
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SearchModal />
        <RentModal />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser}/>
        <div className="pb-20 pt-28">
        {children}
        </div>
      </body>
    </html>
  )
}
