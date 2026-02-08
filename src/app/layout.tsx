import type { Metadata } from "next";
import { Overpass, Bree_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import QueryProvider from "@/providers/query-provider";

import DynamicBackground from "@/components/background/DynamicBackground";
import Lanyard from "@/components/ui/lanyard";
import { Meteors } from "@/components/ui/meteors";

const overpass = Overpass({
  variable: "--font-overpass",
  subsets: ["latin"],
});

const breeSerif = Bree_Serif({
  variable: "--font-bree-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lokeshwar Prasad Dewangan",
  description: "Full-stack developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${overpass.variable} ${breeSerif.variable} font-overpass dark antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <QueryProvider>
            <DynamicBackground />
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
            <Meteors number={20} />
            {children}
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
