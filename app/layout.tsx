import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; 
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContextProvider'; 

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'E-commerce Website',
  description: 'A powerful e-commerce platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            
            <main>{children}</main> 
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
