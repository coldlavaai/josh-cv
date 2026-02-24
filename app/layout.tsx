import type { Metadata, Viewport } from "next";
import "./globals.css";
import BackgroundAnimation from "@/components/BackgroundAnimation";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Joshua Hammett | Sales Manager & Automotive Professional",
  description: "Experienced Sales Manager at AZUR ŠKODA (Birchwood Group) with 15+ years of professional experience spanning automotive sales, team management, and award-winning customer service.",
  keywords: "sales manager, automotive, ŠKODA, Joshua Hammett, team management, award-winning",
  authors: [{ name: "Joshua Hammett" }],
  openGraph: {
    title: "Joshua Hammett | Sales Manager & Automotive Professional",
    description: "Award-winning Sales Manager with 15+ years of diverse professional experience",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-inter antialiased relative">
        <BackgroundAnimation />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
