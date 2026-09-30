"use client";

import React from "react";
import { ModalProvider } from "@/components/modal-provider";
import { AnimatedBackground } from "@/components/animated-background";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { DashboardPreview } from "@/components/dashboard-preview";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { AnalyticsShowcase } from "@/components/analytics-showcase";
import { AIAssistant } from "@/components/ai-assistant";
import { Industries } from "@/components/industries";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <ModalProvider>
      <div className="relative min-h-screen bg-[#050816] text-slate-100 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
        {/* Futuristic glowing ambient background */}
        <AnimatedBackground />

        {/* Global Sticky Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <Hero />
          <DashboardPreview />
          <Features />
          <HowItWorks />
          <AnalyticsShowcase />
          <AIAssistant />
          <Industries />
          <Pricing />
          <Testimonials />
        </main>

        {/* Enterprise Footer */}
        <Footer />
      </div>
    </ModalProvider>
  );
}
