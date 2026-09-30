"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Sparkles,
  ArrowRight,
  Shield,
  HelpCircle,
  ChevronDown,
  Zap,
} from "lucide-react";
import { useModal } from "./modal-provider";

export function Pricing() {
  const { openTrialModal, openDemoModal } = useModal();
  const [annualBilling, setAnnualBilling] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const plans = [
    {
      name: "Starter",
      badge: "Fast-Growing Brands",
      priceMonthly: 29,
      priceAnnual: 23,
      description: "Essential AI social listening and sentiment monitoring for emerging brands and creator startups.",
      features: [
        "Up to 25,000 social mentions / mo",
        "3 brand monitors & competitors",
        "Basic sentiment classification (Pos / Neu / Neg)",
        "Daily automated email digest",
        "Standard Slack & Email alerts",
        "48-hour customer support SLA",
      ],
      popular: false,
      ctaText: "Start Free 14-Day Trial",
      ctaAction: "Starter",
    },
    {
      name: "Professional",
      badge: "Most Popular",
      priceMonthly: 99,
      priceAnnual: 79,
      description: "Complete market intelligence suite with predictive trend modeling and conversational AI assistant.",
      features: [
        "Up to 250,000 social mentions / mo",
        "15 brand monitors & competitors",
        "Advanced Multilingual NLP (84 languages)",
        "Conversational AI Assistant (Unlimited queries)",
        "30-day predictive trend forecasting",
        "Automated PDF & slide deck report generator",
        "Sub-3 second crisis webhook alerts",
        "Priority 24/7 dedicated support",
      ],
      popular: true,
      ctaText: "Start Free 14-Day Trial",
      ctaAction: "Professional",
    },
    {
      name: "Enterprise",
      badge: "Global Scalability",
      priceMonthly: null,
      priceAnnual: null,
      customPrice: "Custom",
      description: "Tailored private LLM deployment, unlimited channels, and custom SOC2 compliance for multinational organizations.",
      features: [
        "Unlimited social mentions & custom feeds",
        "Unlimited brand monitors & competitor radar",
        "Private VPC deployment with BYO LLM keys",
        "Multimodal video, podcast & image OCR listening",
        "Custom sentiment taxonomies & training",
        "Dedicated Customer Success Manager & 99.99% SLA",
        "Single Sign-On (Okta, Azure AD, SAML)",
        "Custom executive onboarding & data migration",
      ],
      popular: false,
      ctaText: "Request Enterprise Quote",
      ctaAction: "Enterprise",
    },
  ];

  const faqs = [
    {
      q: "How does the 14-day free trial work?",
      a: "You get full access to the Professional tier for 14 days without entering any credit card information. Connect your brand accounts and run live sentiment queries immediately. If you choose not to subscribe, your workspace simply transitions to read-only.",
    },
    {
      q: "Can I migrate historical data from Digimind or Brandwatch?",
      a: "Yes! InsightAI includes one-click migration utilities for CSV, JSON, and direct API backfills. Our engineering team can ingest up to 5 years of historical listening data within 48 hours for Enterprise customers.",
    },
    {
      q: "Is our proprietary customer conversation data secure?",
      a: "InsightAI is SOC2 Type II certified and fully GDPR-compliant. We never train public foundation models on your private data. Enterprise tiers offer private VPC isolation and on-premise LLM execution.",
    },
    {
      q: "What happens if our mentions spike during a viral campaign?",
      a: "We never cut off your listening stream during a critical event. You will receive an automatic courtesy grace period, and your account will continue to process alerts without interruption.",
    },
  ];

  return (
    <section id="pricing" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-purple-600/15 via-blue-600/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-cyan-300 border border-cyan-500/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Transparent Predictable Pricing</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Predictable Plans for Every Stage
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            No surprise overage fees. Choose the intelligence scale that fits your brand.
          </p>

          {/* BILLING TOGGLE */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span
              className={`text-sm font-medium ${
                !annualBilling ? "text-white font-semibold" : "text-slate-400"
              }`}
            >
              Monthly Billed
            </span>

            <button
              onClick={() => setAnnualBilling(!annualBilling)}
              className="relative w-14 h-8 rounded-full bg-slate-800 border border-white/10 p-1 transition-colors cursor-pointer"
              aria-label="Toggle annual billing"
            >
              <motion.div
                animate={{ x: annualBilling ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-md"
              />
            </button>

            <div className="flex items-center gap-2">
              <span
                className={`text-sm font-medium ${
                  annualBilling ? "text-white font-semibold" : "text-slate-400"
                }`}
              >
                Annual Billed
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/40">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* 3 PRICING CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {plans.map((plan) => {
            const price = annualBilling ? plan.priceAnnual : plan.priceMonthly;
            return (
              <motion.div
                key={plan.name}
                whileHover={{ y: -6 }}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? "glass-panel border-cyan-400/60 shadow-2xl shadow-cyan-500/20 bg-[#081133] ring-1 ring-cyan-400/40"
                    : "glass-card border-white/10 hover:border-white/20 bg-[#070e28]/90"
                }`}
              >
                {/* Popular Glow Tag */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/30">
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    {!plan.popular && (
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/10">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-white/10">
                    {price !== null ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                          ${price}
                        </span>
                        <span className="text-sm font-medium text-slate-400">/ month</span>
                        {annualBilling && (
                          <span className="text-[11px] text-cyan-400 font-medium ml-2">
                            (billed annually)
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                          {plan.customPrice}
                        </span>
                        <span className="text-sm font-medium text-slate-400 ml-1">
                          tailored SLA
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                      Included Capabilities:
                    </div>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div>
                  <button
                    onClick={() => {
                      if (plan.name === "Enterprise") {
                        openDemoModal();
                      } else {
                        openTrialModal(plan.name);
                      }
                    }}
                    className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-xl shadow-cyan-500/30"
                        : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    {plan.name === "Enterprise"
                      ? "Custom contract & security questionnaire"
                      : "14-day free trial • Cancel anytime"}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <div className="max-w-3xl mx-auto glass-panel p-6 sm:p-8 rounded-3xl border border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white">Frequently Asked Questions</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Have questions about billing, data limits, or enterprise contracts?
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-white/5 bg-black/40 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between text-sm font-semibold text-white hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-cyan-400" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-4 pb-4 text-xs text-slate-300 leading-relaxed border-t border-white/5 pt-2"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
