import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marc Herilala | web developper",
  description: "I'm a web developer based in Madagascar. I build websites and web applications.",
  icons: ["https://herilala.vercel.app/MC.png"],
  openGraph: {
    title: "Marc Herilala | Web Developer",
    description: "I'm a web developer based in Madagascar. I build websites and web applications.",
    url: "https://herilala.vercel.app",
    type: "website",
    images: [
      {
        url: "https://herilala.vercel.app/portfolio.png",  // Remplace par le lien de ton image
        width: 1200,
        height: 630,
        alt: "Photo de Marc Herilala",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
