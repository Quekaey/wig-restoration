import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-serif", weight: ["400", "500", "600", "700"] });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const modern = Manrope({ subsets: ["latin"], variable: "--font-modern" });

export const metadata: Metadata = {
  title: "Revivé Hair Studio — Every strand deserves a second chance",
  description: "Two fictional website strategies for a premium wig restoration studio in Nigeria."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${serif.variable} ${sans.variable} ${modern.variable}`}>{children}</body></html>;
}
