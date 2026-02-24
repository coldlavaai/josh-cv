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
  title: "Joshua Hammett | Isuzu Group Manager & Automotive Leader",
  description: "Experienced Isuzu Group Manager overseeing all operations including sales, service, and parts. 18+ years of diverse professional experience spanning automotive leadership, team management, and award-winning performance.",
  keywords: "group manager, Isuzu, automotive, Joshua Hammett, team management, award-winning, sales leader",
  authors: [{ name: "Joshua Hammett" }],
  openGraph: {
    title: "Joshua Hammett | Isuzu Group Manager & Automotive Leader",
    description: "Award-winning automotive leader with 18+ years of diverse professional experience",
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
