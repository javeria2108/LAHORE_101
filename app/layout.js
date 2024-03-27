//The layout of the app which appears on all pages
import  { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SessionProvider from "@/src/SessionProviderComponent";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";



export const metadata = {
  title: "Lahore Tour Guide",
  description: "A tour guide for enthusiasts who want to explore the City of Gardens",
};


export default async function RootLayout({ children }) {
  const session= await getServerSession(authOptions)
  return (
    <html lang="en">
      <body>
   <SessionProvider session={session}>
        <NavBar/>
        <main className="relative overflow-hidden" >
        {children}
        </main>
        <Footer/>
        </SessionProvider>
        </body>
    </html>
  );
}
