import './globals.css'
import './about.css'
import './fonts.css'
import './header.css'
import './footer.css'
import './animate.css'
import './contact.css'
import { Inter } from 'next/font/google'
import ThemeProviderContext from '../context/ThemeProviderContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pablo Landim de Sá',
  description: 'Portifolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
 <html lang="en">
      <body className={inter.className}><ThemeProviderContext>{children} </ThemeProviderContext></body>
    </html>
   
   
  )
}
