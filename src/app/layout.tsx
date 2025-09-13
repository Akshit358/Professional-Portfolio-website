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
  title: "Akshit Singh - Graduate Software Engineer | Spring Boot & Full-Stack Developer",
  description: "Graduate Software Engineer who turns complex ideas into clean, practical software. Certified on HackerRank, ranked on Kaggle, with 6 virtual internships at top companies including JP Morgan Chase, HPE, and Electronic Arts.",
  keywords: ["portfolio", "graduate software engineer", "spring boot", "java developer", "full-stack developer", "microservices", "react", "typescript", "postgresql", "docker", "kubernetes", "melbourne", "virtual internships"],
  authors: [{ name: "Akshit Singh" }],
  creator: "Akshit Singh",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://akshit-singh.dev",
    title: "Akshit Singh - Graduate Software Engineer | Spring Boot & Full-Stack Developer",
    description: "Graduate Software Engineer who turns complex ideas into clean, practical software. Certified on HackerRank, ranked on Kaggle, with 6 virtual internships at top companies including JP Morgan Chase, HPE, and Electronic Arts.",
    siteName: "Akshit Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshit Singh - Graduate Software Engineer | Spring Boot & Full-Stack Developer",
    description: "Graduate Software Engineer who turns complex ideas into clean, practical software. Certified on HackerRank, ranked on Kaggle, with 6 virtual internships at top companies including JP Morgan Chase, HPE, and Electronic Arts.",
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
