"use client";

import React from "react";
import Link from "next/link";
import { ThemeProvider } from "@/context/theme-context";
import { CurrencyProvider } from "@/context/currency-context";
import { AnimatedBackground } from "@/components/animated-background";
import { MouseTracker } from "@/components/mouse-tracker";
import { DigiMindNavbar } from "@/components/digimind-navbar";
import { DigiMindFooter } from "@/components/digimind-footer";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import {
  ShieldCheck,
  Award,
  Users2,
  Clock,
  Sparkles,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import {
  DIGIMIND_FACEBOOK_PAGE,
  DIGIMIND_WHATSAPP_CHANNEL,
  generateDirectWhatsAppChatUrl,
} from "@/lib/whatsapp";

export default function AboutPage() {
  return (
    <ThemeProvider>
      <CurrencyProvider>
        <div className="relative min-h-screen overflow-x-hidden selection:bg-cyan-500/30">
          <MouseTracker />
          <AnimatedBackground />
          <DigiMindNavbar />

          <main className="relative z-10 pt-36 pb-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Established in 2023</span>
                </div>

                <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
                  About Digi Mind
                </h1>

                <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
                  Your premier source for authentic software subscription upgrades at unbeatable discounts.
                </p>
              </div>

              {/* Main Story Box */}
              <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl bg-[#08102e]/95 space-y-6 mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Elevating Your Digital Lifestyle Since 2023
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Welcome to <strong>Digi Mind</strong>. Founded in 2023, we are committed to delivering high-quality software and subscription services that elevate your digital workflow. Our selection is diverse, designed to meet the rigorous demands of students, developers, designers, and business professionals.
                </p>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  With a focus on affordability, quality, and prompt customer satisfaction, we offer a transparent upgrade experience that is unmatched. Our team is driven by a passion for technology and innovation, ensuring that we provide the latest and most effective digital solutions across <strong>more than 40+ platforms</strong>.
                </p>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  At Digi Mind, we value transparency, reliability, and integrity. We provide multiple verified activation methods—from direct invites sent to your personal email to official promo voucher links and private dedicated profiles. Every single purchase is backed by our comprehensive service warranty.
                </p>

                {/* Core Pillars Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-center">
                    <div className="text-3xl font-extrabold text-cyan-400 font-mono">40+</div>
                    <div className="text-xs text-slate-300 font-semibold mt-1">Supported Platforms</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">AI, Dev, Design, Learning</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-center">
                    <div className="text-3xl font-extrabold text-emerald-400 font-mono">100%</div>
                    <div className="text-xs text-slate-300 font-semibold mt-1">Replacement Warranty</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Guaranteed service validity</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-center">
                    <div className="text-3xl font-extrabold text-purple-400 font-mono">500+</div>
                    <div className="text-xs text-slate-300 font-semibold mt-1">Satisfied Buyers</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Sri Lanka & Worldwide</div>
                  </div>
                </div>
              </div>

              {/* Customer Assurance & Official Links */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-cyan-400" />
                    <span>Our Service Warranty Commitment</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    We stand firmly behind every voucher and invite code we provide. If any unexpected disruption occurs during your active subscription period, our support team will promptly investigate and replace your access at zero additional cost.
                  </p>
                  <div className="pt-2">
                    <a
                      href={DIGIMIND_FACEBOOK_PAGE}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300"
                    >
                      <span>Read Verified Customer Reviews on Facebook</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="glass-card rounded-3xl p-6 sm:p-8 border border-emerald-500/30 bg-gradient-to-br from-[#08102e] to-[#041a1a] flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-emerald-400" />
                      <span>Instant Customer Care</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                      Our team is active everyday from 8:00 AM to 1:00 AM (17 hours daily). Send a message with any question or software request and receive an immediate response.
                    </p>
                  </div>

                  <div className="pt-4">
                    <a
                      href={generateDirectWhatsAppChatUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                      <span>Chat on WhatsApp (+94 74 260 5036)</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <DigiMindFooter />
          <WhatsAppWidget />
        </div>
      </CurrencyProvider>
    </ThemeProvider>
  );
}
