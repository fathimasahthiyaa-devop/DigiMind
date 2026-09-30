"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2, Sparkles, Building2, TrendingUp } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Evelyn Reed",
      role: "VP Global Brand Intelligence",
      company: "Novartis Consumer Care",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
      rating: 5,
      impact: "84% Faster Crisis Resolution",
      quote:
        "InsightAI has completely rewritten our brand risk protocol. We detected an anomalous European packaging complaint wave within 12 minutes—preventing a full-scale regional recall. It is vastly superior to the legacy listening suites we relied on for years.",
    },
    {
      name: "Alexander Thorne",
      role: "Chief Communications Officer",
      company: "Apex Global FinTech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
      rating: 5,
      impact: "+38% Share of Voice Lead",
      quote:
        "The competitor intelligence module is ruthless in its precision. We track every major PR move from rival fintechs in real time. The AI Copilot summarizes millions of tweets and Reddit threads into a single crisp paragraph our board actually reads.",
    },
    {
      name: "Sophia Chen",
      role: "Head of Omnichannel Insights",
      company: "Aura DTC Brands",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
      rating: 5,
      impact: "-28% Customer Churn",
      quote:
        "The review sentiment classification is unbelievably accurate with sarcasm and colloquial humor. We identified the exact friction in our checkout flow in 48 hours, saving hundreds of thousands in lost conversion revenue.",
    },
    {
      name: "Marcus Vance",
      role: "Managing Director",
      company: "Vanguard Media & PR",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
      rating: 5,
      impact: "40+ Client Accounts Scaled",
      quote:
        "Generating executive slide decks used to eat up two full days of analyst time every Friday. With InsightAI's automated reports, our team generates board-ready deliverables in 60 seconds with zero manual data crunching.",
    },
    {
      name: "Camilla Lindqvist",
      role: "Director of Market Research",
      company: "Nordic Streaming Media",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&q=80",
      rating: 5,
      impact: "99.4% Topic Prediction",
      quote:
        "The predictive trend modeling picked up an emerging audio format discussion 3 weeks before our editorial competitors noticed it. That scoop generated over 4 million pageviews for our publication network.",
    },
    {
      name: "Jordan Rivera",
      role: "Chief Marketing Officer",
      company: "HyperScale Infrastructure",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&q=80",
      rating: 5,
      impact: "$1.4M Enterprise Attribution",
      quote:
        "We migrated our entire market intelligence operations from Digimind to InsightAI in under a week. The multilingual listening and real-time webhook latency are genuinely unmatched in the enterprise SaaS ecosystem.",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-r from-blue-600/15 via-cyan-600/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Proven Enterprise Validation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Trusted by the World&apos;s Leading{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Brand Strategists
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Hear how enterprise marketing, PR, and analytics leaders transform brand data into quantifiable business triumphs.
          </p>
        </div>

        {/* TESTIMONIALS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-cyan-500/30 flex flex-col justify-between transition-all duration-300 shadow-xl relative overflow-hidden"
            >
              <div>
                {/* Top: Rating stars & Impact badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                    {item.impact}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.quote}
                </p>
              </div>

              {/* Author Profile */}
              <div className="pt-4 border-t border-white/5 flex items-center gap-3.5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border border-cyan-400/30 shadow-md"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-white text-sm">{item.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <div className="text-xs text-slate-400">{item.role}</div>
                  <div className="text-xs font-semibold text-cyan-300 flex items-center gap-1 mt-0.5">
                    <Building2 className="w-3 h-3" />
                    <span>{item.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM METRICS BANNER */}
        <div className="mt-16 glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono">99.4%</div>
            <div className="text-xs text-slate-400 mt-1">Sentiment Accuracy Rate</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono">250M+</div>
            <div className="text-xs text-slate-400 mt-1">Daily Conversations Analyzed</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-purple-400 font-mono">&lt; 3.0s</div>
            <div className="text-xs text-slate-400 mt-1">Real-Time Threat Detection</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">84%</div>
            <div className="text-xs text-slate-400 mt-1">Reduction in Reporting Overhead</div>
          </div>
        </div>
      </div>
    </section>
  );
}
