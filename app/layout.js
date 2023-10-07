import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({subsets:["latin"],

weight: ['400','500', '700'],})

export const metadata = {
  title: 'Nirvoya',
  description: 'Generated by Nirvoya',
  icons : {
    icon: "https://i.ibb.co/SdKBxqK/final-png-2-2.png",
  apple: "https://i.ibb.co/SdKBxqK/final-png-2-2.png"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
