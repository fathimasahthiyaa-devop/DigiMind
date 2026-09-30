"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, MessageCircle, ExternalLink, ShieldCheck } from "lucide-react";
import { DIGIMIND_FACEBOOK_PAGE, generateDirectWhatsAppChatUrl } from "@/lib/whatsapp";

export function DigiMindFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How can I see feedback and reviews from your previous customers?",
      a: "You can visit our official Facebook Page to view genuine customer ratings, feedback, and delivery confirmations. We maintain a 4.9/5 star satisfaction track record across Sri Lanka and international clients.",
      hasFacebookLink: true,
    },
    {
      q: "What guarantee or warranty do I have after purchasing?",
      a: "Every subscription purchased through Digi Mind comes with our full-term replacement warranty. If you experience any service disruption during the subscription period, our support team will verify and resolve or re-issue your access within hours. To maintain warranty validity, users must not violate the platform's terms or manually cancel their active plans.",
    },
    {
      q: "Can I upgrade my own personal email account without losing my data?",
      a: "Yes! For major platforms like Canva Pro, Coursera Plus, LinkedIn Premium, AutoDesk, Spotify, and YouTube, we upgrade your existing personal email address via official team invites or voucher codes. All your saved documents, playlists, course progress, and connections remain 100% untouched.",
    },
    {
      q: "How can I get in touch with your team?",
      a: "You can reach us directly on WhatsApp at +94 (74) 260-5036. We are active everyday from 8:00 AM to 1:00 AM (Next Day). You can also join our official WhatsApp Channel for daily stock alerts and giveaways, or email us at digimindstore@gmail.com.",
    },
    {
      q: "Do you offer discounts for students or bulk orders?",
      a: "Yes! All prices on our catalog already feature 70% to 90% discounts off official retail prices. For students purchasing multiple items (e.g. Coursera + GitHub Pack + LinkedIn) or university batch orders, we offer special bundle rates via WhatsApp.",
    },
    {
      q: "Can I pay in installments?",
      a: "Yes! For multi-month or annual tiers on select platforms like ChatGPT Plus (GPT-4o) and Netflix Ultra HD 4K, we can arrange split installment payments. Contact our WhatsApp agent to set up an installment arrangement.",
    },
    {
      q: "How long does delivery take after I send the payment slip?",
      a: "During our active operating hours (8:00 AM - 1:00 AM), standard delivery takes between 5 to 15 minutes. For certain custom enterprise licenses, delivery takes up to 30 minutes.",
    },
  ];

  return (
    <section id="faqs" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-cyan-600/15 via-blue-600/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Got Questions? We Have Answers</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Everything you need to know about Digi Mind subscriptions, warranties, payment options, and delivery.
          </p>
        </div>

        {/* ACCORDION */}
        <div className="space-y-3.5 mb-14">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all bg-[#08102e]/90"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-bold text-white hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3 space-y-3">
                    <p>{faq.a}</p>
                    {faq.hasFacebookLink && (
                      <a
                        href={DIGIMIND_FACEBOOK_PAGE}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                      >
                        <span>Open Digi Mind Facebook Reviews</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* STILL HAVE QUESTIONS BOX */}
        <div className="glass-panel rounded-3xl p-8 border border-white/10 text-center bg-gradient-to-r from-blue-950/40 via-cyan-950/30 to-purple-950/40 space-y-4">
          <h3 className="text-xl font-bold text-white">Have a Specific Platform in Mind?</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Can&apos;t find the software or subscription you are searching for? We support over 40+ platforms upon custom request.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={generateDirectWhatsAppChatUrl("Hello Digi Mind! I am looking for a platform not listed on the website. Can you help?")}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/25"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>Ask Our Support on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
