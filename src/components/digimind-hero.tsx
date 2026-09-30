"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Clock,
  Star,
  Layers,
  Award,
  BookOpen,
} from "lucide-react";
import { generateDirectWhatsAppChatUrl } from "@/lib/whatsapp";
import { useCurrency } from "@/context/currency-context";
import { getProductLogo } from "@/components/brand-logos";

export function DigiMindHero() {
  const { formatPrice } = useCurrency();
  const [deliveryTicker, setDeliveryTicker] = useState(0);

  const brandShowcase = [
    { id: "youtube-premium", name: "YouTube Premium", tag: "Music & Video" },
    { id: "github-student-pack", name: "GitHub Dev Pack", tag: "Student Suite" },
    { id: "linkedin-premium", name: "LinkedIn Premium", tag: "90% Off" },
    { id: "canva-pro", name: "Canva Pro", tag: "Lifetime" },
    { id: "chatgpt-plus", name: "ChatGPT Plus", tag: "GPT-4o" },
    { id: "autodesk", name: "AutoDesk 2025", tag: "1-Yr License" },
    { id: "adobe-creative-cloud", name: "Adobe CC", tag: "All Apps" },
    { id: "spotify-premium", name: "Spotify Premium", tag: "1-Year" },
    { id: "jetbrains-pack", name: "JetBrains Suite", tag: "All IDEs" },
    { id: "coursera-plus", name: "Coursera Plus", tag: "Certificates" },
  ];

  const tickerItems = [
    { text: "LinkedIn Premium 6-Month activated via voucher link", customer: "Client in Colombo", time: "2m ago" },
    { text: "Coursera Plus 1-Year invite sent to personal email", customer: "Student in Kandy", time: "6m ago" },
    { text: "Canva Pro Lifetime Brand Kit activated", customer: "Designer in Galle", time: "11m ago" },
    { text: "GitHub Student Developer Pack (SDP) delivered", customer: "Developer in Jaffna", time: "18m ago" },
    { text: "AutoDesk 1-Year Engineering License verified", customer: "Architect in Matara", time: "24m ago" },
    { text: "ChatGPT Plus (GPT-4o) private profile dispatched", customer: "Researcher in Colombo", time: "31m ago" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDeliveryTicker((prev) => (prev + 1) % tickerItems.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [tickerItems.length]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/20 via-cyan-500/25 to-purple-600/20 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP BADGE */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs sm:text-sm font-medium text-slate-200 shadow-lg shadow-cyan-500/10">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-cyan-300 font-bold">Digi Mind:</span>
            <span className="text-slate-300">
              Trusted Digital Subscription Store • Established in 2023
            </span>
          </div>
        </div>

        {/* HEADLINE & SUBHEADLINE */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12]">
            Upgrade Your Accounts To{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Premium & Pro Versions
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            We facilitate account upgrades through exclusive coupon codes, official voucher links, and direct team invitations.
            Save up to <strong>90% off retail pricing</strong> on 40+ premier platforms with 100% service warranty.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#products"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-base shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 group transition-all cursor-pointer"
            >
              <Zap className="w-5 h-5 text-cyan-200 fill-current" />
              <span>Explore Subscription Offers</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={generateDirectWhatsAppChatUrl()}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card border border-emerald-500/40 hover:border-emerald-400 text-white font-bold text-base flex items-center justify-center gap-2.5 transition-all cursor-pointer hover:bg-emerald-500/10 shadow-lg shadow-emerald-500/10"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />
              <span>Order on WhatsApp (+94 74 260 5036)</span>
            </a>
          </div>

          {/* LIVE RECENT DISPATCH TICKER */}
          <div className="mt-8 max-w-xl mx-auto p-2.5 rounded-2xl glass-card border border-white/10 flex items-center justify-between text-xs text-slate-300">
            <div className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-ping" />
              <span className="text-[11px] font-mono uppercase text-cyan-400 font-bold">
                RECENT DISPATCH:
              </span>
              <span className="truncate text-slate-200 font-medium">
                {tickerItems[deliveryTicker].text}
              </span>
            </div>
            <span className="text-[10px] text-slate-400 shrink-0 font-mono ml-2">
              {tickerItems[deliveryTicker].time}
            </span>
          </div>

          {/* 4 CORE TRUST VALUE PROPOSITIONS */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl glass-card border border-white/5 text-center">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center mx-auto mb-2">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-sm font-bold text-white">Full Service Warranty</div>
              <div className="text-xs text-slate-400 mt-0.5">100% replacement guarantee</div>
            </div>

            <div className="p-4 rounded-2xl glass-card border border-white/5 text-center">
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="text-sm font-bold text-white">Own Email Upgrades</div>
              <div className="text-xs text-slate-400 mt-0.5">Safe official invites & codes</div>
            </div>

            <div className="p-4 rounded-2xl glass-card border border-white/5 text-center">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mx-auto mb-2">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-sm font-bold text-white">Instant Private Delivery</div>
              <div className="text-xs text-slate-400 mt-0.5">Delivered to WhatsApp privately</div>
            </div>

            <div className="p-4 rounded-2xl glass-card border border-white/5 text-center">
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center mx-auto mb-2">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-sm font-bold text-white">40+ Digital Platforms</div>
              <div className="text-xs text-slate-400 mt-0.5">AI, Dev, Career, Design & Cloud</div>
            </div>
          </div>

          {/* OFFICIAL BRAND UPGRADE CLOUD */}
          <div className="mt-14 pt-8 border-t border-white/10">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-slate-300 font-bold">
                Supported Platforms & Official Brand Upgrades
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
              {brandShowcase.map((brand) => (
                <a
                  key={brand.id}
                  href="#products"
                  className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl glass-card border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all hover:scale-105 group shadow-md cursor-pointer"
                >
                  <div className="w-6 h-6 flex items-center justify-center shrink-0">
                    {getProductLogo(brand.id, "w-5 h-5")}
                  </div>
                  <span className="text-xs font-bold text-slate-200 group-hover:text-cyan-300 transition-colors">
                    {brand.name}
                  </span>
                  <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-md bg-white/10 text-cyan-300">
                    {brand.tag}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
