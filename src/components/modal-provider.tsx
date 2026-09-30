"use client";

import React, { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Calendar, Lock, Mail, Building2, User } from "lucide-react";
import confetti from "canvas-confetti";

interface ModalContextType {
  openTrialModal: (initialPlan?: string) => void;
  openDemoModal: () => void;
  openLoginModal: () => void;
  closeAllModals: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [trialOpen, setTrialOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Professional");

  // Form states
  const [submitted, setSubmitted] = useState<string | null>(null);

  const openTrialModal = (plan = "Professional") => {
    setSelectedPlan(plan);
    setSubmitted(null);
    setTrialOpen(true);
    setDemoOpen(false);
    setLoginOpen(false);
  };

  const openDemoModal = () => {
    setSubmitted(null);
    setDemoOpen(true);
    setTrialOpen(false);
    setLoginOpen(false);
  };

  const openLoginModal = () => {
    setSubmitted(null);
    setLoginOpen(true);
    setTrialOpen(false);
    setDemoOpen(false);
  };

  const closeAllModals = () => {
    setTrialOpen(false);
    setDemoOpen(false);
    setLoginOpen(false);
    setSubmitted(null);
  };

  const fireConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#38bdf8", "#818cf8", "#06b6d4", "#a855f7"],
    });
  };

  return (
    <ModalContext.Provider
      value={{ openTrialModal, openDemoModal, openLoginModal, closeAllModals }}
    >
      {children}

      <AnimatePresence>
        {/* TRIAL MODAL */}
        {trialOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeAllModals}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg glass-panel bg-[#090f26]/95 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-cyan-500/10 z-10 overflow-hidden"
            >
              {/* Header Glow */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

              <button
                onClick={closeAllModals}
                className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>

              {submitted === "trial" ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Welcome to InsightAI!</h3>
                  <p className="text-slate-300 text-sm mb-6 max-w-sm mx-auto">
                    Your 14-day free access to the {selectedPlan} platform is configured. We&apos;ve sent your activation link to your work inbox.
                  </p>
                  <button
                    onClick={() => {
                      closeAllModals();
                      window.location.href = "/demo";
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 font-semibold text-white shadow-lg hover:shadow-cyan-500/30 transition-all cursor-pointer"
                  >
                    <span>Launch Live Interactive Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                      <Sparkles className="w-3.5 h-3.5" /> 14-Day Free Enterprise Trial
                    </span>
                    <span className="text-xs text-slate-400">No credit card required</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Start with InsightAI {selectedPlan}
                  </h3>
                  <p className="text-slate-300 text-sm mt-1 mb-6">
                    Harness real-time AI social listening, sentiment trends, and competitor intelligence.
                  </p>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted("trial");
                      fireConfetti();
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Work Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                          <input
                            type="text"
                            required
                            placeholder="Alex Morgan"
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-all"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Company Name
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                          <input
                            type="text"
                            required
                            placeholder="Acme Global"
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Selected Tier
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {["Starter", "Professional", "Enterprise"].map((plan) => (
                          <button
                            key={plan}
                            type="button"
                            onClick={() => setSelectedPlan(plan)}
                            className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all ${
                              selectedPlan === plan
                                ? "bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-sm"
                                : "bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700"
                            }`}
                          >
                            {plan}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <span>Activate Free Access</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className="flex items-center justify-center gap-4 text-slate-400 text-xs pt-1">
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> SOC2 Type II
                      </span>
                      <span>•</span>
                      <span>GDPR Ready</span>
                      <span>•</span>
                      <span>Instant Setup</span>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}

        {/* DEMO MODAL */}
        {demoOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeAllModals}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg glass-panel bg-[#090f26]/95 border border-purple-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-purple-500/10 z-10 overflow-hidden"
            >
              <button
                onClick={closeAllModals}
                className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>

              {submitted === "demo" ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/40 flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Executive Demo Scheduled!</h3>
                  <p className="text-slate-300 text-sm mb-6 max-w-sm mx-auto">
                    An AI intelligence specialist has reserved your personalized briefing. A calendar invitation with meeting coordinates has been dispatched.
                  </p>
                  <button
                    onClick={closeAllModals}
                    className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 font-semibold text-white text-sm transition-all"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30">
                      <Calendar className="w-3.5 h-3.5" /> 1-on-1 Personalized Walkthrough
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Schedule an Enterprise Demo
                  </h3>
                  <p className="text-slate-300 text-sm mt-1 mb-6">
                    See how Fortune 500 teams replace legacy listening tools with InsightAI.
                  </p>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted("demo");
                      fireConfetti();
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Corporate Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@enterprise.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-400 transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Role / Title
                        </label>
                        <select className="w-full px-3 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-purple-400">
                          <option>CMO / VP Marketing</option>
                          <option>Brand Intelligence Director</option>
                          <option>Market Researcher</option>
                          <option>PR / Communications Lead</option>
                          <option>Product Strategist</option>
                          <option>Executive / Founder</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Company Size
                        </label>
                        <select className="w-full px-3 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-purple-400">
                          <option>50 - 250 employees</option>
                          <option>250 - 1,000 employees</option>
                          <option>1,000 - 5,000 employees</option>
                          <option>5,000+ Enterprise</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Primary Intelligence Focus
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Brand crisis tracking & competitor benchmark"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-400 transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <span>Confirm Demo Time</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}

        {/* LOGIN MODAL */}
        {loginOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeAllModals}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md glass-panel bg-[#090f26]/95 border border-blue-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-blue-500/10 z-10 overflow-hidden"
            >
              <button
                onClick={closeAllModals}
                className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mx-auto mb-3 text-white shadow-lg shadow-cyan-500/25">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Sign In to InsightAI</h3>
                <p className="text-slate-400 text-xs mt-1">Access your intelligence workspace and reports</p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => {
                    closeAllModals();
                    window.location.href = "/demo";
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-slate-700/80 text-white text-sm font-medium flex items-center justify-center gap-3 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span>Continue with Enterprise Google</span>
                </button>

                <div className="relative my-4 flex items-center justify-center">
                  <div className="border-t border-slate-800 w-full" />
                  <span className="bg-[#090f26] px-3 text-[11px] text-slate-500 uppercase tracking-wider absolute">
                    or email
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Email address
                  </label>
                  <input
                    type="email"
                    defaultValue="sarah.chen@globalbrand.com"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    defaultValue="••••••••••••"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <button
                  onClick={() => {
                    closeAllModals();
                    window.location.href = "/demo";
                  }}
                  className="w-full py-2.5 mt-2 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold text-white text-sm transition-all shadow-md shadow-blue-600/30"
                >
                  Sign In to Console
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </ModalContext.Provider>
  );
}
