import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import Gradient from "@/components/main/Gradient";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/main/Footer";
export const metadata: Metadata = {
  title: "Elite Educate - Your choice for Elite caliber Education",
  description:
    "Elite Educate is an algerian platform that provides courses and classes in multiple fields, helping young men and women to develop themselves in any field they want.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`text-primaryc h-screen bg-black overflow-x-hidden`}>
          <Navbar />
          <Gradient />
          <main className="bg-transparent h-[90vh] z-40 md:px-10 px-6">
            {children}
          </main>
          <Footer />
          {/* <div className="absolute pointer-events-none -z-40 bottom-0 left-0 h-[90%] w-[50%] bg-blur-2" /> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
