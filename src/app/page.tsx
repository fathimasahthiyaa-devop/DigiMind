"use client";

import React from "react";
import { CurrencyProvider } from "@/context/currency-context";
import { AnimatedBackground } from "@/components/animated-background";
import { MouseTracker } from "@/components/mouse-tracker";
import { DigiMindNavbar } from "@/components/digimind-navbar";
import { DigiMindHero } from "@/components/digimind-hero";
import { DigiMindCatalog } from "@/components/digimind-catalog";
import { DigiMindHowItWorks } from "@/components/digimind-how-it-works";
import { DigiMindPayments } from "@/components/digimind-payments";
import { DigiMindEbooks } from "@/components/digimind-ebooks";
import { DigiMindReviews } from "@/components/digimind-reviews";
import { DigiMindFaq } from "@/components/digimind-faq";
import { DigiMindContact } from "@/components/digimind-contact";
import { DigiMindFooter } from "@/components/digimind-footer";
import { WhatsAppWidget } from "@/components/whatsapp-widget";

export default function Home() {
  return (
    <CurrencyProvider>
      <div className="relative min-h-screen bg-[#050816] text-slate-100 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
        {/* Interactive Mouse Tracking Animation & Ambient Glow */}
        <MouseTracker />

        {/* Ambient Glowing Background */}
        <AnimatedBackground />

        {/* Global Navigation Bar with icons & perfect alignment */}
        <DigiMindNavbar />

        {/* Main Sections */}
        <main className="relative z-10">
          <DigiMindHero />
          <DigiMindCatalog />
          <DigiMindHowItWorks />
          <DigiMindPayments />
          <DigiMindEbooks />
          <DigiMindReviews />
          <DigiMindFaq />
          <DigiMindContact />
        </main>

        {/* Footer */}
        <DigiMindFooter />

        {/* Floating WhatsApp Action Widget */}
        <WhatsAppWidget />
      </div>
    </CurrencyProvider>
  );
}
