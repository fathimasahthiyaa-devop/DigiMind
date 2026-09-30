"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Activity,
  Bot,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  Download,
  RefreshCw,
  Bell,
  MessageCircle,
  Share2,
  Globe,
  CheckCircle,
  AlertCircle,
  SlidersHorizontal,
} from "lucide-react";
import { useModal } from "./modal-provider";

export function DashboardPreview() {
  const { openTrialModal } = useModal();
  const [timeframe, setTimeframe] = useState<"24h" | "7d" | "30d" | "ytd">("7d");
  const [selectedChannel, setSelectedChannel] = useState<string>("All Channels");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 900);
  };

  return (
    <section id="dashboard-preview" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-l from-cyan-600/15 via-blue-600/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-cyan-300 border border-cyan-500/30 mb-4">
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span>Real-Time SaaS Intelligence Interface</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            AI Intelligence Dashboard Preview
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A command center engineered for modern marketing leaders, data analysts, and executive teams.
          </p>
        </div>

        {/* DASHBOARD CONTROL BAR */}
        <div className="glass-panel rounded-2xl p-4 mb-6 border border-white/10 flex flex-wrap items-center justify-between gap-4">
          {/* Channel selector */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-slate-400 flex items-center gap-1 font-medium mr-1">
              <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-400" /> Channels:
            </span>
            {["All Channels", "X / Twitter", "LinkedIn", "Reddit", "Global News", "YouTube"].map(
              (chan) => (
                <button
                  key={chan}
                  onClick={() => setSelectedChannel(chan)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    selectedChannel === chan
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm"
                      : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-transparent"
                  }`}
                >
                  {chan}
                </button>
              )
            )}
          </div>

          {/* Timeframe & Action Buttons */}
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-black/40 rounded-xl p-1 border border-white/5 text-xs">
              {(["24h", "7d", "30d", "ytd"] as const).map((tf) => (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  className={`px-3 py-1 rounded-lg uppercase font-medium transition-all ${
                    timeframe === tf
                      ? "bg-cyan-500 text-slate-950 font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {tf}
                </button>
              ))}
            </div>

            <button
              onClick={handleRefresh}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Refresh Stream"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? "animate-spin text-cyan-400" : ""}`} />
            </button>

            <button
              onClick={() => openTrialModal()}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Report</span>
            </button>
          </div>
        </div>

        {/* 5 CORE DASHBOARD CARDS REQUIRED BY USER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          {/* 1. Brand Sentiment Score */}
          <motion.div
            whileHover={{ y: -3 }}
            className="glass-card p-5 rounded-2xl border border-white/10 relative overflow-hidden"
          >
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span className="font-semibold text-slate-300">Brand Sentiment Score</span>
              <span className="flex items-center text-emerald-400 font-bold">
                <ArrowUpRight className="w-3.5 h-3.5" /> +12.4%
              </span>
            </div>

            <div className="text-3xl font-extrabold text-white tracking-tight">
              78% <span className="text-sm font-semibold text-emerald-400">Positive</span>
            </div>

            {/* Segmented Bar */}
            <div className="w-full bg-slate-800 h-2 rounded-full mt-3 overflow-hidden flex">
              <div className="bg-emerald-400 h-full w-[78%]" title="Positive 78%" />
              <div className="bg-blue-400 h-full w-[15%]" title="Neutral 15%" />
              <div className="bg-rose-500 h-full w-[7%]" title="Negative 7%" />
            </div>

            {/* Breakdown Legend */}
            <div className="flex justify-between items-center text-[11px] text-slate-400 mt-3 pt-2 border-t border-white/5">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400" /> Pos 78%
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-400" /> Neu 15%
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-rose-500" /> Neg 7%
              </span>
            </div>
          </motion.div>

          {/* 2. Social Mentions */}
          <motion.div
            whileHover={{ y: -3 }}
            className="glass-card p-5 rounded-2xl border border-white/10 relative overflow-hidden"
          >
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span className="font-semibold text-slate-300">Social Mentions</span>
              <span className="flex items-center text-cyan-400 font-bold">
                <ArrowUpRight className="w-3.5 h-3.5" /> +24.5%
              </span>
            </div>

            <div className="text-3xl font-extrabold text-white tracking-tight">
              142.8K
            </div>

            <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
              <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-medium">
                +28.2k this week
              </span>
            </div>

            <div className="text-[11px] text-slate-400 mt-4 pt-2 border-t border-white/5 flex justify-between">
              <span>Viral Multiplier:</span>
              <span className="text-white font-mono font-medium">3.8x baseline</span>
            </div>
          </motion.div>

          {/* 3. Engagement Rate */}
          <motion.div
            whileHover={{ y: -3 }}
            className="glass-card p-5 rounded-2xl border border-white/10 relative overflow-hidden"
          >
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span className="font-semibold text-slate-300">Engagement Rate</span>
              <span className="flex items-center text-emerald-400 font-bold">
                <ArrowUpRight className="w-3.5 h-3.5" /> +1.2%
              </span>
            </div>

            <div className="text-3xl font-extrabold text-white tracking-tight">
              4.82%
            </div>

            <div className="mt-3 text-xs text-slate-400">
              <span>Industry Average: </span>
              <span className="text-slate-200 font-medium">3.10%</span>
            </div>

            <div className="text-[11px] text-slate-400 mt-4 pt-2 border-t border-white/5 flex justify-between">
              <span>Benchmark Beat:</span>
              <span className="text-emerald-400 font-semibold">+55.4%</span>
            </div>
          </motion.div>

          {/* 4. Market Trend Prediction */}
          <motion.div
            whileHover={{ y: -3 }}
            className="glass-card p-5 rounded-2xl border border-cyan-500/30 bg-cyan-950/20 relative overflow-hidden"
          >
            <div className="flex items-center justify-between text-xs text-cyan-400 mb-2 font-medium">
              <span className="flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5 text-cyan-400" /> Prediction
              </span>
              <span className="px-1.5 py-0.5 rounded bg-cyan-400/20 text-cyan-300 font-semibold text-[10px]">
                AI Model 94%
              </span>
            </div>

            <div className="text-lg font-bold text-white tracking-tight leading-snug">
              Bullish Q4 Surge
            </div>

            <p className="mt-2 text-xs text-slate-300 leading-relaxed">
              Forecast predicts +41% organic category demand over next 30 days.
            </p>

            <div className="text-[11px] text-cyan-400 mt-3 pt-2 border-t border-cyan-500/20 flex justify-between">
              <span>Next Opportunity:</span>
              <span className="font-medium text-white">AI Automation</span>
            </div>
          </motion.div>

          {/* 5. Competitor Ranking */}
          <motion.div
            whileHover={{ y: -3 }}
            className="glass-card p-5 rounded-2xl border border-purple-500/30 bg-purple-950/20 relative overflow-hidden"
          >
            <div className="flex items-center justify-between text-xs text-purple-300 mb-2 font-medium">
              <span>Competitor Ranking</span>
              <span className="px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-200 font-bold text-[10px]">
                TOP TIER
              </span>
            </div>

            <div className="text-3xl font-extrabold text-white tracking-tight">
              #1 <span className="text-sm font-semibold text-purple-300">in SOV</span>
            </div>

            <div className="mt-3 text-xs text-slate-300">
              38.4% total Share of Voice in enterprise sector.
            </div>

            <div className="text-[11px] text-purple-300 mt-4 pt-2 border-t border-purple-500/20 flex justify-between">
              <span>Gap to #2:</span>
              <span className="text-white font-semibold">+14.2% lead</span>
            </div>
          </motion.div>
        </div>

        {/* AI INSIGHT CALLOUT HIGHLIGHT (FROM USER PROMPT) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl p-6 sm:p-7 bg-gradient-to-r from-blue-900/40 via-cyan-900/30 to-purple-900/40 border border-cyan-400/30 shadow-xl shadow-cyan-500/10 mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30 shrink-0">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono">
                    SYNTHETIC AI INSIGHT RECOMMENDATION
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    High Confidence (98.4%)
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  &ldquo;Customer engagement increased by 32% after recent campaign.&rdquo;
                </h3>
                <p className="text-sm text-slate-300 mt-1">
                  Primary sentiment drivers: simplified UI onboarding (+48%), instantaneous data sync (+37%), and proactive alerts (+22%).
                </p>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <button
                onClick={() => openTrialModal()}
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all cursor-pointer"
              >
                Apply AI Recommendation
              </button>
            </div>
          </div>
        </motion.div>

        {/* REAL-TIME DEEP DIVE: CHANNEL METRICS & LIVE CRISIS ALERT DETECTOR */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Omnichannel Share Breakdown */}
          <div className="lg:col-span-2 glass-card p-6 rounded-2xl border border-white/10">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h4 className="text-base font-semibold text-white">Omnichannel Sentiment & Volume Breakdown</h4>
                <p className="text-xs text-slate-400">Continuous NLP ingestion across 250M+ digital sources</p>
              </div>
              <span className="text-xs text-cyan-400 font-mono">Filtered by: {selectedChannel}</span>
            </div>

            <div className="space-y-4">
              {[
                { channel: "X / Twitter", volume: "62,400 mentions", positive: 82, neutral: 12, negative: 6 },
                { channel: "Reddit Communities", volume: "31,200 discussions", positive: 76, neutral: 16, negative: 8 },
                { channel: "LinkedIn B2B Feeds", volume: "24,800 posts", positive: 91, neutral: 7, negative: 2 },
                { channel: "Global News & Media", volume: "14,100 articles", positive: 74, neutral: 19, negative: 7 },
                { channel: "YouTube & Podcasts", volume: "10,350 transcripts", positive: 85, neutral: 11, negative: 4 },
              ].map((item) => (
                <div key={item.channel} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-white">{item.channel}</span>
                    <span className="text-slate-400 font-mono">{item.volume}</span>
                  </div>
                  <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden flex">
                    <div
                      style={{ width: `${item.positive}%` }}
                      className="bg-emerald-400 h-full"
                      title={`Positive ${item.positive}%`}
                    />
                    <div
                      style={{ width: `${item.neutral}%` }}
                      className="bg-blue-400 h-full"
                      title={`Neutral ${item.neutral}%`}
                    />
                    <div
                      style={{ width: `${item.negative}%` }}
                      className="bg-rose-500 h-full"
                      title={`Negative ${item.negative}%`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real-time Threat & Spike Detection */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-base font-semibold text-white flex items-center gap-2">
                  <Bell className="w-4 h-4 text-cyan-400" />
                  <span>Autonomous Alert Radar</span>
                </h4>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                  ACTIVE
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs">
                  <div className="flex items-center justify-between text-emerald-400 font-semibold mb-1">
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" /> Positive Spike Detected
                    </span>
                    <span className="text-[10px] text-slate-400">4m ago</span>
                  </div>
                  <p className="text-slate-300 text-[11px]">
                    TechCrunch review drove a +68% surge in positive sentiment for API latency.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs">
                  <div className="flex items-center justify-between text-amber-400 font-semibold mb-1">
                    <span className="flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> Competitor Campaign Watch
                    </span>
                    <span className="text-[10px] text-slate-400">22m ago</span>
                  </div>
                  <p className="text-slate-300 text-[11px]">
                    Competitor launched aggressive paid campaign targeting &quot;social listening enterprise&quot;.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs">
                  <div className="flex items-center justify-between text-cyan-400 font-semibold mb-1">
                    <span className="flex items-center gap-1">
                      <Bot className="w-3.5 h-3.5" /> Executive Summary Ready
                    </span>
                    <span className="text-[10px] text-slate-400">1h ago</span>
                  </div>
                  <p className="text-slate-300 text-[11px]">
                    Weekly briefing auto-compiled and synced to Slack #brand-command channel.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => openTrialModal()}
              className="mt-5 w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-cyan-300 transition-colors cursor-pointer text-center"
            >
              Configure Custom Trigger Webhooks →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
