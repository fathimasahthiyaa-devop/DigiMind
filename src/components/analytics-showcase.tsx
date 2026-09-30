"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  LineChart as LineChartIcon,
  Globe,
  Tag,
  Check,
  X,
  Sparkles,
  ArrowUpRight,
  Download,
  Filter,
  Layers,
  MapPin,
  Search,
} from "lucide-react";
import { useModal } from "./modal-provider";

export function AnalyticsShowcase() {
  const { openTrialModal } = useModal();
  const [selectedKeyword, setSelectedKeyword] = useState<string>("Product UX");
  const [activeGeo, setActiveGeo] = useState<string>("North America");

  const keywords = [
    { name: "Product UX", count: "38.4K", sentiment: "positive", score: "+94%" },
    { name: "Customer Support", count: "29.1K", sentiment: "positive", score: "+89%" },
    { name: "API Latency", count: "21.6K", sentiment: "positive", score: "+92%" },
    { name: "Pricing Value", count: "18.3K", sentiment: "neutral", score: "+64%" },
    { name: "Enterprise Security", count: "16.8K", sentiment: "positive", score: "+97%" },
    { name: "Automated Reports", count: "14.2K", sentiment: "positive", score: "+95%" },
    { name: "Setup Speed", count: "12.7K", sentiment: "positive", score: "+91%" },
    { name: "Delivery Inquiries", count: "8.4K", sentiment: "negative", score: "-38%" },
    { name: "Mobile App", count: "7.1K", sentiment: "neutral", score: "+58%" },
  ];

  const regions = [
    { name: "North America", share: "44.2%", volume: "63.1K mentions", sentiment: "81% Pos" },
    { name: "Europe (EMEA)", share: "30.8%", volume: "44.0K mentions", sentiment: "76% Pos" },
    { name: "Asia-Pacific", share: "18.1%", volume: "25.8K mentions", sentiment: "79% Pos" },
    { name: "Latin America", share: "6.9%", volume: "9.9K mentions", sentiment: "74% Pos" },
  ];

  return (
    <section id="analytics-showcase" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-cyan-600/15 via-blue-600/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 mb-4">
            <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Deep Visual Intelligence Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Enterprise Analytics Showcase
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A master-grade analytics suite engineered with precision charts, geographic heatmaps, and automated competitive indexing.
          </p>
        </div>

        {/* LARGE DASHBOARD CONTAINER */}
        <div className="glass-panel rounded-3xl p-5 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden bg-[#070e26]/95">
          {/* TOP NAV BAR OF DASHBOARD */}
          <div className="flex flex-wrap items-center justify-between pb-6 mb-6 border-b border-white/[0.08] gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white font-bold">
                IA
              </div>
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>InsightAI Global Brand Radar</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                    LIVE PRODUCTION
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  Global aggregate listening data • Updated every 5 seconds
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => openTrialModal()}
                className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-lg shadow-cyan-500/20"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export PDF Intelligence Deck</span>
              </button>
            </div>
          </div>

          {/* ROW 1: LINE CHARTS + BAR CHARTS + SENTIMENT BREAKDOWN */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
            {/* 1. Line Chart: Sentiment Velocity (7 cols) */}
            <div className="lg:col-span-7 glass-card p-5 rounded-2xl border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <LineChartIcon className="w-4 h-4 text-cyan-400" />
                    <span>Sentiment Trajectory vs Competitor Baseline (7 Days)</span>
                  </h4>
                  <p className="text-xs text-slate-400">Normalized Net Sentiment Score (-100 to +100)</p>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="flex items-center gap-1 text-cyan-300 font-medium">
                    <span className="w-2.5 h-1 bg-cyan-400 rounded-full" /> InsightAI (+78)
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <span className="w-2.5 h-1 bg-purple-500 rounded-full" /> Competitor Avg (+42)
                  </span>
                </div>
              </div>

              {/* Line Chart SVG */}
              <div className="h-56 w-full relative">
                <svg className="w-full h-full" viewBox="0 0 600 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Grid */}
                  <line x1="0" y1="40" x2="600" y2="40" stroke="rgba(255,255,255,0.05)" />
                  <line x1="0" y1="90" x2="600" y2="90" stroke="rgba(255,255,255,0.05)" />
                  <line x1="0" y1="140" x2="600" y2="140" stroke="rgba(255,255,255,0.05)" />
                  <line x1="0" y1="190" x2="600" y2="190" stroke="rgba(255,255,255,0.05)" />

                  {/* Competitor Avg line */}
                  <path
                    d="M0,120 Q100,140 200,130 T400,110 T600,125"
                    fill="none"
                    stroke="#a855f7"
                    strokeWidth="2.5"
                    strokeDasharray="4 4"
                  />

                  {/* InsightAI Area */}
                  <path
                    d="M0,100 C90,80 180,115 270,60 C360,25 450,55 540,25 L600,20 L600,195 L0,195 Z"
                    fill="url(#lineGrad)"
                  />

                  {/* InsightAI Stroke */}
                  <path
                    d="M0,100 C90,80 180,115 270,60 C360,25 450,55 540,25 L600,20"
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="3.5"
                  />

                  {/* Points */}
                  <circle cx="270" cy="60" r="4" fill="#22d3ee" />
                  <circle cx="540" cy="25" r="4" fill="#38bdf8" />
                  <circle cx="600" cy="20" r="5" fill="#38bdf8" className="animate-pulse" />
                </svg>

                {/* Floating tooltip */}
                <div className="absolute top-6 right-20 glass-card px-2.5 py-1 rounded-md text-[10px] text-cyan-300 border border-cyan-400/40">
                  Campaign Launch Surge (+32%)
                </div>
              </div>

              <div className="flex justify-between text-[11px] text-slate-400 pt-2 border-t border-white/5">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span className="text-cyan-400 font-semibold">Today (Sun)</span>
              </div>
            </div>

            {/* 2. Bar Chart: Share of Voice by Competitor (5 cols) */}
            <div className="lg:col-span-5 glass-card p-5 rounded-2xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-purple-400" />
                    <span>Share of Voice Benchmark</span>
                  </h4>
                  <span className="text-xs text-slate-400">Total 100%</span>
                </div>

                <div className="space-y-3.5">
                  {[
                    { brand: "InsightAI (You)", share: 38.4, color: "bg-gradient-to-r from-blue-500 to-cyan-400", highlight: true },
                    { brand: "Brandwatch", share: 24.1, color: "bg-slate-600", highlight: false },
                    { brand: "Sprout Social", share: 18.2, color: "bg-slate-600", highlight: false },
                    { brand: "Digimind", share: 12.3, color: "bg-purple-500/80", highlight: false },
                    { brand: "Others / Longtail", share: 7.0, color: "bg-slate-700", highlight: false },
                  ].map((b) => (
                    <div key={b.brand} className="space-y-1">
                      <div className="flex justify-between items-center text-xs">
                        <span className={b.highlight ? "font-bold text-cyan-300" : "text-slate-300"}>
                          {b.brand}
                        </span>
                        <span className={b.highlight ? "font-bold text-cyan-300 font-mono" : "text-slate-400 font-mono"}>
                          {b.share}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                        <div style={{ width: `${b.share}%` }} className={`h-full ${b.color} rounded-full`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span>InsightAI Lead Margin:</span>
                <span className="text-emerald-400 font-semibold">+14.3% vs Nearest Rival</span>
              </div>
            </div>
          </div>

          {/* ROW 2: GEOGRAPHIC AUDIENCE MAP + KEYWORD CLOUD */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
            {/* 3. Geographic Audience Map (7 cols) */}
            <div className="lg:col-span-7 glass-card p-5 rounded-2xl border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Globe className="w-4 h-4 text-cyan-400" />
                    <span>Geographic Audience & Sentiment Distribution</span>
                  </h4>
                  <p className="text-xs text-slate-400">Active regional conversation hubs</p>
                </div>
                <span className="text-xs text-cyan-400 font-mono">142 Global Markets</span>
              </div>

              {/* Styled SVG World Map Visual */}
              <div className="relative h-56 w-full rounded-xl bg-slate-950/60 border border-white/5 flex items-center justify-center p-4 overflow-hidden">
                {/* SVG Abstract World Map Dots */}
                <svg className="w-full h-full opacity-60" viewBox="0 0 800 400" fill="none">
                  {/* North America */}
                  <circle cx="220" cy="140" r="40" fill="rgba(6, 182, 212, 0.15)" />
                  <circle cx="220" cy="140" r="6" fill="#06b6d4" />
                  <circle cx="220" cy="140" r="14" stroke="#06b6d4" strokeWidth="1.5" className="animate-ping" opacity="0.4" />
                  <text x="175" y="115" fill="#38bdf8" fontSize="12" fontWeight="bold">North America (44%)</text>

                  {/* Europe */}
                  <circle cx="430" cy="130" r="32" fill="rgba(59, 130, 246, 0.15)" />
                  <circle cx="430" cy="130" r="5" fill="#3b82f6" />
                  <circle cx="430" cy="130" r="12" stroke="#3b82f6" strokeWidth="1.5" className="animate-ping" opacity="0.4" />
                  <text x="400" y="105" fill="#60a5fa" fontSize="12" fontWeight="bold">Europe (31%)</text>

                  {/* Asia Pacific */}
                  <circle cx="610" cy="170" r="28" fill="rgba(168, 85, 247, 0.15)" />
                  <circle cx="610" cy="170" r="5" fill="#a855f7" />
                  <circle cx="610" cy="170" r="12" stroke="#a855f7" strokeWidth="1.5" className="animate-ping" opacity="0.4" />
                  <text x="560" y="150" fill="#c084fc" fontSize="12" fontWeight="bold">APAC (18%)</text>

                  {/* Latin America */}
                  <circle cx="290" cy="280" r="22" fill="rgba(20, 184, 166, 0.15)" />
                  <circle cx="290" cy="280" r="4" fill="#14b8a6" />
                  <text x="240" y="260" fill="#2dd4bf" fontSize="11" fontWeight="bold">LatAm (7%)</text>

                  {/* Connecting Network Arcs */}
                  <path d="M220,140 Q325,90 430,130" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
                  <path d="M430,130 Q520,100 610,170" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
                  <path d="M220,140 Q240,210 290,280" stroke="#14b8a6" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
                </svg>

                {/* Regional Pills list inside map */}
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2 justify-center">
                  {regions.map((reg) => (
                    <button
                      key={reg.name}
                      onClick={() => setActiveGeo(reg.name)}
                      className={`px-3 py-1 rounded-lg text-[11px] font-medium transition-all ${
                        activeGeo === reg.name
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400"
                          : "bg-black/60 text-slate-400 border border-white/10 hover:text-white"
                      }`}
                    >
                      <span>{reg.name}: </span>
                      <span className="text-white font-semibold">{reg.share}</span>
                      <span className="text-emerald-400 ml-1">({reg.sentiment})</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Keyword Cloud with Sentiment Highlighting (5 cols) */}
            <div className="lg:col-span-5 glass-card p-5 rounded-2xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Tag className="w-4 h-4 text-cyan-400" />
                    <span>Trending Keyword Cloud & Sentiment</span>
                  </h4>
                  <span className="text-xs text-slate-400">Click to inspect</span>
                </div>

                <p className="text-xs text-slate-400 mb-4">
                  Autonomous entity clustering dynamically weighted by volume and emotional affinity.
                </p>

                {/* Interactive Keyword Cloud Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {keywords.map((kw) => {
                    const isSelected = selectedKeyword === kw.name;
                    return (
                      <button
                        key={kw.name}
                        onClick={() => setSelectedKeyword(kw.name)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                          isSelected
                            ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30 scale-105"
                            : kw.sentiment === "positive"
                            ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 hover:bg-emerald-500/20"
                            : kw.sentiment === "negative"
                            ? "bg-rose-500/10 text-rose-300 border border-rose-500/20 hover:bg-rose-500/20"
                            : "bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10"
                        }`}
                      >
                        <span>{kw.name}</span>
                        <span className={`text-[10px] ${isSelected ? "text-slate-950 font-extrabold" : "text-slate-400"}`}>
                          {kw.count}
                        </span>
                        <span className={`text-[10px] font-semibold ${isSelected ? "text-slate-950" : kw.sentiment === "negative" ? "text-rose-400" : "text-emerald-400"}`}>
                          {kw.score}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Keyword Selected Detail Box */}
              <div className="mt-4 p-3 rounded-xl bg-black/40 border border-white/5 text-xs flex items-center justify-between">
                <div>
                  <span className="text-slate-400">Inspecting: </span>
                  <span className="text-cyan-300 font-semibold">{selectedKeyword}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-400">Velocity: <strong className="text-emerald-400">+34%</strong></span>
                  <span className="text-slate-400">Context: <strong className="text-white">Product Satisfaction</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 3: COMPETITOR COMPARISON TABLE */}
          <div className="glass-card p-5 sm:p-6 rounded-2xl border border-white/10 overflow-x-auto">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-base font-bold text-white">
                  Enterprise Feature & Capability Comparison
                </h4>
                <p className="text-xs text-slate-400">
                  How InsightAI compares to legacy market listening architectures (Digimind, Brandwatch, Meltwater)
                </p>
              </div>
              <span className="text-xs text-cyan-400 font-mono hidden sm:inline">
                Independent Benchmark 2026
              </span>
            </div>

            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 font-medium">
                  <th className="py-3 px-4">Core Capability</th>
                  <th className="py-3 px-4 text-cyan-300 font-bold bg-cyan-950/40 rounded-t-lg">
                    InsightAI
                  </th>
                  <th className="py-3 px-4">Digimind</th>
                  <th className="py-3 px-4">Brandwatch</th>
                  <th className="py-3 px-4">Meltwater</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">
                    Real-time Alert Trigger Latency
                  </td>
                  <td className="py-3.5 px-4 font-bold text-cyan-300 bg-cyan-950/20">
                    &lt; 3.0 Seconds
                  </td>
                  <td className="py-3.5 px-4 text-slate-400">15 - 45 Minutes</td>
                  <td className="py-3.5 px-4 text-slate-400">20 - 60 Minutes</td>
                  <td className="py-3.5 px-4 text-slate-400">30+ Minutes</td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">
                    Sarcasm, Irony & Slang Classification
                  </td>
                  <td className="py-3.5 px-4 font-bold text-emerald-400 bg-cyan-950/20 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-400" /> 99.4% Fine-Tuned NLP
                  </td>
                  <td className="py-3.5 px-4 text-slate-400">~72% Keyword-Based</td>
                  <td className="py-3.5 px-4 text-slate-400">~76% Standard ML</td>
                  <td className="py-3.5 px-4 text-slate-400">~68% Dictionary</td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">
                    Multimodal Video, Reels & Podcast Listening
                  </td>
                  <td className="py-3.5 px-4 font-bold text-emerald-400 bg-cyan-950/20 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-400" /> Native Audio & Vision AI
                  </td>
                  <td className="py-3.5 px-4 text-slate-500">Limited (Text only)</td>
                  <td className="py-3.5 px-4 text-slate-500">Add-on module ($$$)</td>
                  <td className="py-3.5 px-4 text-slate-500">Partial / Delayed</td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">
                    Conversational AI Copilot (Natural Chat)
                  </td>
                  <td className="py-3.5 px-4 font-bold text-emerald-400 bg-cyan-950/20 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-400" /> Included (InsightAI Agent)
                  </td>
                  <td className="py-3.5 px-4 text-rose-400 flex items-center gap-1">
                    <X className="w-4 h-4 text-rose-500" /> Not Available
                  </td>
                  <td className="py-3.5 px-4 text-slate-500">Basic Prompt Assistant</td>
                  <td className="py-3.5 px-4 text-rose-400 flex items-center gap-1">
                    <X className="w-4 h-4 text-rose-500" /> Not Available
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">
                    Predictive 30-Day Trend Forecasting
                  </td>
                  <td className="py-3.5 px-4 font-bold text-emerald-400 bg-cyan-950/20 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-400" /> Predictive ML Models
                  </td>
                  <td className="py-3.5 px-4 text-slate-500">Historical only</td>
                  <td className="py-3.5 px-4 text-slate-500">Historical only</td>
                  <td className="py-3.5 px-4 text-slate-500">Historical only</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
