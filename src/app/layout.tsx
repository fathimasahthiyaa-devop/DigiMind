import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "InsightAI | Enterprise AI Social Listening & Market Intelligence",
  description:
    "Transform business data into AI-powered decisions. Monitor brand conversations, understand customer sentiment, track competitors, and predict market trends in real-time.",
  keywords: [
    "AI social listening",
    "market intelligence platform",
    "brand monitoring software",
    "customer sentiment analysis",
    "competitor benchmarking",
    "predictive market analytics",
    "enterprise AI SaaS",
  ],
  authors: [{ name: "InsightAI Technologies Inc." }],
  creator: "InsightAI",
  metadataBase: new URL("https://insightai-intelligence.vercel.app"),
  openGraph: {
    title: "InsightAI | Enterprise AI Social Listening & Market Intelligence",
    description:
      "Transform business data into AI-powered decisions. Advanced social listening, sentiment tracking, and competitor intelligence.",
    url: "https://insightai-intelligence.vercel.app",
    siteName: "InsightAI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "InsightAI Enterprise Dashboard Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InsightAI | Enterprise AI Social Listening & Market Intelligence",
    description:
      "Real-time brand monitoring, sentiment analysis, and competitor intelligence powered by state-of-the-art AI.",
    images: ["/og-image.png"],
    creator: "@insightai",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#050816] text-slate-100 font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
