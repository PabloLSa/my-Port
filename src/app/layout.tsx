import './globals.css'
import { Inter } from 'next/font/google'
import ThemeProviderContext from './context/ThemeProviderContext';

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
    <ThemeProviderContext>
 <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ThemeProviderContext>
   
  )
}
