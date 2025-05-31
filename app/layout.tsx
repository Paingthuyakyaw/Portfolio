import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/provider/theme-provider";
import NavBar from "@/components/nav-bar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paing Thura Kyaw",
  other: {
    "google-site-verification": "sanJwsQoeoige0WpxnZbOAiC69i0CLDf6SfMWuzSFCk",
  },
  // manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "any" },
    ],
    apple: "/apple-icon.png",
  },
  description:
    "A passionate Frontend Developer specializing in modern web technologies like React, Next.js, and Tailwind CSS. Explore my portfolio to see my latest work.",
  generator: "Next.js",
  applicationName: "Portfolio",
  referrer: "origin-when-cross-origin",
  // metadataBase: new URL("https://www.rootstudio.asia"),
  keywords: [
    "Paing Thura Kyaw",
    "Paing Thura Kyaw FullStack Developer",
    "Paing Thura Kyaw Frontend Developer",
  ],
  category: "Portfolio",
  authors: [{ name: "Paing Thura Kyaw" }],
  creator: "Paing Thura Kyaw",
  publisher: "Paing Thura Kyaw",
  openGraph: {
    title: "Paing Thura Kyaw",
    description:
      "A passionate Frontend Developer specializing in modern web technologies like React, Next.js, and Tailwind CSS. Explore my portfolio to see my latest work.",
    // url: "https://www.rootstudio.asia",
    siteName: "Paing Thura Kyaw",
    images: [
      {
        url: "",
        alt: "Paing Thura Kyaw",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paing Thura Kyaw",
    description:
      "A passionate Frontend Developer specializing in modern web technologies like React, Next.js, and Tailwind CSS. Explore my portfolio to see my latest work.",
    creator: "Paing Thura Kyaw",
    images: {
      url: "",
      alt: "Paing Thura Kyaw",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
