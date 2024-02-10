import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Frover Careers",
  description: "Find your next job at Frover",
};

export default function RootLayout(

  { children }
  ) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
        {children}</body>
        <Footer/>
    </html>
  );
}
