"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ChevronDown,
  Menu,
  X,
  Radio,
  BarChart3,
  Shield,
  Layers,
  ArrowRight,
  TrendingUp,
  Globe2,
  Users2,
  Cpu,
  FileSpreadsheet,
} from "lucide-react";
import { useModal } from "./modal-provider";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { openTrialModal, openLoginModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-400/40 transition-all">
              <div className="w-full h-full bg-[#050816] rounded-[11px] flex items-center justify-center">
                <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                Insight
              </span>
              <span className="text-xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI
              </span>
              <span className="ml-2 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                PRO
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {/* Product Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("product")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5 cursor-pointer">
                <span>Product</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "product" ? "rotate-180 text-cyan-400" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === "product" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 w-80 pt-2"
                  >
                    <div className="glass-dropdown rounded-2xl p-3 border border-white/10 shadow-2xl">
                      <Link
                        href="#features"
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 group-hover:text-blue-300">
                          <Radio className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                            AI Social Listening
                          </div>
                          <div className="text-xs text-slate-400">
                            Omnichannel sentiment and trend tracking
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="#dashboard-preview"
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-300">
                          <BarChart3 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                            Intelligence Dashboard
                          </div>
                          <div className="text-xs text-slate-400">
                            Real-time metrics, alerts, and sentiment scores
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="#ai-assistant"
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 group-hover:text-purple-300">
                          <Cpu className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors">
                            Conversational AI Assistant
                          </div>
                          <div className="text-xs text-slate-400">
                            Chat directly with your brand data
                          </div>
                        </div>
                      </Link>

                      <div className="mt-2 pt-2 border-t border-white/5 px-2.5 flex items-center justify-between text-xs text-slate-400">
                        <span>Explore full platform</span>
                        <Link
                          href="/demo"
                          className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1"
                        >
                          Live Workspace <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("solutions")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5 cursor-pointer">
                <span>Solutions</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "solutions" ? "rotate-180 text-cyan-400" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === "solutions" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 w-84 pt-2"
                  >
                    <div className="glass-dropdown rounded-2xl p-3 border border-white/10 shadow-2xl">
                      <Link
                        href="#industries"
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                          <TrendingUp className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white group-hover:text-emerald-300">
                            Marketing & PR Agencies
                          </div>
                          <div className="text-xs text-slate-400">
                            Multiclient listening, white-label reports
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="#industries"
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400">
                          <Users2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white group-hover:text-pink-300">
                            E-Commerce & DTC Brands
                          </div>
                          <div className="text-xs text-slate-400">
                            Customer review insights and churn early warning
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="#industries"
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                          <Shield className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white group-hover:text-amber-300">
                            Enterprise & Regulated
                          </div>
                          <div className="text-xs text-slate-400">
                            SOC2 compliance, private LLMs, crisis isolation
                          </div>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="#analytics-showcase"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Analytics
            </Link>

            <Link
              href="#how-it-works"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              How It Works
            </Link>

            <Link
              href="#pricing"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Pricing
            </Link>
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={openLoginModal}
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Log In
            </button>

            <button
              onClick={() => openTrialModal("Professional")}
              className="relative group overflow-hidden px-4.5 py-2 rounded-xl text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 transition-all cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 group-hover:opacity-95 transition-opacity" />
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
                <span>Get Started Free</span>
              </span>
            </button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => openTrialModal()}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg shadow-sm"
            >
              Start Trial
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-b border-white/10 bg-[#050816]/95 backdrop-blur-2xl"
          >
            <div className="px-5 pt-3 pb-6 space-y-3">
              <Link
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-slate-200 hover:text-cyan-400"
              >
                Product & Features
              </Link>
              <Link
                href="#dashboard-preview"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-slate-200 hover:text-cyan-400"
              >
                Dashboard Preview
              </Link>
              <Link
                href="#analytics-showcase"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-slate-200 hover:text-cyan-400"
              >
                Analytics Showcase
              </Link>
              <Link
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-slate-200 hover:text-cyan-400"
              >
                How It Works
              </Link>
              <Link
                href="#ai-assistant"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-slate-200 hover:text-cyan-400"
              >
                AI Assistant
              </Link>
              <Link
                href="#industries"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-slate-200 hover:text-cyan-400"
              >
                Industries
              </Link>
              <Link
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-slate-200 hover:text-cyan-400"
              >
                Pricing
              </Link>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openLoginModal();
                  }}
                  className="w-full py-2.5 text-center text-sm font-medium text-slate-300 hover:text-white rounded-xl bg-white/5"
                >
                  Log In
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openTrialModal();
                  }}
                  className="w-full py-2.5 text-center text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 rounded-xl shadow-lg shadow-cyan-500/25"
                >
                  Start Free Trial
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
