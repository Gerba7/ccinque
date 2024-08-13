import { Inter, Mulish, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/components/Navbar/Navbar";
import localFont from 'next/font/local';

const inter = Inter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"], display: 'swap', weight: ['300', '400', '500', '700', '900'], });
const openSans = Open_Sans({ subsets: ["latin"], display: 'swap', weight: ['300', '400', '500', '600', '700'], });

const customFont = localFont({
  src: [
    {
      path: '../public/fonts/helvetica-light.ttf',
      weight: '300',
    },
    {
      path: '../public/fonts/Helvetica.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Helvetica-Bold.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/fonts/Helvetica-Oblique.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/Helvetica-BoldOblique.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',
})

export const metadata = {
  title: "Dra. Cique - Odontología",
  description: "Centro de Odontología",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
