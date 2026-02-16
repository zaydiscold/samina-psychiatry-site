import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google"; // Use built-in next/font
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Configure fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Samina Khan | Psychiatrist in Mountain View, CA",
  description: "Board Certified Psychiatrist specializing in General and Geriatric Psychiatry. Compassionate, evidence-based care in the Bay Area.",
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
