import { ClerkProvider } from "@clerk/clerk-react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Correctly name the variable to match the font configuration
const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "EventPlanner360",
  description: "It is a platform for overall Event-Management",
  icons: {
    icon: '/assets/images/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
