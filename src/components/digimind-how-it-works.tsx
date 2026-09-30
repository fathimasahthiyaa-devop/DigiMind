"use client";

import React from "react";
import {
  Mail,
  Ticket,
  UserCheck,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { generateDirectWhatsAppChatUrl } from "@/lib/whatsapp";

export function DigiMindHowItWorks() {
  const methods = [
    {
      num: "01",
      title: "Own Email Upgrade",
      badge: "Most Popular",
      icon: Mail,
      desc: "An official team or organization invitation is dispatched directly to your personal email address. You accept with one click. All your existing data, files, and history remain 100% private.",
      examples: "Canva Pro, Coursera Plus, AutoDesk, Spotify, YouTube Premium",
    },
    {
      num: "02",
      title: "Official Voucher Links",
      badge: "Instant One-Click Redeem",
      icon: Ticket,
      desc: "You receive an official promotional voucher code or direct redemption link. When clicked while logged into your personal account, the subscription tier activates instantly.",
      examples: "LinkedIn Premium (Career & Business), Azure Portal Credits",
    },
    {
      num: "03",
      title: "Dedicated Private Accounts",
      badge: "Pre-Configured & Secure",
      icon: UserCheck,
      desc: "For select platforms requiring dedicated instances, you receive private login credentials with custom 4-digit PIN lock. Renewable each month with full data persistence.",
      examples: "ChatGPT Plus (GPT-4o), Netflix Ultra HD 4K, GitHub Student Pack",
    },
  ];

  const steps = [
    {
      step: "1",
      title: "Choose Product & Currency",
      desc: "Browse our catalog, pick your platform duration, and select your preferred currency (USD, LKR, INR, EUR).",
    },
    {
      step: "2",
      title: "Complete Payment & Send Remark",
      desc: "Transfer via Bank, Crypto (USDT), UPI, or Wise. Send payment receipt with your name & platform in remark to WhatsApp.",
    },
    {
      step: "3",
      title: "Instant Private Delivery",
      desc: "Our team validates your receipt and dispatches the invite link or voucher code privately via WhatsApp within 5 to 30 minutes.",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-600/10 via-blue-600/15 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/30 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
            <span>Safe & Transparent Activation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            How Digi Mind Upgrades Work
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            We use verified enterprise invitations, authorized discount vouchers, and education partnerships to legitimately upgrade accounts.
          </p>
        </div>

        {/* 3 ACTIVATION METHODS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {methods.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.num}
                className="glass-card rounded-3xl p-7 border border-white/10 hover:border-cyan-500/30 flex flex-col justify-between transition-all shadow-xl bg-[#08102e]/90"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                      {m.badge}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-bold text-cyan-400">
                    METHOD {m.num}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-3">{m.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {m.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <div className="text-[10px] text-slate-400 uppercase font-mono tracking-wider mb-1">
                    Applicable Platforms:
                  </div>
                  <div className="text-xs text-cyan-300 font-medium">{m.examples}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3-STEP ORDER PROCESS TIMELINE */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl bg-[#070e28]/95">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Simple 3-Step Ordering Process
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Delivered privately to your WhatsApp or Telegram within minutes of receipt validation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((st) => (
              <div key={st.step} className="relative space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-extrabold flex items-center justify-center text-sm shadow-lg shadow-cyan-500/25">
                    {st.step}
                  </div>
                  <h4 className="text-base font-bold text-white">{st.title}</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pl-13">{st.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-1.5 justify-center sm:justify-start">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Operating Hours: Everyday 8:00 AM to 1:00 AM (Next Day)</span>
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                Orders placed during operating hours are typically fulfilled in 5 to 15 minutes.
              </div>
            </div>

            <a
              href={generateDirectWhatsAppChatUrl()}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>Ask Support on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
