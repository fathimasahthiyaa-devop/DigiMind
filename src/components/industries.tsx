"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  ShoppingBag,
  Building,
  Tv,
  Rocket,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { useModal } from "./modal-provider";

export function Industries() {
  const { openTrialModal, openDemoModal } = useModal();
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  const industries = [
    {
      id: "agencies",
      title: "Marketing Agencies",
      icon: Briefcase,
      tagline: "Win pitches and automate multi-client intelligence decks",
      description:
        "Manage dozens of client brands from a single pane of glass. Generate white-label executive slide presentations and uncover competitor vulnerabilities to win client RFPs.",
      kpis: [
        { label: "Reporting Time Saved", value: "30+ hrs/wk" },
        { label: "New Pitch Win Rate", value: "+38%" },
        { label: "Client Retention", value: "97.4%" },
      ],
      features: [
        "White-label client reporting with custom agency branding",
        "Multi-tenant workspace isolation with role permissions",
        "Instant competitive benchmark audits for new prospect pitches",
      ],
      quote:
        "“InsightAI replaced our patchwork of 3 legacy tools. Our agency pitches now open with predictive intelligence that competitors cannot match.”",
      author: "Elena Rostova, VP Strategy at Omnicom Global",
      accent: "from-blue-500 to-cyan-400",
    },
    {
      id: "ecommerce",
      title: "E-commerce Brands",
      icon: ShoppingBag,
      tagline: "Uncover review pain points and optimize viral social ROAS",
      description:
        "Detect product defects, sizing issues, and shipping bottlenecks before they explode into public PR headaches. Turn organic customer praise into high-converting ad hooks.",
      kpis: [
        { label: "Return Rate Reduction", value: "-22%" },
        { label: "Campaign ROAS Boost", value: "+44%" },
        { label: "Crisis Mitigation", value: "14 mins avg" },
      ],
      features: [
        "Real-time review scraping across Amazon, Trustpilot & Shopify",
        "Influencer sponsorship ROI & sentiment attribution",
        "Unboxing video transcription and micro-emotion analysis",
      ],
      quote:
        "“We caught a packaging defect in our holiday release within 2 hours of unboxing videos going live. Saved us over $400,000 in returns.”",
      author: "Marcus Vance, Head of Growth at Lumina Goods",
      accent: "from-pink-500 to-rose-400",
    },
    {
      id: "enterprise",
      title: "Enterprise Companies",
      icon: Building,
      tagline: "Global brand protection and executive risk intelligence",
      description:
        "Built for multinational enterprises requiring strict SOC2 Type II compliance, custom VPC deployments, single-sign-on (SSO), and continuous brand reputation monitoring.",
      kpis: [
        { label: "Global Coverage", value: "140+ countries" },
        { label: "Crisis SLA", value: "< 3 seconds" },
        { label: "Compliance", value: "SOC2 Type II" },
      ],
      features: [
        "Private VPC deployment with customer-managed encryption keys",
        "Cross-subsidiary governance and executive crisis escalation",
        "Regulatory & ESG compliance sentiment audits",
      ],
      quote:
        "“For our Fortune 100 enterprise, data privacy was non-negotiable. InsightAI gave us modern generative AI without exposing our data to third-party models.”",
      author: "David Sterling, Chief Risk & Data Officer",
      accent: "from-cyan-400 to-blue-600",
    },
    {
      id: "media",
      title: "Media Companies",
      icon: Tv,
      tagline: "Predict trending viral narratives before mainstream pickup",
      description:
        "Empower editorial newsrooms and production studios with predictive narrative discovery. See which stories have explosive virality potential 48 hours before competitors.",
      kpis: [
        { label: "Story Pickup Lead Time", value: "18 hrs earlier" },
        { label: "Audience Retention", value: "+32%" },
        { label: "Social Virality Index", value: "98.2% accuracy" },
      ],
      features: [
        "Predictive story velocity radar across social networks",
        "Audience polarizing factor and sentiment breakdown",
        "Broadcast audio and video automated transcription",
      ],
      quote:
        "“Our journalists use InsightAI hourly. It’s like having an autonomous research bureau that monitors every language on earth simultaneously.”",
      author: "Claire Dupont, Managing Editor at Global Wire",
      accent: "from-purple-500 to-indigo-400",
    },
    {
      id: "startups",
      title: "Startups",
      icon: Rocket,
      tagline: "Rapid product-market validation and competitor disruption",
      description:
        "Don't build in the dark. Discover the exact unmet customer frustrations with incumbents and pinpoint market gaps with quantitative sentiment evidence.",
      kpis: [
        { label: "Feature Validation", value: "4x faster" },
        { label: "CAC Reduction", value: "-36%" },
        { label: "Early Adopter Reach", value: "+210%" },
      ],
      features: [
        "Incumbent churn intent listener (find unhappy users looking to switch)",
        "Zero-configuration setup in under 5 minutes",
        "Affordable pricing with startup accelerator discounts",
      ],
      quote:
        "“InsightAI helped us identify our killer product feature by analyzing 50,000 complaints about legacy market leaders. That insight led directly to our Series A.”",
      author: "Julian Thorne, Founder & CEO at FlowMetrics",
      accent: "from-amber-400 to-orange-500",
    },
  ];

  return (
    <section id="industries" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gradient-to-r from-blue-600/15 via-cyan-600/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Tailored Industry Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Built for High-Impact Teams Across Every Sector
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Discover how leading organizations turn social noise into quantifiable market dominance.
          </p>
        </div>

        {/* INDUSTRY SELECTOR TABS */}
        <div className="flex justify-center mb-10 overflow-x-auto no-scrollbar pb-2">
          <div className="glass-panel p-1.5 rounded-2xl border border-white/10 flex items-center gap-1.5">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              const isSelected = selectedIndustry === idx;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(idx)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? "bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{ind.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ACTIVE INDUSTRY SHOWCASE CARD */}
        {(() => {
          const current = industries[selectedIndustry];
          const Icon = current.icon;
          return (
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl bg-[#08102e]/95"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* LEFT: Context, Description & Highlights (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${current.accent} p-[1px] shadow-lg`}
                    >
                      <div className="w-full h-full bg-[#050816] rounded-[11px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white">
                        {current.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-cyan-300 font-medium">
                        {current.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {current.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 pt-2">
                    {current.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Customer Quote Box */}
                  <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                    <p className="text-xs sm:text-sm italic text-slate-300">{current.quote}</p>
                    <div className="text-xs font-semibold text-cyan-400 font-mono">
                      — {current.author}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button
                      onClick={() => openTrialModal(current.title)}
                      className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all cursor-pointer flex items-center gap-2"
                    >
                      <span>Deploy for {current.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={openDemoModal}
                      className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/10 transition-colors cursor-pointer"
                    >
                      Book Custom Architecture Review
                    </button>
                  </div>
                </div>

                {/* RIGHT: High-Impact KPI Metrics & Live Radar Card (5 cols) */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
                    <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                      <span>VERIFIED IMPACT METRICS</span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5" /> ROI Confirmed
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      {current.kpis.map((kpi, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between"
                        >
                          <span className="text-xs text-slate-300 font-medium">{kpi.label}</span>
                          <span className="text-lg font-extrabold text-cyan-300 font-mono">
                            {kpi.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                      <span>Avg Deployment Time:</span>
                      <span className="text-white font-semibold">Under 48 Hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })()}
      </div>
    </section>
  );
}
