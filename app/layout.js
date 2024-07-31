import { Inter, Mulish } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"], display: 'swap', weight: ['300', '400', '500', '700', '900'], });

export const metadata = {
  title: "Dra. Cique - Odontología",
  description: "Centro de Odontología",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
