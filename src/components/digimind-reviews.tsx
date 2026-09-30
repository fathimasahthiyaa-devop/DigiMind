"use client";

import React from "react";
import { Star, CheckCircle2, MessageCircle, ExternalLink, ShieldCheck, Heart } from "lucide-react";
import { DIGIMIND_FACEBOOK_PAGE } from "@/lib/whatsapp";

export function DigiMindReviews() {
  const reviews = [
    {
      name: "Kasun Jayasundara",
      role: "Software Engineering Undergraduate",
      location: "University of Moratuwa",
      product: "GitHub Student Pack + Coursera Plus",
      rating: 5,
      date: "3 days ago",
      text: "Was hesitant at first, but Digi Mind delivered my Coursera Plus invite within 10 minutes of sending the bank slip. Already completed 2 Google Certificates. Genuine and trustworthy service!",
    },
    {
      name: "Fathima Rizwana",
      role: "Digital Marketing Specialist",
      location: "Colombo, Sri Lanka",
      product: "LinkedIn Premium 6-Month",
      rating: 5,
      date: "1 week ago",
      text: "Upgraded my existing LinkedIn profile via official voucher link. The 15 InMails and profile viewer access helped me land an interview with a UAE remote company. Best investment!",
    },
    {
      name: "Niroshan Perera",
      role: "Freelance UI/UX & Graphic Designer",
      location: "Kandy, Sri Lanka",
      product: "Canva Pro Edu + AutoDesk Suite",
      rating: 5,
      date: "2 weeks ago",
      text: "Brand kits and background remover activated seamlessly on my own Canva email. Also got AutoCAD 1-Year license for my architecture freelance projects. 10/10 support on WhatsApp!",
    },
    {
      name: "Dinuka Fernando",
      role: "Full-Stack Web Developer",
      location: "Galle, Sri Lanka",
      product: "JetBrains Pack + Azure Portal",
      rating: 5,
      date: "3 weeks ago",
      text: "IntelliJ IDEA Ultimate and WebStorm licenses activated with zero issues. Azure credits allowed me to deploy test Docker containers. Very fast WhatsApp responses even late at night.",
    },
    {
      name: "Ahamed Imran",
      role: "E-Commerce Business Owner",
      location: "Eastern Province, Sri Lanka",
      product: "ChatGPT Plus (GPT-4o)",
      rating: 5,
      date: "1 month ago",
      text: "Purchased ChatGPT 4 access with private profile. Great for generating marketing copy and product descriptions. Replacement warranty gives peace of mind. Excellent customer care!",
    },
    {
      name: "Tharindu Wickramasinghe",
      role: "Engineering Student",
      location: "Peradeniya, Sri Lanka",
      product: "AutoDesk 1-Year License",
      rating: 5,
      date: "1 month ago",
      text: "AutoCAD and Revit installed directly from the official AutoDesk website using the educational license Digi Mind provided. Saved me thousands of rupees compared to retail!",
    },
  ];

  return (
    <section id="reviews" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-r from-blue-600/15 via-cyan-600/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 mb-4">
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
            <span>Customer Satisfaction & Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Verified Customer Reviews
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Over 500+ professionals, university students, and creators rely on Digi Mind for seamless account upgrades.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={DIGIMIND_FACEBOOK_PAGE}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-300 hover:text-white text-xs font-semibold transition-all cursor-pointer"
            >
              <span>Read Verified Reviews on Official Facebook Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* REVIEWS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-cyan-500/30 flex flex-col justify-between transition-all duration-300 shadow-xl bg-[#08102e]/90"
            >
              <div>
                {/* Rating & Product tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">{rev.date}</span>
                </div>

                <div className="text-xs font-semibold text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-lg border border-cyan-500/20 inline-block mb-3">
                  Purchased: {rev.product}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-white text-xs sm:text-sm">
                    <span>{rev.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <div className="text-[11px] text-slate-400">{rev.role}</div>
                  <div className="text-[10px] text-slate-500">{rev.location}</div>
                </div>

                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                  Verified Order
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* SATISFACTION STATS BAR */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center bg-[#070e28]/95">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono">4.9 / 5.0</div>
            <div className="text-xs text-slate-400 mt-1">Average Customer Rating</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono">500+</div>
            <div className="text-xs text-slate-400 mt-1">Verified Upgraded Accounts</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">100%</div>
            <div className="text-xs text-slate-400 mt-1">Replacement Warranty Honored</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-purple-400 font-mono">5 - 15m</div>
            <div className="text-xs text-slate-400 mt-1">Average Delivery Time</div>
          </div>
        </div>
      </div>
    </section>
  );
}
