// 'use client';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrew's App",
  description: "Generated by create next app",
};

// const [currentBackground, setCurrentBackground ] = useState<string>("")
// const useparams = useParams();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className={inter.className}>
        <div className="container">
        {/* <h1>This is the main Layout</h1> */}
        <Navbar />
        {children}
        <Footer/>
        </div>
      </body>
    </html>
  );
}
