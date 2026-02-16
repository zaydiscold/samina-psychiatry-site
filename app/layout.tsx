import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/cn";
import { generatePhysicianSchema } from "@/lib/schema";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Samina Khan, MD",
    default: "Samina Khan, MD | Board-Certified Psychiatrist | Bay Area, CA",
  },
  description:
    "Dr. Samina Khan is a board-certified psychiatrist specializing in General and Geriatric Psychiatry in the Bay Area. Over 20 years of experience. Fellowships at Stanford, Duke, and Emory.",
  keywords: [
    "psychiatrist Mountain View",
    "psychiatrist Bay Area",
    "geriatric psychiatrist California",
    "psychiatrist Palo Alto",
    "psychiatrist Cupertino",
    "TMS therapy Bay Area",
    "Samina Khan MD",
  ],
  authors: [{ name: "Samina Khan, MD" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.drkhanpsychiatry.com",
    title: "Samina Khan, MD | Board-Certified Psychiatrist",
    description:
      "Board-certified psychiatrist serving Mountain View, Palo Alto, and the Bay Area. Over 20 years of experience in general and geriatric psychiatry.",
    siteName: "Samina Khan, MD",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = generatePhysicianSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-cream font-body antialiased text-charcoal",
          lora.variable,
          inter.variable
        )}
      >
        <Navbar />
        <main className="content-container py-10 lg:py-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
