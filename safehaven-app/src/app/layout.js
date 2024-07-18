import { Inter } from "next/font/google";
import "./style.css";
import Header from "./header/page";
import Footer from "./footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SafeHaven",
  description: "CONNECT, CARE, SAFE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} data-spy="scroll" data-target=".navbar" data-offset="150">
        
        <Header />
        {children}
        <Footer />

        </body>
    </html>
  );
}
