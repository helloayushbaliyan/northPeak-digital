import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "NorthPeak Digital — Premium Digital Agency",
  description:
    "We help startups and growing brands design, build, and scale premium digital experiences. Web design, branding, SaaS development, SEO, and growth marketing.",
  keywords: [
    "digital agency",
    "web design",
    "UI/UX design",
    "branding",
    "SaaS development",
    "SEO",
    "growth marketing",
    "startup agency",
  ],
  authors: [{ name: "NorthPeak Digital" }],
  creator: "NorthPeak Digital",
  metadataBase: new URL("https://northpeakdigital.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://northpeakdigital.com",
    siteName: "NorthPeak Digital",
    title: "NorthPeak Digital — Premium Digital Agency",
    description:
      "We help startups and growing brands design, build, and scale premium digital experiences.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NorthPeak Digital — Premium Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NorthPeak Digital — Premium Digital Agency",
    description:
      "We help startups and growing brands design, build, and scale premium digital experiences.",
    images: ["/og-image.jpg"],
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
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
