import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Revivé Hair Studio — Every strand deserves a second chance",
  description: "Two fictional website strategies for a premium wig restoration studio in Nigeria."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
