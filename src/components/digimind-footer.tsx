"use client";

import React from "react";
import Link from "next/link";
import {
  Zap,
  MessageCircle,
  Mail,
  MapPin,
  ExternalLink,
  ChevronUp,
  ShieldCheck,
} from "lucide-react";
import {
  DIGIMIND_EMAIL,
  DIGIMIND_FACEBOOK_PAGE,
  DIGIMIND_WHATSAPP_CHANNEL,
  DIGIMIND_WHATSAPP_NUMBER,
  generateDirectWhatsAppChatUrl,
} from "@/lib/whatsapp";

export function DigiMindFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#030611] text-slate-400 pt-16 pb-12 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-gradient-to-t from-cyan-900/10 via-blue-900/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white">
                <Zap className="w-4 h-4 text-cyan-200 fill-current" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">Digi</span>
              <span className="text-xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Mind
              </span>
              <span className="ml-1 px-1.5 py-0.5 text-[10px] font-bold uppercase rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                PRO STORE
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              DigiMind was established in 2023 to provide exclusive discounts and upgrades on premier digital platforms.
              We provide authentic service with comprehensive replacement warranty.
            </p>

            <div className="pt-2 text-xs space-y-1.5 text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>No. 173, Hajiyar Road, Nintavur, Sri Lanka, 32340</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{DIGIMIND_EMAIL}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>+94 (74) 260-5036 (WhatsApp & Telegram)</span>
              </div>
            </div>
          </div>

          {/* Column 1: Products */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Top Subscriptions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#products" className="hover:text-cyan-300 transition-colors">
                  LinkedIn PREMIUM
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-cyan-300 transition-colors">
                  Coursera PLUS (1-Yr)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-cyan-300 transition-colors">
                  Canva Pro Edu / Teams
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-cyan-300 transition-colors">
                  GitHub Student Pack
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-cyan-300 transition-colors">
                  AutoDesk Suite (AutoCAD)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-cyan-300 transition-colors">
                  ChatGPT Plus (GPT-4o)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Company & Guides
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#how-it-works" className="hover:text-cyan-300 transition-colors">
                  How Activation Works
                </a>
              </li>
              <li>
                <a href="#payments" className="hover:text-cyan-300 transition-colors">
                  Payment Methods
                </a>
              </li>
              <li>
                <a href="#ebooks" className="hover:text-cyan-300 transition-colors">
                  Free E-books Library
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-cyan-300 transition-colors">
                  Customer Testimonials
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-cyan-300 transition-colors">
                  Warranty & FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-300 transition-colors">
                  Contact Office HQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social & Community */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Official Channels
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={DIGIMIND_FACEBOOK_PAGE}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Facebook Page (Reviews)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={DIGIMIND_WHATSAPP_CHANNEL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>WhatsApp Community Channel</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={generateDirectWhatsAppChatUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>Direct WhatsApp Chat</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <div className="mt-3 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-[11px] text-slate-300">
                  <div className="flex items-center gap-1 text-emerald-400 font-semibold mb-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" /> Service Guarantee
                  </div>
                  100% full-term replacement warranty on all digital offers.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-400">
            © 2023 – 2026 Digi Mind Store (digimind.top). All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a href="#how-it-works" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <span>•</span>
            <a href="#how-it-works" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5 transition-all cursor-pointer flex items-center gap-1"
            >
              <span>Back to Top</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
