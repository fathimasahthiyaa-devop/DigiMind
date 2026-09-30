"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Sparkles,
  Briefcase,
  ShoppingBag,
  Building,
  Tv,
  Rocket,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Calculator,
} from "lucide-react";
import { ModalProvider, useModal } from "@/components/modal-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";

function SolutionsContent() {
  const { openTrialModal, openDemoModal } = useModal();
  const [analystsCount, setAnalystsCount] = useState(5);
  const [mentionsPerMonth, setMentionsPerMonth] = useState(100);

  // ROI calculation
  const hoursSavedPerYear = analystsCount * 28 * 52;
  const dollarsSaved = Math.round(hoursSavedPerYear * 65);

  return (
    <div className="min-h-screen bg-[#050816] text-slate-100 flex flex-col font-sans">
      <AnimatedBackground />
      <Navbar />

      <main className="relative z-10 pt-32 pb-24 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Enterprise Industry Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Intelligence Built for Your Industry&apos;s Specific Battles
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              Discover how agencies, e-commerce giants, global enterprises, media networks, and startups gain unfair market advantages with InsightAI.
            </p>
          </div>

          {/* Interactive ROI Calculator */}
          <div className="mb-20 glass-panel rounded-3xl p-6 sm:p-10 border border-cyan-500/30 shadow-2xl bg-[#081033]/90">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    InsightAI Enterprise ROI Calculator
                  </h2>
                  <p className="text-xs text-slate-400">
                    Estimate your team&apos;s manual reporting hours and labor cost savings
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Sliders */}
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-xs font-medium text-slate-300 mb-2">
                      <span>Market Intelligence / PR Analysts:</span>
                      <span className="text-cyan-300 font-bold">{analystsCount} Analysts</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="50"
                      value={analystsCount}
                      onChange={(e) => setAnalystsCount(Number(e.target.value))}
                      className="w-full accent-cyan-400 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-medium text-slate-300 mb-2">
                      <span>Monthly Brand Mentions:</span>
                      <span className="text-cyan-300 font-bold">{mentionsPerMonth}K Mentions</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="1000"
                      step="10"
                      value={mentionsPerMonth}
                      onChange={(e) => setMentionsPerMonth(Number(e.target.value))}
                      className="w-full accent-cyan-400 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Result Box */}
                <div className="p-6 rounded-2xl glass-card border border-cyan-400/40 bg-black/40 text-center space-y-3">
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                    Estimated Annual Value Created
                  </div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 font-mono">
                    ${dollarsSaved.toLocaleString()}
                  </div>
                  <div className="text-xs text-emerald-400 font-medium">
                    + {hoursSavedPerYear.toLocaleString()} analyst hours redirected to high-value strategic execution
                  </div>
                  <button
                    onClick={() => openDemoModal()}
                    className="mt-3 w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
                  >
                    Schedule ROI Deep Dive Walkthrough
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Solutions Playbooks Grid */}
          <div className="space-y-12">
            {[
              {
                title: "Marketing & PR Agencies",
                icon: Briefcase,
                tagline: "Scale from 5 to 50 client retainers without expanding headcount",
                points: [
                  "Instant white-label executive slide deck generator with client logos",
                  "Automated crisis detection alerting you before client executives notice",
                  "Deep pitch audits that reveal prospective clients' competitor vulnerabilities",
                ],
              },
              {
                title: "Global E-Commerce & DTC Brands",
                icon: ShoppingBag,
                tagline: "Turn review complaints into multi-million dollar product improvements",
                points: [
                  "Scrapes, clusters, and maps sentiment across Amazon, Trustpilot & Shopify",
                  "Sub-second alert on delivery carrier breakdowns and product defects",
                  "Influencer ROI and sentiment attribution by campaign code",
                ],
              },
              {
                title: "Multinational Enterprises & Finance",
                icon: Building,
                tagline: "SOC2 Type II compliant brand protection and risk governance",
                points: [
                  "Private VPC deployment with customer-managed encryption keys",
                  "Cross-subsidiary brand monitoring across 140+ countries and 84 languages",
                  "Dedicated Customer Success Manager with guaranteed < 3s alert SLA",
                ],
              },
            ].map((sol, idx) => {
              const Icon = sol.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-3xl p-8 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                >
                  <div className="space-y-3 max-w-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-cyan-400 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{sol.title}</h3>
                    </div>
                    <p className="text-sm text-cyan-300 font-medium">{sol.tagline}</p>
                    <div className="space-y-1.5 pt-2">
                      {sol.points.map((p, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => openTrialModal(sol.title)}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs shrink-0 flex items-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20"
                  >
                    <span>Deploy Solution</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
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

export default function SolutionsPage() {
  return (
    <ModalProvider>
      <SolutionsContent />
    </ModalProvider>
  );
}
