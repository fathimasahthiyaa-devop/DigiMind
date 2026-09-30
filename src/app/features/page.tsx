"use client";

import React from "react";
import Link from "next/link";
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
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { ModalProvider, useModal } from "@/components/modal-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";

function FeaturesContent() {
  const { openTrialModal, openDemoModal } = useModal();

  const featureDeepDives = [
    {
      title: "1. AI Social Listening Engine",
      badge: "Real-time Multimodal Ingestion",
      icon: Radio,
      desc: "Ingests over 250 million daily public conversations from X, Reddit, TikTok, LinkedIn, YouTube transcripts, podcasts, and global digital news syndications with sub-second latency.",
      architecture: [
        "Multilingual NLP parsing across 84 languages",
        "Sarcasm, irony, and slang normalization",
        "Spam and malicious bot detection filter (>99.8% precision)",
        "Image OCR and audio transcription pipeline",
      ],
      apiSnippet: `// Example InsightAI Streaming Webhook Payload
{
  "event": "brand.mention.surge",
  "brand": "InsightAI",
  "sentiment_index": 0.88,
  "net_promoter_delta": "+14.2%",
  "source": "x_twitter",
  "confidence": 0.994
}`,
    },
    {
      title: "2. Competitor Intelligence & Benchmarking",
      badge: "Market Position Radar",
      icon: Swords,
      desc: "Continuous autonomous reconnaissance against your primary and emerging competitors. Track Share of Voice, audience migration patterns, and response velocity to rival marketing campaigns.",
      architecture: [
        "Dynamic Share of Voice calculation updated hourly",
        "Audience sentiment gap analysis vs nearest 5 competitors",
        "Feature request and product dissatisfaction mining on competitors",
        "PR announcement impact velocity comparisons",
      ],
      apiSnippet: `// Competitor Benchmark API Query
const benchmark = await insightAI.competitors.compare({
  target: "YourBrand",
  rivals: ["CompetitorA", "CompetitorB"],
  window: "30d"
});`,
    },
    {
      title: "3. Autonomous AI Reports",
      badge: "C-Suite Ready Presentations",
      icon: FileText,
      desc: "Replaces 30+ hours of manual data extraction each week. InsightAI synthesizes massive unstructured data into polished PDF intelligence decks and executive bullet summaries.",
      architecture: [
        "Auto-compiles executive summaries for leadership teams",
        "Direct export to PDF, Google Slides, and Slack channels",
        "Qualitative sentiment attribution and root-cause analysis",
        "Customizable brand white-label themes for agencies",
      ],
      apiSnippet: `// Generate Autonomous Board Deck
const report = await insightAI.reports.generate({
  type: "executive_briefing",
  format: "pdf",
  recipients: ["cmo@enterprise.com", "board@enterprise.com"]
});`,
    },
    {
      title: "4. Predictive Trend Forecasting",
      badge: "30-Day Forward Modeling",
      icon: TrendingUp,
      desc: "Our proprietary recurrent transformer models project conversational volume and thematic velocity 30 days ahead, highlighting viral opportunities before they hit mainstream consciousness.",
      architecture: [
        "Vector embedding clusters for emerging thematic velocity",
        "Early viral detection 48-72 hours before mainstream adoption",
        "Seasonal keyword search intent correlation",
        "Audience polarization index to assess risk vs reward",
      ],
      apiSnippet: `// Predictive Trend Query
const forecast = await insightAI.trends.predict({
  category: "Enterprise AI Software",
  horizon_days: 30
});`,
    },
    {
      title: "5. Real-Time Crisis Radar & Alerts",
      badge: "Sub-3-Second Escalation",
      icon: BellRing,
      desc: "Eliminates alert fatigue with intelligent statistical anomaly detection. Receive proactive alerts the moment abnormal negative sentiment spikes occur.",
      architecture: [
        "Dynamic volume vs sentiment anomaly thresholding",
        "Instant dispatch to Slack, Microsoft Teams, PagerDuty, and SMS",
        "Includes automated root-cause diagnosis and mitigation checklist",
        "Executive escalation workflows with role-based incident assignment",
      ],
      apiSnippet: `// Alert Dispatch Configuration
insightAI.alerts.on("anomaly.negative_spike", async (event) => {
  await slack.sendAlert("#crisis-war-room", event.summary);
});`,
    },
    {
      title: "6. Customer Psychological Analysis",
      badge: "Deep Audience Profiling",
      icon: Users2,
      desc: "Understand unspoken customer emotions, purchase hesitations, and demographic motivations with deep psychological persona profiling.",
      architecture: [
        "Maps user sentiment directly against feature requests and churn intent",
        "Segments by geography, seniority, platform, and affinity",
        "Net Promoter Score (NPS) estimation from organic unstructured text",
        "Unboxing video transcription and micro-facial emotion analysis",
      ],
      apiSnippet: `// Persona Sentiment Extraction
const audienceDNA = await insightAI.analytics.getAudienceDNA({
  brand: "YourBrand",
  segment: "Enterprise Buyers"
});`,
    },
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-slate-100 flex flex-col font-sans">
      <AnimatedBackground />
      <Navbar />

      <main className="relative z-10 pt-32 pb-24 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-cyan-300 border border-cyan-500/30 mb-4">
              <Cpu className="w-3.5 h-3.5" />
              <span>Full Technology Architecture</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Six Autonomous AI Engines Powering Modern Intelligence
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              Explore the technical precision, neural models, and enterprise API capabilities behind InsightAI.
            </p>
          </div>

          {/* Feature Deep Dives */}
          <div className="space-y-12">
            {featureDeepDives.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 hover:border-cyan-500/30 transition-all shadow-xl"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs font-mono font-bold text-cyan-400">
                            {feat.badge}
                          </span>
                          <h2 className="text-2xl font-bold text-white">{feat.title}</h2>
                        </div>
                      </div>

                      <p className="text-slate-300 text-sm leading-relaxed">{feat.desc}</p>

                      <div className="space-y-2 pt-2">
                        <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                          Key Architectural Highlights:
                        </div>
                        {feat.architecture.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={() => openTrialModal(feat.title)}
                          className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all cursor-pointer"
                        >
                          <span>Test This Engine Live</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Right: Code snippet preview */}
                    <div className="lg:col-span-5 rounded-2xl bg-slate-950/80 border border-white/10 p-4 font-mono text-xs text-slate-300 overflow-x-auto shadow-inner">
                      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px] text-slate-500 mb-3">
                        <span>API / SDK Integration</span>
                        <span className="text-cyan-400">TypeScript</span>
                      </div>
                      <pre className="text-cyan-300/90 whitespace-pre-wrap leading-relaxed">
                        {feat.apiSnippet}
                      </pre>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function FeaturesPage() {
  return (
    <ModalProvider>
      <FeaturesContent />
    </ModalProvider>
  );
}
