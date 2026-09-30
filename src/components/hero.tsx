"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Play,
  TrendingUp,
  Activity,
  ShieldCheck,
  CheckCircle2,
  Zap,
  BarChart2,
  Users,
  MessageSquare,
  Share2,
  Eye,
  Flame,
  Bot,
} from "lucide-react";
import { useModal } from "./modal-provider";

export function Hero() {
  const { openTrialModal, openDemoModal } = useModal();
  const [pulseCount, setPulseCount] = useState(142850);
  const [activeTab, setActiveTab] = useState<"sentiment" | "competitors" | "insights">("sentiment");

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseCount((prev) => prev + Math.floor(Math.random() * 5) + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* GLOW ACCENTS */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/20 via-cyan-500/25 to-purple-600/20 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP BADGE */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs sm:text-sm font-medium text-slate-200 shadow-lg shadow-cyan-500/10 hover:border-cyan-400/60 transition-all cursor-pointer group"
            onClick={() => openTrialModal()}
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-cyan-300 font-semibold">InsightAI 3.0:</span>
            <span className="text-slate-300">Autonomous Trend Forecasting & Multimodal Listening</span>
            <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
          </motion.div>
        </div>

        {/* HEADLINE & SUBHEADLINE */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] sm:leading-[1.12]"
          >
            Transform Business Data Into{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI-Powered Decisions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed"
          >
            Monitor conversations, understand customers, analyze competitors, and predict
            market trends with advanced artificial intelligence.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => openTrialModal("Professional")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-base shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 group transition-all cursor-pointer hover:scale-[1.02]"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Start Free Trial</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={openDemoModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card border border-white/10 hover:border-cyan-500/40 text-slate-200 hover:text-white font-semibold text-base flex items-center justify-center gap-2.5 transition-all cursor-pointer hover:bg-white/5"
            >
              <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>
              <span>Request Demo</span>
            </button>
          </motion.div>

          {/* SOCIAL PROOF TAGS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" /> No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" /> 14-day enterprise trial
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Setup in under 3 minutes
            </span>
          </motion.div>
        </div>

        {/* HERO VISUAL: ANIMATED AI ANALYTICS DASHBOARD MOCKUP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="relative max-w-6xl mx-auto mt-8"
        >
          {/* Mockup Outer Glass Border */}
          <div className="relative rounded-2xl md:rounded-3xl p-2 sm:p-3 bg-gradient-to-b from-white/15 via-white/5 to-transparent border border-white/10 shadow-2xl shadow-blue-900/40">
            {/* Dashboard Inner Shell */}
            <div className="rounded-xl md:rounded-2xl bg-[#070d24]/95 border border-white/5 overflow-hidden backdrop-blur-2xl">
              {/* Dashboard Header Bar */}
              <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/[0.08] bg-[#09112e]/80">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="h-4 w-[1px] bg-white/10 mx-1 hidden sm:block" />
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                    <span className="px-2 py-0.5 rounded bg-blue-500/10 text-cyan-400 border border-cyan-500/20 font-mono">
                      LIVE STREAM
                    </span>
                    <span className="text-slate-400 hidden sm:inline">
                      Global Ingestion Active
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-4 mt-2 sm:mt-0">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 text-xs text-slate-300 border border-white/5">
                    <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                    <span>{pulseCount.toLocaleString()} events analyzed</span>
                  </div>

                  <div className="flex items-center bg-black/40 rounded-lg p-0.5 border border-white/5">
                    {(["sentiment", "competitors", "insights"] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-2.5 py-1 text-xs font-medium capitalize rounded-md transition-all ${
                          activeTab === tab
                            ? "bg-cyan-500 text-slate-950 font-semibold shadow-sm"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dashboard Content Grid */}
              <div className="p-4 sm:p-6 lg:p-7 grid grid-cols-1 lg:grid-cols-12 gap-5">
                {/* LEFT COLUMN: Main Chart & Trending Topics (8 cols) */}
                <div className="lg:col-span-8 space-y-5">
                  {/* Top Stats Banner */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="glass-card p-3 rounded-xl border border-white/5">
                      <div className="text-[11px] font-medium text-slate-400 flex items-center justify-between">
                        <span>Brand Sentiment</span>
                        <span className="text-emerald-400 font-semibold">+14.2%</span>
                      </div>
                      <div className="text-xl font-bold text-white mt-1">78% Positive</div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden flex">
                        <div className="bg-emerald-400 h-full w-[78%]" />
                        <div className="bg-blue-400 h-full w-[15%]" />
                        <div className="bg-rose-500 h-full w-[7%]" />
                      </div>
                    </div>

                    <div className="glass-card p-3 rounded-xl border border-white/5">
                      <div className="text-[11px] font-medium text-slate-400 flex items-center justify-between">
                        <span>Social Mentions</span>
                        <span className="text-cyan-400 font-semibold">+24.5%</span>
                      </div>
                      <div className="text-xl font-bold text-white mt-1">142.8K</div>
                      <div className="text-[11px] text-slate-400 mt-1">across 14 channels</div>
                    </div>

                    <div className="glass-card p-3 rounded-xl border border-white/5">
                      <div className="text-[11px] font-medium text-slate-400 flex items-center justify-between">
                        <span>Share of Voice</span>
                        <span className="text-purple-400 font-semibold">Rank #1</span>
                      </div>
                      <div className="text-xl font-bold text-white mt-1">38.4%</div>
                      <div className="text-[11px] text-slate-400 mt-1">+6.1% vs nearest rival</div>
                    </div>

                    <div className="glass-card p-3 rounded-xl border border-white/5">
                      <div className="text-[11px] font-medium text-slate-400 flex items-center justify-between">
                        <span>Engagement</span>
                        <span className="text-emerald-400 font-semibold">+1.2%</span>
                      </div>
                      <div className="text-xl font-bold text-white mt-1">4.82%</div>
                      <div className="text-[11px] text-slate-400 mt-1">Benchmark: 3.1%</div>
                    </div>
                  </div>

                  {/* Real-time Sentiment Graph Container */}
                  <div className="glass-card p-4 sm:p-5 rounded-xl border border-white/5 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-sm font-semibold text-white flex items-center gap-2">
                          <Activity className="w-4 h-4 text-cyan-400" />
                          <span>Real-Time Sentiment Velocity & Volume</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">
                          Autonomous AI classification updated every 3.2 seconds
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          Bullish Momentum
                        </span>
                      </div>
                    </div>

                    {/* Animated SVG Chart */}
                    <div className="relative h-52 w-full">
                      <svg
                        className="w-full h-full overflow-visible"
                        viewBox="0 0 700 200"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient id="heroGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.45" />
                            <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                          </linearGradient>
                          <linearGradient id="competitorGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                          </linearGradient>
                        </defs>

                        {/* Chart Grid Lines */}
                        <line x1="0" y1="40" x2="700" y2="40" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                        <line x1="0" y1="90" x2="700" y2="90" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                        <line x1="0" y1="140" x2="700" y2="140" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                        <line x1="0" y1="190" x2="700" y2="190" stroke="rgba(255,255,255,0.06)" />

                        {/* Competitor Line (Purple) */}
                        <path
                          d="M0,130 C100,120 180,145 280,110 C380,80 480,135 580,115 C640,105 680,120 700,110"
                          fill="none"
                          stroke="#a855f7"
                          strokeWidth="2"
                          strokeDasharray="5 5"
                          opacity="0.6"
                        />

                        {/* Primary Brand Area Fill */}
                        <path
                          d="M0,110 C80,95 160,130 240,75 C320,40 400,85 480,35 C560,15 620,45 700,20 L700,190 L0,190 Z"
                          fill="url(#heroGradient)"
                        />

                        {/* Primary Brand Line (Electric Blue / Cyan) */}
                        <path
                          d="M0,110 C80,95 160,130 240,75 C320,40 400,85 480,35 C560,15 620,45 700,20"
                          fill="none"
                          stroke="#22d3ee"
                          strokeWidth="3.5"
                        />

                        {/* Live pulsating beacon point */}
                        <circle cx="480" cy="35" r="5" fill="#22d3ee" className="animate-pulse" />
                        <circle cx="480" cy="35" r="12" fill="none" stroke="#22d3ee" opacity="0.4" className="animate-ping" />

                        {/* Peak Point Annotation */}
                        <circle cx="700" cy="20" r="5" fill="#38bdf8" />
                      </svg>

                      {/* Floating Data Badge over chart */}
                      <div className="absolute top-4 right-12 glass-panel px-3 py-1.5 rounded-lg border border-cyan-400/40 text-[11px] shadow-lg flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-400" />
                        <span className="text-white font-semibold">Peak Sentiment: 88.4%</span>
                        <span className="text-cyan-300 font-mono">14:00 GMT</span>
                      </div>
                    </div>

                    {/* Chart Timeline Labels */}
                    <div className="flex justify-between items-center text-[10px] text-slate-400 pt-2 border-t border-white/5">
                      <span>06:00</span>
                      <span>09:00</span>
                      <span>12:00</span>
                      <span>15:00</span>
                      <span>18:00</span>
                      <span>21:00</span>
                      <span className="text-cyan-400 font-medium">Live Now</span>
                    </div>
                  </div>

                  {/* Trending Topics Bar */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-amber-400" /> Trending Topics:
                    </span>
                    {[
                      { tag: "#AIAssistant", change: "+129%", hot: true },
                      { tag: "#ProductLaunch2026", change: "+84%", hot: true },
                      { tag: "#SustainableTech", change: "+52%", hot: false },
                      { tag: "#CustomerExperience", change: "+38%", hot: false },
                    ].map((item) => (
                      <span
                        key={item.tag}
                        className={`text-xs px-2.5 py-1 rounded-full border transition-all cursor-pointer flex items-center gap-1 ${
                          item.hot
                            ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20"
                            : "bg-white/5 border-white/5 text-slate-300 hover:bg-white/10"
                        }`}
                      >
                        <span>{item.tag}</span>
                        <span className="text-[10px] font-semibold text-emerald-400">
                          {item.change}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* RIGHT COLUMN: Live Monitoring Feed & AI Insight (4 cols) */}
                <div className="lg:col-span-4 space-y-4">
                  {/* AI Generated Insight Card */}
                  <div className="relative rounded-xl p-4 bg-gradient-to-br from-blue-950/80 via-indigo-950/70 to-[#070d24] border border-cyan-500/40 shadow-xl shadow-cyan-500/10">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-300">
                        <Bot className="w-4 h-4 text-cyan-400" />
                        <span>AI Generated Executive Insight</span>
                      </div>
                      <span className="text-[10px] text-slate-400">Just now</span>
                    </div>
                    <p className="text-sm font-medium text-slate-100 leading-snug">
                      &ldquo;Customer engagement increased by <span className="text-cyan-300 font-bold">32%</span> after recent campaign launch. Positive sentiment is concentrated in enterprise productivity features.&rdquo;
                    </p>
                    <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs">
                      <span className="text-emerald-400 flex items-center gap-1 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5" /> High Confidence 98.7%
                      </span>
                      <button
                        onClick={openDemoModal}
                        className="text-cyan-400 hover:text-cyan-300 font-medium cursor-pointer"
                      >
                        Deep Dive →
                      </button>
                    </div>
                  </div>

                  {/* Competitor Comparison Mini Card */}
                  <div className="glass-card p-4 rounded-xl border border-white/5">
                    <div className="flex items-center justify-between text-xs font-semibold text-white mb-3">
                      <span>Competitor Share of Voice</span>
                      <span className="text-slate-400 text-[11px]">7D Benchmark</span>
                    </div>
                    <div className="space-y-2.5">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-cyan-300 font-semibold">InsightAI (Your Brand)</span>
                          <span className="text-cyan-300 font-bold">78%</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 w-[78%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-slate-400">Legacy Competitor A</span>
                          <span className="text-slate-300">54%</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-slate-600 w-[54%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-slate-400">Legacy Competitor B</span>
                          <span className="text-slate-300">41%</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-slate-700 w-[41%]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Brand Monitoring Live Cards */}
                  <div className="glass-card p-4 rounded-xl border border-white/5 space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold text-white">
                      <span>Live Mentions Ingestion</span>
                      <span className="flex items-center gap-1 text-emerald-400 text-[11px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        Listening
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-200">@techlead_sarah</span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 font-semibold">
                          +0.94 Pos
                        </span>
                      </div>
                      <p className="text-slate-400 line-clamp-2 text-[11px]">
                        InsightAI flagged our PR issue 2 hours before Twitter exploded. Best software investment this year.
                      </p>
                      <div className="text-[10px] text-slate-500 flex items-center justify-between pt-1">
                        <span>X (Twitter) • 4.2k impressions</span>
                        <span>12s ago</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-200">r/dataengineering</span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] bg-blue-500/10 text-cyan-400 font-semibold">
                          +0.88 Pos
                        </span>
                      </div>
                      <p className="text-slate-400 line-clamp-2 text-[11px]">
                        Benchmark testing InsightAI sentiment NLP vs Digimind. InsightAI handles sarcastic nuance 3x better.
                      </p>
                      <div className="text-[10px] text-slate-500 flex items-center justify-between pt-1">
                        <span>Reddit • 312 upvotes</span>
                        <span>48s ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* LOGO MARQUEE / ENTERPRISE SOCIAL PROOF */}
        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-6">
            Empowering Market Leaders & Fortune 500 Intelligence Teams
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-60 grayscale hover:grayscale-0 transition-all">
            {["VERTEX", "NOVAPHI", "ACME CORP", "SYNTHESIA", "OMNICOM", "CLOUDSCALE"].map(
              (brand, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 font-mono font-bold text-sm sm:text-base text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <div className="w-2 h-2 rounded-sm bg-cyan-400" />
                  <span>{brand}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
