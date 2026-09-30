"use client";

import React, { useState } from "react";
import {
  CreditCard,
  Building2,
  Coins,
  QrCode,
  Globe2,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Copy,
  Check,
  ShieldCheck,
} from "lucide-react";
import { generateDirectWhatsAppChatUrl } from "@/lib/whatsapp";

export function DigiMindPayments() {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const paymentOptions = [
    {
      id: "bank",
      title: "Online Bank Transfers",
      icon: Building2,
      subtitle: "Instant National & International Wire",
      desc: "Fast online banking transfer supported across all major banks including Commercial Bank, Sampath Bank, Hatton National Bank (HNB), and Bank of Ceylon.",
      remarkGuide: "Include [Your Name] + [Platform Name] (e.g. 'Kasun LinkedIn')",
      badge: "Instant 0% Fee",
    },
    {
      id: "crypto",
      title: "Crypto Payments (USDT)",
      icon: Coins,
      subtitle: "Binance Pay ID / USDT TRC-20 / BTC",
      desc: "Zero fees via Binance Pay ID or direct wallet transfer via USDT (TRC-20 & BEP-20 networks). Instant confirmation 24/7 with blockchain txID verification.",
      remarkGuide: "Send txID or screenshot to WhatsApp for immediate dispatch",
      badge: "Global Instant",
    },
    {
      id: "upi",
      title: "UPI (Google Pay, PhonePe)",
      icon: QrCode,
      subtitle: "Paytm, PhonePe & GPay for INR",
      desc: "Seamless 1-click QR code or VPA ID transfer for customers paying in Indian Rupees (INR). Verified instantly via mobile banking notification.",
      remarkGuide: "Add your mobile number and product name in transaction note",
      badge: "INR Supported",
    },
    {
      id: "wise",
      title: "Wise & Revolut Transfers",
      icon: Globe2,
      subtitle: "USD, EUR, GBP, AUD, CAD",
      desc: "Direct Wise-to-Wise email transfer or international account details. Enjoy mid-market exchange rates with zero international markups.",
      remarkGuide: "Enter your personal email in the Wise reference field",
      badge: "Low International FX",
    },
    {
      id: "payoneer",
      title: "Payoneer & Cards",
      icon: CreditCard,
      subtitle: "Freelancer balance or card checkout",
      desc: "Pay easily using your Payoneer balance or credit/debit card. Ideal for remote professionals and agency freelancers.",
      remarkGuide: "Share payment ID on WhatsApp chat",
      badge: "Freelancer Friendly",
    },
  ];

  return (
    <section id="payments" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-gradient-to-r from-blue-600/15 via-cyan-600/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 mb-4">
            <CreditCard className="w-3.5 h-3.5 text-cyan-400" />
            <span>Multiple Flexible Payment Methods</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            How to Pay Digi Mind
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            We accept payments through bank transfers, crypto USDT, UPI, Wise, and Payoneer.
            When transferring, please include your <strong>Name and Product</strong> in the remark section.
          </p>
        </div>

        {/* PAYMENT OPTIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {paymentOptions.map((opt) => {
            const Icon = opt.icon;
            return (
              <div
                key={opt.id}
                className="glass-card rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-cyan-500/30 flex flex-col justify-between transition-all duration-300 shadow-xl bg-[#08102e]/90"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-lg shadow-cyan-500/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                      {opt.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">{opt.title}</h3>
                  <div className="text-xs text-cyan-300 font-medium mb-3">{opt.subtitle}</div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {opt.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-2">
                  <div className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">
                    Remark Instruction:
                  </div>
                  <div className="text-xs text-slate-200 bg-black/40 p-2.5 rounded-xl border border-white/5">
                    {opt.remarkGuide}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Offer Delivery Card */}
          <div className="glass-card rounded-3xl p-6 sm:p-7 border border-emerald-500/30 flex flex-col justify-between shadow-xl bg-gradient-to-br from-[#08102e] to-[#041a1a]">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                OFFER DELIVERY
              </span>
              <h3 className="text-xl font-bold text-white mt-1 mb-2">
                Private WhatsApp & Telegram Delivery
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                After completing your payment, send your transaction slip or screenshot to our official WhatsApp (+94 74 260 5036). Your subscription voucher or invite link will be delivered privately within minutes.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href={generateDirectWhatsAppChatUrl("Hello Digi Mind! I am ready to make payment. Please share your account/crypto/UPI details.")}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <span>Request Account Details on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* REMARK NOTICE BANNER */}
        <div className="p-6 rounded-2xl glass-panel border border-cyan-500/30 bg-gradient-to-r from-blue-950/40 via-cyan-950/30 to-purple-950/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-cyan-400 shrink-0" />
            <div className="text-xs sm:text-sm text-slate-200">
              <strong>Crucial Step:</strong> Always mention your name and the platform you wish to buy in the bank transfer remark or reference box for rapid 5-minute activation.
            </div>
          </div>

          <a
            href={generateDirectWhatsAppChatUrl()}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shrink-0 transition-colors cursor-pointer"
          >
            Chat with Support →
          </a>
        </div>
      </div>
    </section>
  );
}
