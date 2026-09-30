"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Radio,
  Search,
  ArrowLeft,
  Activity,
  Bot,
  Sparkles,
  Download,
  Filter,
  CheckCircle2,
  AlertTriangle,
  Send,
  RefreshCw,
  Share2,
  ThumbsUp,
  Globe2,
  TrendingUp,
} from "lucide-react";
import confetti from "canvas-confetti";

interface FeedItem {
  id: string;
  source: string;
  author: string;
  handle: string;
  avatar: string;
  content: string;
  sentiment: "positive" | "neutral" | "negative";
  score: string;
  time: string;
  reach: string;
}

export default function DemoPage() {
  const [searchBrand, setSearchBrand] = useState("InsightAI");
  const [filterSentiment, setFilterSentiment] = useState<"all" | "positive" | "negative">("all");
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);
  const [reportReady, setReportReady] = useState(false);
  const [copilotInput, setCopilotInput] = useState("");
  const [copilotMessages, setCopilotMessages] = useState<Array<{ sender: "user" | "ai"; text: string }>>([
    {
      sender: "ai",
      text: "Hello! I am your InsightAI Workspace Copilot. You are viewing live intelligence for InsightAI. Ask me about sentiment anomalies, competitor movement, or click 'Generate Executive Briefing'.",
    },
  ]);

  const [feedItems, setFeedItems] = useState<FeedItem[]>([
    {
      id: "1",
      source: "X (Twitter)",
      author: "Sarah Lin",
      handle: "@sarah_techlead",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
      content: "Just migrated our brand listening from Digimind to @InsightAI. The sub-second alert velocity and multilingual accuracy are genuinely a generation ahead.",
      sentiment: "positive",
      score: "+0.96 Pos",
      time: "1m ago",
      reach: "12.4K Reach",
    },
    {
      id: "2",
      source: "Reddit",
      author: "u/market_analyst_pro",
      handle: "r/datascience",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80",
      content: "Anyone tested InsightAI's sarcasm detection on consumer product reviews? Tested on 20,000 ambiguous comments and it classified irony with 99.4% precision.",
      sentiment: "positive",
      score: "+0.92 Pos",
      time: "4m ago",
      reach: "34.2K Views",
    },
    {
      id: "3",
      source: "Global News",
      author: "Tech Wire Daily",
      handle: "Editorial Desk",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80",
      content: "InsightAI expands its enterprise customer base to over 1,200 organizations, setting new industry benchmarks for autonomous social listening.",
      sentiment: "positive",
      score: "+0.89 Pos",
      time: "18m ago",
      reach: "120K Reads",
    },
    {
      id: "4",
      source: "LinkedIn",
      author: "David Miller",
      handle: "VP PR & Communications",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
      content: "The automated executive briefings in InsightAI saved our team over 25 hours this week. Board presentations are now 100% automated.",
      sentiment: "positive",
      score: "+0.94 Pos",
      time: "32m ago",
      reach: "8.9K Views",
    },
    {
      id: "5",
      source: "X (Twitter)",
      author: "Mark Evans",
      handle: "@mark_e_commerce",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
      content: "Shipping delay alert triggered via InsightAI webhook before our courier system even logged the regional backlog. Incredible crisis prevention.",
      sentiment: "positive",
      score: "+0.91 Pos",
      time: "45m ago",
      reach: "5.1K Reach",
    },
  ]);

  const handleGenerateReport = () => {
    setIsGeneratingReport(true);
    setTimeout(() => {
      setIsGeneratingReport(false);
      setReportReady(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.5 },
      });
    }, 1200);
  };

  const handleCopilotSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!copilotInput.trim()) return;

    const userText = copilotInput;
    setCopilotMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setCopilotInput("");

    setTimeout(() => {
      setCopilotMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: `Analysis for "${userText}": Based on current ${searchBrand} sentiment streams, public confidence is index at 78% Positive (+12% vs 7-day rolling average). Primary driver is product stability and customer service satisfaction.`,
        },
      ]);
    }, 800);
  };

  const filteredFeed = feedItems.filter((item) => {
    if (filterSentiment === "all") return true;
    return item.sentiment === filterSentiment;
  });

  return (
    <div className="min-h-screen bg-[#050816] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30">
      {/* DEMO TOP HEADER */}
      <header className="sticky top-0 z-30 bg-[#070e28]/95 backdrop-blur-xl border-b border-white/10 px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Overview</span>
          </Link>

          <div className="h-5 w-[1px] bg-white/10 hidden sm:block" />

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white">
              <Radio className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold text-white text-sm hidden sm:inline">
              InsightAI Workspace
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono border border-cyan-500/30">
              LIVE CONSOLE
            </span>
          </div>
        </div>

        {/* Brand Search Bar */}
        <div className="flex items-center gap-2 max-w-sm w-full mx-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchBrand}
              onChange={(e) => setSearchBrand(e.target.value)}
              placeholder="Search any brand or competitor..."
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleGenerateReport}
            disabled={isGeneratingReport}
            className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-xs flex items-center gap-1.5 hover:from-blue-500 hover:to-cyan-400 transition-all cursor-pointer shadow-md shadow-cyan-500/20"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isGeneratingReport ? "Synthesizing AI Report..." : "Generate AI Briefing"}</span>
          </button>
        </div>
      </header>

      {/* DEMO WORKSPACE CONTENT */}
      <div className="flex-1 p-4 sm:p-6 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* MAIN FEED & CHARTS (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Quick Metrics Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="glass-card p-4 rounded-xl border border-white/5">
              <div className="text-[11px] text-slate-400 font-medium">Monitoring Target</div>
              <div className="text-xl font-bold text-white mt-1">{searchBrand}</div>
              <div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live Stream
              </div>
            </div>

            <div className="glass-card p-4 rounded-xl border border-white/5">
              <div className="text-[11px] text-slate-400 font-medium">Sentiment Index</div>
              <div className="text-xl font-bold text-emerald-400 mt-1">78% Pos</div>
              <div className="text-[10px] text-slate-400 mt-1">15% Neu • 7% Neg</div>
            </div>

            <div className="glass-card p-4 rounded-xl border border-white/5">
              <div className="text-[11px] text-slate-400 font-medium">Total Mentions (24h)</div>
              <div className="text-xl font-bold text-cyan-300 mt-1">142.8K</div>
              <div className="text-[10px] text-emerald-400 mt-1">+24.5% vs avg</div>
            </div>

            <div className="glass-card p-4 rounded-xl border border-white/5">
              <div className="text-[11px] text-slate-400 font-medium">Net Promoter Score</div>
              <div className="text-xl font-bold text-purple-300 mt-1">+71 NPS</div>
              <div className="text-[10px] text-slate-400 mt-1">Industry Rank #1</div>
            </div>
          </div>

          {/* Report Ready Banner */}
          {reportReady && (
            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/80 to-cyan-950/80 border border-emerald-500/40 text-xs flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="font-bold text-white">
                    Executive AI Briefing for &ldquo;{searchBrand}&rdquo; is Ready!
                  </div>
                  <div className="text-slate-300 text-[11px]">
                    Autonomous report generated across 142,850 data points.
                  </div>
                </div>
              </div>
              <button
                onClick={() => alert("Simulated PDF Download: InsightAI_Executive_Briefing.pdf")}
                className="px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs flex items-center gap-1 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" /> Download PDF
              </button>
            </div>
          )}

          {/* Live Ingestion Feed with Sentiment Filters */}
          <div className="glass-card rounded-2xl border border-white/10 p-5">
            <div className="flex flex-wrap items-center justify-between pb-4 mb-4 border-b border-white/5 gap-3">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span>Real-Time Conversation Stream for &ldquo;{searchBrand}&rdquo;</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Multilingual listening feed • Ranked by algorithmic reach
                </p>
              </div>

              {/* Sentiment filter pills */}
              <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-xl border border-white/5 text-xs">
                {(["all", "positive", "negative"] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setFilterSentiment(filter)}
                    className={`px-3 py-1 rounded-lg capitalize font-medium transition-all ${
                      filterSentiment === filter
                        ? "bg-cyan-500 text-slate-950 font-bold shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Feed Cards */}
            <div className="space-y-3">
              {filteredFeed.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 transition-all text-xs space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={item.avatar}
                        alt={item.author}
                        className="w-7 h-7 rounded-full object-cover border border-white/10"
                      />
                      <div>
                        <span className="font-bold text-white">{item.author}</span>
                        <span className="text-slate-500 ml-1.5 text-[11px]">
                          {item.handle} • {item.source}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-slate-500">{item.time}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                        {item.score}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-200 text-xs leading-relaxed">{item.content}</p>

                  <div className="flex items-center justify-between pt-1 text-[11px] text-slate-400 border-t border-white/5">
                    <span>Estimated Reach: {item.reach}</span>
                    <button
                      onClick={() => alert("Drilldown sentiment attribution opened!")}
                      className="text-cyan-400 hover:text-cyan-300 font-medium cursor-pointer"
                    >
                      Inspect Attribution →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* WORKSPACE AI COPILOT (4 cols) */}
        <div className="lg:col-span-4 glass-card rounded-2xl border border-white/10 p-5 flex flex-col justify-between h-[640px]">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">InsightAI Copilot</h4>
                  <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Online & Synchronized
                  </span>
                </div>
              </div>
            </div>

            {/* Copilot message history */}
            <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1 text-xs">
              {copilotMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-xl leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white ml-6 text-right"
                      : "bg-slate-900 border border-white/5 text-slate-300 mr-4"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
          </div>

          {/* Copilot Input */}
          <form onSubmit={handleCopilotSend} className="pt-3 border-t border-white/5">
            <div className="relative">
              <input
                type="text"
                value={copilotInput}
                onChange={(e) => setCopilotInput(e.target.value)}
                placeholder="Ask about sentiment, anomalies, PR..."
                className="w-full pl-3 pr-10 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 p-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
