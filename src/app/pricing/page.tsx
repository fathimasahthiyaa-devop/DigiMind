"use client";

import React from "react";
import { ModalProvider } from "@/components/modal-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import { Pricing } from "@/components/pricing";
import { Check, X, Shield, Sparkles } from "lucide-react";

function PricingContent() {
  return (
    <div className="min-h-screen bg-[#050816] text-slate-100 flex flex-col font-sans">
      <AnimatedBackground />
      <Navbar />

      <main className="relative z-10 pt-28 pb-20 flex-1">
        <Pricing />

        {/* Detailed Enterprise Feature Comparison Matrix */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 overflow-x-auto bg-[#070e28]/95">
            <h3 className="text-2xl font-bold text-white mb-2">
              Full Feature Comparison Matrix
            </h3>
            <p className="text-xs text-slate-400 mb-8">
              Compare limits, channels, and security specifications across all InsightAI subscription tiers.
            </p>

            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 font-semibold">
                  <th className="py-3 px-4">Feature / Capability</th>
                  <th className="py-3 px-4">Starter ($29/mo)</th>
                  <th className="py-3 px-4 text-cyan-300 font-bold bg-cyan-950/40 rounded-t-lg">
                    Professional ($99/mo)
                  </th>
                  <th className="py-3 px-4">Enterprise (Custom)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Monthly Mention Cap</td>
                  <td className="py-3 px-4">25,000</td>
                  <td className="py-3 px-4 font-bold text-cyan-300 bg-cyan-950/20">250,000</td>
                  <td className="py-3 px-4 font-bold text-emerald-400">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Tracked Competitors</td>
                  <td className="py-3 px-4">3 Brands</td>
                  <td className="py-3 px-4 font-bold text-cyan-300 bg-cyan-950/20">15 Brands</td>
                  <td className="py-3 px-4 font-bold text-emerald-400">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Multilingual NLP Support</td>
                  <td className="py-3 px-4">12 Languages</td>
                  <td className="py-3 px-4 font-bold text-cyan-300 bg-cyan-950/20">84 Languages</td>
                  <td className="py-3 px-4 font-bold text-emerald-400">All 84 + Custom Dialects</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Conversational AI Copilot</td>
                  <td className="py-3 px-4 text-slate-500">50 Queries / mo</td>
                  <td className="py-3 px-4 font-bold text-cyan-300 bg-cyan-950/20">Unlimited Queries</td>
                  <td className="py-3 px-4 font-bold text-emerald-400">Dedicated Fine-Tuned Model</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Predictive Trend Forecasting</td>
                  <td className="py-3 px-4 text-slate-500">7 Days Ahead</td>
                  <td className="py-3 px-4 font-bold text-cyan-300 bg-cyan-950/20">30 Days Ahead</td>
                  <td className="py-3 px-4 font-bold text-emerald-400">90 Days Forward Modeling</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Crisis Webhook Alerts Latency</td>
                  <td className="py-3 px-4">15 Minutes</td>
                  <td className="py-3 px-4 font-bold text-cyan-300 bg-cyan-950/20">&lt; 3.0 Seconds</td>
                  <td className="py-3 px-4 font-bold text-emerald-400">&lt; 1.0 Second Guaranteed</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Private VPC & Dedicated LLM</td>
                  <td className="py-3 px-4 text-rose-500">✕</td>
                  <td className="py-3 px-4 text-rose-500 bg-cyan-950/20">✕</td>
                  <td className="py-3 px-4 font-bold text-emerald-400">Included (AWS/GCP/Azure)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Dedicated Customer Success Mgr</td>
                  <td className="py-3 px-4 text-rose-500">✕</td>
                  <td className="py-3 px-4 text-slate-400 bg-cyan-950/20">Priority Queue</td>
                  <td className="py-3 px-4 font-bold text-emerald-400">Dedicated 24/7 Slack War Room</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function PricingPage() {
  return (
    <ModalProvider>
      <PricingContent />
    </ModalProvider>
  );
}
