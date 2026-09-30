"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Radio,
  Swords,
  FileText,
  TrendingUp,
  BellRing,
  Users2,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Layers,
  LineChart,
  BrainCircuit,
  Zap,
} from "lucide-react";
import { useModal } from "./modal-provider";

export function Features() {
  const { openTrialModal } = useModal();
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      title: "AI Social Listening",
      description:
        "Track conversations across social media, news, forums, and digital platforms with sub-second multilingual ingestion.",
      icon: Radio,
      badge: "Multimodal NLP",
      accent: "from-blue-500 to-cyan-400",
      metrics: "250M+ Sources Monitored",
      highlights: [
        "Covers X, Reddit, TikTok, LinkedIn, YouTube & podcasts",
        "Deep sentiment context (sarcasm, humor, slang recognition)",
        "Spam and bot filter removes 99.8% noisy chatter",
      ],
      preview: {
        type: "listening",
        feed: [
          { user: "@alex_fintech", text: "InsightAI is light years ahead of Digimind for fast crisis alerts.", tag: "Positive 96%" },
          { user: "@growth_lead", text: "New campaign engagement reached +44% above forecast.", tag: "Positive 91%" },
        ],
      },
    },
    {
      id: 2,
      title: "Competitor Intelligence",
      description:
        "Compare competitors, campaigns, audience reactions, and market performance in real time.",
      icon: Swords,
      badge: "Market Benchmarking",
      accent: "from-purple-500 to-indigo-400",
      metrics: "Zero-Latency Radar",
      highlights: [
        "Head-to-head Share of Voice and sentiment indexing",
        "Competitor product launch and campaign response tracking",
        "Audience migration detection and churn risk signals",
      ],
      preview: {
        type: "competitor",
        scores: [
          { name: "Your Brand", score: 84, color: "bg-cyan-400" },
          { name: "Competitor A", score: 62, color: "bg-purple-400" },
          { name: "Competitor B", score: 51, color: "bg-slate-600" },
        ],
      },
    },
    {
      id: 3,
      title: "AI Reports",
      description:
        "Automatically generate business reports and actionable recommendations tailored for C-suite and stakeholders.",
      icon: FileText,
      badge: "Autonomous Synthesis",
      accent: "from-emerald-500 to-teal-400",
      metrics: "Instant PDF & Slide Decks",
      highlights: [
        "Executive briefings ready in under 60 seconds",
        "Direct export to PDF, Google Slides, and Slack channels",
        "Generates qualitative summaries and ROI attributions",
      ],
      preview: {
        type: "reports",
        title: "Q3 Brand Intelligence & Crisis Audit",
        pages: "18 pages • Auto-generated 4m ago",
        status: "Ready for Board Review",
      },
    },
    {
      id: 4,
      title: "Trend Prediction",
      description:
        "Use AI models to identify upcoming market opportunities before they break into mainstream consciousness.",
      icon: TrendingUp,
      badge: "Predictive Analytics",
      accent: "from-amber-500 to-orange-400",
      metrics: "88.6% Forecast Accuracy",
      highlights: [
        "Identifies viral meme and thematic velocity 72 hours early",
        "Consumer demand forecasting and unserved topic niches",
        "Seasonal search intent and sentiment trajectory analysis",
      ],
      preview: {
        type: "trend",
        topics: [
          { name: "Autonomous Workflows", surge: "+164%", velocity: "Explosive" },
          { name: "Privacy-Preserving Analytics", surge: "+92%", velocity: "Strong" },
        ],
      },
    },
    {
      id: 5,
      title: "Real-Time Alerts",
      description:
        "Receive instant notifications when important events, sentiment drops, or viral discussions happen.",
      icon: BellRing,
      badge: "Anomaly Detection",
      accent: "from-rose-500 to-pink-400",
      metrics: "< 3s Alert Trigger Latency",
      highlights: [
        "Smart anomaly thresholding eliminates alert fatigue",
        "Instant dispatch to Slack, Teams, Email, SMS & Webhooks",
        "Includes root-cause diagnostic with every spike alert",
      ],
      preview: {
        type: "alerts",
        active: "1 Alert Mitigated",
        message: "Negative spike detected in EU Logistics → Resolved in 14 mins",
      },
    },
    {
      id: 6,
      title: "Customer Analysis",
      description:
        "Understand customer behavior, unspoken pain points, and demographic preferences with deep psychological profiling.",
      icon: Users2,
      badge: "Audience DNA",
      accent: "from-cyan-500 to-blue-500",
      metrics: "Multidimensional Personas",
      highlights: [
        "Maps user sentiment against feature requests and churn intent",
        "Segment by geography, seniority, platform, and affinity",
        "Net Promoter Score (NPS) estimation from organic text",
      ],
      preview: {
        type: "customer",
        personas: [
          { label: "Enterprise Tech Buyers", affinity: "94% Security Focus" },
          { label: "Agency Campaign Planners", affinity: "89% Speed Focus" },
        ],
      },
    },
  ];

  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-gradient-to-r from-blue-600/15 via-purple-600/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Comprehensive Enterprise Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Engineered for Unmatched{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Market Intelligence
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Six foundational AI engines working synchronously to extract truth from billions of unstructured data points.
          </p>
        </div>

        {/* 6 PREMIUM FEATURE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl glass-card border border-white/10 hover:border-cyan-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl overflow-hidden hover:shadow-cyan-500/10"
              >
                {/* Ambient Card Glow on Hover */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-2xl group-hover:from-cyan-500/25 transition-all pointer-events-none" />

                <div>
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.accent} p-[1px] shadow-lg shadow-cyan-500/10 group-hover:shadow-cyan-500/30 transition-all`}
                    >
                      <div className="w-full h-full bg-[#070e24] rounded-[11px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                      </div>
                    </div>

                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Feature Highlights List */}
                  <div className="mt-5 space-y-2">
                    {feature.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Micro Visual Preview Box */}
                  <div className="mt-6 p-3 rounded-xl bg-black/40 border border-white/5 text-xs">
                    {feature.preview.type === "listening" && (
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono">
                          <span>LIVE FEED STREAM</span>
                          <span className="text-emerald-400 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                            Connected
                          </span>
                        </div>
                        {feature.preview.feed?.map((item, idx) => (
                          <div key={idx} className="p-1.5 rounded bg-white/[0.02] border border-white/5 text-[11px]">
                            <div className="flex justify-between text-slate-300 font-medium">
                              <span>{item.user}</span>
                              <span className="text-emerald-400 text-[10px]">{item.tag}</span>
                            </div>
                            <p className="text-slate-400 text-[10px] truncate">{item.text}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {feature.preview.type === "competitor" && (
                      <div className="space-y-2">
                        <div className="text-[10px] text-slate-400 font-mono">SOV PERFORMANCE</div>
                        {feature.preview.scores?.map((sc, idx) => (
                          <div key={idx} className="space-y-1">
                            <div className="flex justify-between text-[11px]">
                              <span className="text-slate-300 font-medium">{sc.name}</span>
                              <span className="text-white font-mono">{sc.score}%</span>
                            </div>
                            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                              <div style={{ width: `${sc.score}%` }} className={`h-full ${sc.color}`} />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {feature.preview.type === "reports" && (
                      <div className="space-y-1 text-slate-300">
                        <div className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> {feature.preview.status}
                        </div>
                        <div className="font-semibold text-white text-xs">{feature.preview.title}</div>
                        <div className="text-[10px] text-slate-400">{feature.preview.pages}</div>
                      </div>
                    )}

                    {feature.preview.type === "trend" && (
                      <div className="space-y-1.5">
                        <div className="text-[10px] text-amber-400 font-mono">EMERGING BREAKOUT TOPICS</div>
                        {feature.preview.topics?.map((top, idx) => (
                          <div key={idx} className="flex justify-between items-center text-[11px]">
                            <span className="text-slate-200">{top.name}</span>
                            <span className="text-emerald-400 font-bold">{top.surge}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {feature.preview.type === "alerts" && (
                      <div className="space-y-1">
                        <div className="text-[10px] text-rose-400 font-mono flex items-center gap-1">
                          <Zap className="w-3 h-3" /> {feature.preview.active}
                        </div>
                        <p className="text-[11px] text-slate-200">{feature.preview.message}</p>
                      </div>
                    )}

                    {feature.preview.type === "customer" && (
                      <div className="space-y-1">
                        <div className="text-[10px] text-cyan-400 font-mono">TOP DETECTED PERSONAS</div>
                        {feature.preview.personas?.map((p, idx) => (
                          <div key={idx} className="flex justify-between text-[11px]">
                            <span className="text-slate-200">{p.label}</span>
                            <span className="text-cyan-300 text-[10px] font-medium">{p.affinity}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 font-medium">
                    {feature.metrics}
                  </span>
                  <button
                    onClick={() => openTrialModal(feature.title)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-300 group-hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <span>Test Feature</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
