import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from '@/registry'
import { CartContextProvider } from '@/contexts/CheckoutCartContext';
import { ToastContainer, toast } from 'react-toastify';

const montserrat = Montserrat({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MKS Sistemas',
  description: 'Teste desenvolvido por: João Gabriel Knisspell Zimmermann',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={montserrat.className}>
      <CartContextProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          <ToastContainer />
      </CartContextProvider>
      </body>
    </html>
  )
}
