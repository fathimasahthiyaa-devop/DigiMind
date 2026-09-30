"use client";

import React from "react";
import { ThemeProvider } from "@/context/theme-context";
import { CurrencyProvider } from "@/context/currency-context";
import { AnimatedBackground } from "@/components/animated-background";
import { MouseTracker } from "@/components/mouse-tracker";
import { DigiMindNavbar } from "@/components/digimind-navbar";
import { DigiMindEbooks } from "@/components/digimind-ebooks";
import { DigiMindFooter } from "@/components/digimind-footer";
import { WhatsAppWidget } from "@/components/whatsapp-widget";

export default function FreeServicesPage() {
  return (
    <ThemeProvider>
      <CurrencyProvider>
        <div className="relative min-h-screen overflow-x-hidden selection:bg-cyan-500/30">
          <MouseTracker />
          <AnimatedBackground />
          <DigiMindNavbar />

          <main className="relative z-10 pt-24 pb-16">
            <DigiMindEbooks />
          </main>

          <DigiMindFooter />
          <WhatsAppWidget />
        </div>
      </CurrencyProvider>
    </ThemeProvider>
  );
}
