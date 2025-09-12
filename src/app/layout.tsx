import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/layout/layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Akshit Singh - Software Engineer & Tech Graduate",
  description: "Innovative IT Graduate with hands-on experience in cloud computing, software development, and cybersecurity. Passionate about solving real-world problems through technology.",
  keywords: ["portfolio", "software engineer", "tech graduate", "cloud computing", "cybersecurity", "full-stack developer", "react", "python", "aws", "melbourne"],
  authors: [{ name: "Akshit Singh" }],
  creator: "Akshit Singh",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://akshit-singh.dev",
    title: "Akshit Singh - Software Engineer & Tech Graduate",
    description: "Innovative IT Graduate with hands-on experience in cloud computing, software development, and cybersecurity. Passionate about solving real-world problems through technology.",
    siteName: "Akshit Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshit Singh - Software Engineer & Tech Graduate",
    description: "Innovative IT Graduate with hands-on experience in cloud computing, software development, and cybersecurity. Passionate about solving real-world problems through technology.",
    creator: "@akshit_singh",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
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
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
