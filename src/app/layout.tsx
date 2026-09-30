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
  title: "Digi Mind | Premium Digital Subscriptions & Account Upgrades",
  description:
    "Digi Mind facilitates the enhancement of your personal accounts to Premium or Pro versions through exclusive coupon codes, official voucher links, and invitations. Save up to 90% on LinkedIn Premium, Coursera Plus, Canva Pro, GitHub Student Pack, AutoDesk, ChatGPT Plus, and 40+ platforms with full warranty.",
  keywords: [
    "Digi Mind",
    "digimind.top",
    "LinkedIn Premium discount",
    "Coursera Plus cheap",
    "Canva Pro lifetime",
    "GitHub student developer pack",
    "ChatGPT Plus subscription",
    "AutoDesk student license",
    "digital software subscription store",
    "Sri Lanka digital subscriptions",
  ],
  authors: [{ name: "Digi Mind Store" }],
  creator: "Digi Mind",
  metadataBase: new URL("https://digimind.top"),
  openGraph: {
    title: "Digi Mind | Premium Digital Subscriptions & Account Upgrades",
    description:
      "Upgrade your accounts to LinkedIn Premium, Coursera Plus, Canva Pro, GitHub Student Pack, and 40+ platforms with official voucher links, instant delivery, and full replacement warranty.",
    url: "https://digimind.top",
    siteName: "Digi Mind",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digi Mind | Premium Digital Subscriptions & Account Upgrades",
    description:
      "Upgrade your personal accounts to Premium or Pro versions with official invites, instant delivery, and warranty.",
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
