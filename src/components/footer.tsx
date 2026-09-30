"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Radio,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  ChevronUp,
} from "lucide-react";
import { useModal } from "./modal-provider";

export function Footer() {
  const { openTrialModal } = useModal();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
    }, 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#030611] text-slate-400 overflow-hidden pt-16 pb-12">
      {/* Background glow orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-blue-900/10 via-cyan-900/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP CTA CALLOUT BEFORE LINKS */}
        <div className="mb-16 p-8 sm:p-12 rounded-3xl glass-panel border border-cyan-500/25 bg-gradient-to-r from-blue-950/40 via-cyan-950/20 to-purple-950/40 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next-Gen Market Listening</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Ready to Outsmart the Market with Autonomous AI?
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-300">
                Join 1,200+ global brands turning chaotic public sentiment into predictable revenue drivers.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => openTrialModal("Professional")}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Start 14-Day Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="/demo"
                className="px-5 py-3.5 rounded-xl glass-card border border-white/10 hover:border-cyan-500/40 text-slate-200 hover:text-white font-semibold text-sm transition-colors"
              >
                Launch Interactive Demo
              </Link>
            </div>
          </div>
        </div>

        {/* MAIN NAVIGATION COLUMNS & NEWSLETTER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand Info & Newsletter (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-[#050816] rounded-[11px] flex items-center justify-center">
                  <Radio className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Insight</span>
              <span className="text-xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              The premier AI-powered market intelligence platform. Monitor brands, analyze customer sentiment, track competitors, and predict market trends in real-time.
            </p>

            {/* Newsletter Subscription Box */}
            <div className="pt-2">
              <div className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
                Subscribe to Market Intelligence Briefing
              </div>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter corporate email..."
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shrink-0 transition-all cursor-pointer"
                  >
                    Join
                  </button>
                </div>
                {subscribed && (
                  <p className="text-xs text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Subscribed! Welcome to the weekly briefing.
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Column 1: Product */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Product
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#features" className="hover:text-cyan-300 transition-colors">
                  AI Social Listening
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-cyan-300 transition-colors">
                  Competitor Intelligence
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-cyan-300 transition-colors">
                  Automated AI Reports
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-cyan-300 transition-colors">
                  Trend Prediction
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-cyan-300 transition-colors">
                  Real-Time Crisis Alerts
                </Link>
              </li>
              <li>
                <Link href="#ai-assistant" className="hover:text-cyan-300 transition-colors">
                  AI Assistant Copilot
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#industries" className="hover:text-cyan-300 transition-colors">
                  Marketing Agencies
                </Link>
              </li>
              <li>
                <Link href="#industries" className="hover:text-cyan-300 transition-colors">
                  E-commerce Brands
                </Link>
              </li>
              <li>
                <Link href="#industries" className="hover:text-cyan-300 transition-colors">
                  Enterprise Organizations
                </Link>
              </li>
              <li>
                <Link href="#industries" className="hover:text-cyan-300 transition-colors">
                  Media & Newsrooms
                </Link>
              </li>
              <li>
                <Link href="#industries" className="hover:text-cyan-300 transition-colors">
                  High-Growth Startups
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-cyan-400 hover:text-cyan-300 font-medium">
                  All Industry Playbooks →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/demo" className="hover:text-cyan-300 transition-colors">
                  Live Interactive Workspace
                </Link>
              </li>
              <li>
                <Link href="#analytics-showcase" className="hover:text-cyan-300 transition-colors">
                  Competitor Matrix 2026
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-cyan-300 transition-colors">
                  ROI & Pricing Calculator
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-300 transition-colors">
                  REST API Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-300 transition-colors">
                  Enterprise Migration Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-300 transition-colors">
                  Sentiment NLP Benchmarks
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-cyan-300 transition-colors">
                  About InsightAI
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-300 transition-colors">
                  Leadership & Research
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-300 transition-colors">
                  Careers (We&apos;re Hiring!)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-300 transition-colors">
                  Security & SOC2 Type II
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-300 transition-colors">
                  Contact Support
                </a>
              </li>
              <li>
                <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Systems Operational
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & SOCIALS BAR */}
        <div className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-4 text-slate-400">
            <span>© 2026 InsightAI Inc. All rights reserved.</span>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Settings
            </a>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-slate-400">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg hover:bg-white/5 hover:text-cyan-400 transition-colors"
                aria-label="Twitter / X"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg hover:bg-white/5 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg hover:bg-white/5 hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5 transition-all cursor-pointer flex items-center gap-1 text-xs"
              title="Scroll to top"
            >
              <span>Back to Top</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
