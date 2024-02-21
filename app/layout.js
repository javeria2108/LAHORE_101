//The layout of the app which appears on all pages
import  { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Lahore Tour Guide",
  description: "A tour guide for enthusiasts who want to explore the City of Gardens",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        <main className="relative overflow-hidden" >
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  );
}
