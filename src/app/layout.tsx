import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/sharedLayout/Navbar";
import Footer from "@/components/sharedLayout/Footer";
import { AuthProvider } from "@/context/authcontext";

// Font configurations
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the app
export const metadata: Metadata = {
  title: "ODD Recipe",
  description: "Dev by Winnie Davis",
};

// RootLayout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AuthProvider>
          <Navbar />
<div style={{minHeight:"70vh"}}>
{children}
</div>          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
