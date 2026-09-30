"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Sparkles,
  Zap,
  ShoppingBag,
  Menu,
  X,
  Phone,
  MessageCircle,
  HelpCircle,
  BookOpen,
  CreditCard,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { useCurrency, Currency } from "@/context/currency-context";
import { generateDirectWhatsAppChatUrl } from "@/lib/whatsapp";

export function DigiMindNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();
  const [currencyDropdown, setCurrencyDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currencies: Currency[] = ["USD", "LKR", "INR", "EUR"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#060a1d]/90 backdrop-blur-xl border-b border-white/10 shadow-xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-400/40 transition-all">
              <div className="w-full h-full bg-[#050816] rounded-[11px] flex items-center justify-center">
                <Zap className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-xl font-extrabold tracking-tight text-white font-sans">
                Digi
              </span>
              <span className="text-xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent ml-1">
                Mind
              </span>
              <span className="ml-2 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                PRO
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="#products"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              All Products
            </Link>
            <Link
              href="#how-it-works"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              How It Works
            </Link>
            <Link
              href="#payments"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Payment Methods
            </Link>
            <Link
              href="#ebooks"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Free E-books
            </Link>
            <Link
              href="#reviews"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Customer Reviews
            </Link>
            <Link
              href="#faqs"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              FAQs
            </Link>
            <Link
              href="#contact"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Contact HQ
            </Link>
          </nav>

          {/* RIGHT ACTIONS: CURRENCY SWITCHER & WHATSAPP CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Currency Switcher */}
            <div className="relative">
              <button
                onClick={() => setCurrencyDropdown(!currencyDropdown)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-white transition-all cursor-pointer"
              >
                <span>{currency}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {currencyDropdown && (
                <div className="absolute right-0 mt-2 w-28 glass-dropdown rounded-xl p-1.5 border border-white/10 shadow-2xl z-50">
                  {currencies.map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        setCurrency(c);
                        setCurrencyDropdown(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer flex items-center justify-between ${
                        currency === c
                          ? "bg-cyan-500/20 text-cyan-300 font-bold"
                          : "text-slate-300 hover:bg-white/5"
                      }`}
                    >
                      <span>{c}</span>
                      {currency === c && <CheckCircle2 className="w-3 h-3 text-cyan-400" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Direct WhatsApp CTA */}
            <a
              href={generateDirectWhatsAppChatUrl()}
              target="_blank"
              rel="noreferrer"
              className="relative group overflow-hidden px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-all cursor-pointer flex items-center gap-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500"
            >
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>WhatsApp: +94 74 260 5036</span>
              </div>
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => {
                const nextIndex = (currencies.indexOf(currency) + 1) % currencies.length;
                setCurrency(currencies[nextIndex]);
              }}
              className="px-2.5 py-1 text-xs font-bold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 rounded-lg"
            >
              {currency}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/5"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-b border-white/10 bg-[#060a1d]/98 backdrop-blur-2xl px-5 pt-3 pb-6 space-y-3 mt-2">
          <Link
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-cyan-400"
          >
            All Products & Offers
          </Link>
          <Link
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-cyan-400"
          >
            Activation Methods & Warranty
          </Link>
          <Link
            href="#payments"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-cyan-400"
          >
            Payment Options (Bank, Crypto, UPI)
          </Link>
          <Link
            href="#ebooks"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-cyan-400"
          >
            Free E-books & Guides
          </Link>
          <Link
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-cyan-400"
          >
            Customer Reviews (Facebook)
          </Link>
          <Link
            href="#faqs"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-cyan-400"
          >
            Frequently Asked Questions
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-cyan-400"
          >
            Contact Office HQ
          </Link>

          <div className="pt-3 border-t border-white/10">
            <a
              href={generateDirectWhatsAppChatUrl()}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>Order via WhatsApp (+94 74 260 5036)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
