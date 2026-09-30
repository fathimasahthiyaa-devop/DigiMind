"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Plug,
  Cpu,
  LineChart,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Database,
  Radio,
  FileCheck,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { useModal } from "./modal-provider";

export function HowItWorks() {
  const { openTrialModal, openDemoModal } = useModal();
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      num: "01",
      step: 1,
      title: "Connect Data Sources",
      subtitle: "Zero-code ingestion across 250M+ digital touchpoints",
      description:
        "Seamlessly link all your brand channels with one-click OAuth integrations. Ingest conversations from social networks, global news feeds, customer review portals, podcasts, and internal enterprise CRMs.",
      icon: Plug,
      stats: "100+ Prebuilt Connectors",
      color: "from-blue-500 to-cyan-400",
      borderGlow: "border-cyan-500/40",
      details: [
        "Major social networks: X, Reddit, LinkedIn, TikTok, YouTube",
        "Public news, RSS, blogs, trade journals & broadcast transcripts",
        "E-commerce review feeds: Amazon, Trustpilot, Google Reviews",
        "Custom enterprise webhooks & proprietary data lakes",
      ],
      mockup: {
        header: "DATA PIPELINE STATUS",
        items: [
          { name: "Global Social Feeds", status: "Active (68k msgs/sec)", ping: true },
          { name: "Enterprise Customer CRM", status: "Synced (3m ago)", ping: false },
          { name: "Worldwide News Wire", status: "Active (14k feeds)", ping: true },
        ],
      },
    },
    {
      num: "02",
      step: 2,
      title: "AI Processes Information",
      subtitle: "Autonomous multimodal NLP & sentiment understanding",
      description:
        "Our proprietary fine-tuned neural models analyze unstructured text, audio, and imagery. The system classifies nuanced emotion, filters out spam bots, detects sarcasm, and isolates emerging statistical anomalies.",
      icon: Cpu,
      stats: "Sub-Second Classification",
      color: "from-cyan-400 to-indigo-500",
      borderGlow: "border-blue-500/40",
      details: [
        "Multilingual comprehension across 84 global languages & local dialects",
        "Sarcasm, humor, and cultural context resolution with 99.4% precision",
        "Automated entity extraction: products, executives, competitors, locations",
        "Dynamic volume and sentiment anomaly detection algorithm",
      ],
      mockup: {
        header: "NEURAL CLASSIFIER IN ACTION",
        items: [
          { name: "Emotion Mapping", status: "Joy (72%) | Trust (88%)", ping: true },
          { name: "Spam & Bot Scrubber", status: "Blocked 14,210 malicious bots", ping: false },
          { name: "Entity Extractor", status: "Detected 4 competitors mentioned", ping: true },
        ],
      },
    },
    {
      num: "03",
      step: 3,
      title: "Receive Business Insights",
      subtitle: "Actionable foresight delivered to executive workflows",
      description:
        "Transform chaotic public discourse into crystal-clear executive directives. Receive automated crisis warnings, board-ready presentation decks, and conversational answers via our AI Assistant.",
      icon: LineChart,
      stats: "Instant Executive Briefings",
      color: "from-indigo-500 to-purple-500",
      borderGlow: "border-purple-500/40",
      details: [
        "Executive briefings auto-compiled into PDF and executive slide decks",
        "Predictive market trajectory forecasting 30 days in advance",
        "Instant Slack, MS Teams, and SMS crisis escalation alerts",
        "Ask anything in natural language via the built-in AI Copilot",
      ],
      mockup: {
        header: "EXECUTIVE DIRECTIVES GENERATED",
        items: [
          { name: "Strategic Opportunity", status: "+41% demand surge in Q4", ping: true },
          { name: "Crisis Avoidance", status: "Neutralized complaint cluster in 12m", ping: false },
          { name: "Slack Sync", status: "Dispatched to #executive-briefing", ping: true },
        ],
      },
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-600/10 via-blue-600/15 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Intuitive 3-Step Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            How InsightAI Works
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            From raw internet chatter to predictive board-level intelligence in three streamlined steps.
          </p>
        </div>

        {/* TIMELINE PROGRESS & INTERACTIVE STEP CARDS */}
        <div className="relative">
          {/* Animated Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-[2px] -translate-y-12 z-0 pointer-events-none">
            <div className="w-full h-full bg-slate-800 relative">
              <motion.div
                animate={{
                  x: ["0%", "100%"],
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#22d3ee]"
              />
            </div>
          </div>

          {/* 3 STEPS GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((item) => {
              const Icon = item.icon;
              const isCurrent = activeStep === item.step;
              return (
                <div
                  key={item.num}
                  onClick={() => setActiveStep(item.step)}
                  className={`group relative rounded-2xl p-6 sm:p-8 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                    isCurrent
                      ? "glass-panel border-cyan-400/50 shadow-2xl shadow-cyan-500/15 scale-[1.02] bg-[#09102b]"
                      : "glass-card border-white/10 hover:border-white/20 hover:scale-[1.01]"
                  }`}
                >
                  {/* Glowing header badge */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} p-[1px] shadow-lg`}
                        >
                          <div className="w-full h-full bg-[#050816] rounded-[11px] flex items-center justify-center">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                        </div>

                        <div>
                          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                            STEP {item.num}
                          </span>
                          <div className="text-[11px] text-slate-400">{item.stats}</div>
                        </div>
                      </div>

                      {/* Step Indicator Dot */}
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                          isCurrent
                            ? "bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/50"
                            : "bg-white/5 text-slate-400 border border-white/10"
                        }`}
                      >
                        {item.num}
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-cyan-300 mb-3">
                      {item.subtitle}
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Step Specific Details */}
                    <div className="mt-5 space-y-2 border-t border-white/5 pt-4">
                      {item.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Micro Live Pipeline Box */}
                  <div className="mt-6 p-3.5 rounded-xl bg-black/50 border border-white/5">
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                      <span>{item.mockup.header}</span>
                      <span className="text-cyan-400">STATUS</span>
                    </div>
                    <div className="space-y-1.5">
                      {item.mockup.items.map((m, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between text-[11px] p-1.5 rounded bg-white/[0.02]"
                        >
                          <span className="text-slate-300 truncate">{m.name}</span>
                          <span className="text-cyan-300 text-[10px] font-mono flex items-center gap-1">
                            {m.ping && (
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                            )}
                            {m.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Bar below timeline */}
        <div className="mt-14 p-6 rounded-2xl glass-card border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-bold text-white">
              Ready to witness real-time intelligence on your brand?
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Connect your domain or social handle in under 90 seconds. No credit card required.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => openTrialModal()}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-cyan-500/25 transition-all cursor-pointer"
            >
              Start 14-Day Free Trial
            </button>
            <button
              onClick={openDemoModal}
              className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm font-semibold text-slate-200 transition-colors cursor-pointer"
            >
              Request Walkthrough
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
