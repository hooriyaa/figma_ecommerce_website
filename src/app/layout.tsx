import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/topBar";
import MainNav from "@/components/mainNav";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-background">
          <TopBar />
        </main>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <MainNav />
          </div>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
