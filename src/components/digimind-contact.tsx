"use client";

import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import {
  DIGIMIND_EMAIL,
  DIGIMIND_WHATSAPP_NUMBER,
  generateDirectWhatsAppChatUrl,
} from "@/lib/whatsapp";

export function DigiMindContact() {
  const [formName, setFormName] = useState("");
  const [formPlatform, setFormPlatform] = useState("LinkedIn Premium");
  const [formMessage, setFormMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = `Hello Digi Mind Store! My name is ${formName}. I am interested in ${formPlatform}. Message: ${formMessage}`;
    window.open(
      `https://wa.me/${DIGIMIND_WHATSAPP_NUMBER}?text=${encodeURIComponent(query)}`,
      "_blank"
    );
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gradient-to-r from-blue-600/15 via-cyan-600/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 mb-4">
            <MessageCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Fast Support Everyday</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Contact Digi Mind HQ
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            We&apos;d love to hear from you. Our friendly team is always active on WhatsApp to process your upgrades and inquiries.
          </p>
        </div>

        {/* CONTACT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Office Details & Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-white/10 space-y-6 bg-[#08102e]/90">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 fill-emerald-500/20" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                    Direct WhatsApp & Phone
                  </div>
                  <a
                    href={generateDirectWhatsAppChatUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base sm:text-lg font-bold text-white hover:text-emerald-400 transition-colors block mt-0.5"
                  >
                    +94 (74) 260-5036
                  </a>
                  <div className="text-xs text-emerald-400 font-medium mt-0.5">
                    ● Online & Ready to chat
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/5">
                <div className="w-11 h-11 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                    Official Support Email
                  </div>
                  <a
                    href={`mailto:${DIGIMIND_EMAIL}`}
                    className="text-base font-bold text-white hover:text-cyan-400 transition-colors block mt-0.5"
                  >
                    {DIGIMIND_EMAIL}
                  </a>
                  <div className="text-xs text-slate-400 mt-0.5">Answers within 24 hours</div>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/5">
                <div className="w-11 h-11 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                    Office Headquarters
                  </div>
                  <div className="text-sm font-semibold text-white mt-0.5">
                    No. 173, Hajiyar Road
                  </div>
                  <div className="text-xs text-slate-400">Nintavur, Sri Lanka, 32340</div>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/5">
                <div className="w-11 h-11 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                    Operating Schedule
                  </div>
                  <div className="text-sm font-semibold text-white mt-0.5">
                    Everyday: 8:00 AM – 1:00 AM (Next Day)
                  </div>
                  <div className="text-xs text-slate-400">17 Hours Continuous Operation</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Quick Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-9 border border-white/10 bg-[#070e28]/95 shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Send an Instant Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6">
              Fill in your details below and we will automatically format your order or inquiry directly into WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="e.g. Kasun Jayasundara"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Subscription / Platform Desired
                </label>
                <select
                  value={formPlatform}
                  onChange={(e) => setFormPlatform(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400"
                >
                  <option>LinkedIn PREMIUM (Career / Business)</option>
                  <option>Coursera PLUS (1 Year Unlimited)</option>
                  <option>Canva Pro Edu / Teams</option>
                  <option>GitHub Student Developer Pack (SDP)</option>
                  <option>AutoDesk 1-Year License (AutoCAD, Revit)</option>
                  <option>Azure Portal Credits ($100+)</option>
                  <option>ChatGPT Plus (GPT-4o)</option>
                  <option>JetBrains All Products Pack</option>
                  <option>Adobe Creative Cloud All Apps</option>
                  <option>Spotify Premium / YouTube Premium / Netflix 4K</option>
                  <option>Other Custom Platform</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Message or Question
                </label>
                <textarea
                  rows={3}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Ask about payment methods, bulk discounts, or activation time..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-sm shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>Submit Inquiry via WhatsApp</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Instant dispatch to +94 74 260 5036 with your order details</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
