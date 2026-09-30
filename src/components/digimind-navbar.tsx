"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Zap,
  ShoppingBag,
  Layers,
  CreditCard,
  BookOpen,
  Star,
  HelpCircle,
  Phone,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  CheckCircle2,
  Sun,
  Moon,
  Sparkles,
} from "lucide-react";
import { useCurrency, Currency } from "@/context/currency-context";
import { useTheme, Theme } from "@/context/theme-context";
import { generateDirectWhatsAppChatUrl } from "@/lib/whatsapp";

export function DigiMindNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();
  const { theme, setTheme, toggleTheme } = useTheme();
  const [currencyDropdown, setCurrencyDropdown] = useState(false);
  const [themeDropdown, setThemeDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currencies: Currency[] = ["USD", "LKR", "INR", "EUR"];

  const navLinks = [
    { label: "All Products", href: "#products", icon: ShoppingBag },
    { label: "How It Works", href: "#how-it-works", icon: Layers },
    { label: "Payment Methods", href: "#payments", icon: CreditCard },
    { label: "Free E-books", href: "#ebooks", icon: BookOpen },
    { label: "Customer Reviews", href: "#reviews", icon: Star },
    { label: "FAQs", href: "#faqs", icon: HelpCircle },
    { label: "Contact HQ", href: "#contact", icon: Phone },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/92 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-2.5"
          : "bg-[#050816]/75 backdrop-blur-lg border-b border-white/[0.05] py-3.5"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 lg:gap-4">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="relative w-9 h-9 rounded-xl border border-cyan-400/60 bg-[#070e28] shadow-[0_0_15px_rgba(6,182,212,0.35)] flex items-center justify-center group-hover:scale-105 group-hover:border-cyan-300 transition-all">
              <Zap className="w-4 h-4 text-cyan-400 fill-cyan-400 group-hover:animate-pulse" />
            </div>

            <div className="flex items-center">
              <span className="text-xl font-black tracking-tight text-white font-sans">
                Digi
              </span>
              <span className="text-xl font-black bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 bg-clip-text text-transparent ml-0.5">
                Mind
              </span>
              <span className="ml-2 px-1.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/40 shadow-[0_0_8px_rgba(6,182,212,0.2)]">
                PRO
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV LINKS WITH PERFECT ICONS & SINGLE-LINE LAYOUT */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-semibold text-slate-300 hover:text-white transition-all rounded-xl hover:bg-white/10 hover:shadow-sm whitespace-nowrap group"
                >
                  <Icon className="w-3.5 h-3.5 text-cyan-400/80 group-hover:text-cyan-300 transition-colors shrink-0" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* DESKTOP NAV FOR MEDIUM (LAPTOPS 1024px - 1280px): COMPACT WITH ICONS */}
          <nav className="hidden lg:flex xl:hidden items-center gap-0.5">
            {navLinks.slice(0, 5).map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-1 px-2 py-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-all rounded-lg hover:bg-white/10 whitespace-nowrap group"
                >
                  <Icon className="w-3.5 h-3.5 text-cyan-400/80 group-hover:text-cyan-300 shrink-0" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* RIGHT CONTROLS: THEME SWITCHER, CURRENCY SELECTOR & WHATSAPP BUTTON */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            {/* Theme Change Option Button */}
            <div className="relative">
              <button
                onClick={() => setThemeDropdown(!themeDropdown)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#0d1430] hover:bg-[#131d45] border border-white/10 hover:border-cyan-400/40 text-xs font-medium text-slate-200 hover:text-white transition-all cursor-pointer shadow-inner"
                title={`Current Theme: ${theme}`}
                aria-label="Change Theme"
              >
                {theme === "dark" && <Moon className="w-3.5 h-3.5 text-cyan-400" />}
                {theme === "light" && <Sun className="w-3.5 h-3.5 text-amber-400" />}
                {theme === "midnight" && <Sparkles className="w-3.5 h-3.5 text-purple-400" />}
                <span className="capitalize text-[11px] font-bold">{theme}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {themeDropdown && (
                <div className="absolute right-0 mt-2 w-32 glass-dropdown rounded-2xl p-1.5 border border-white/10 shadow-2xl z-50 bg-[#070e28]/95 backdrop-blur-xl">
                  {[
                    { id: "dark" as Theme, label: "Dark Cyber", icon: Moon, color: "text-cyan-400" },
                    { id: "light" as Theme, label: "Sleek Light", icon: Sun, color: "text-amber-400" },
                    { id: "midnight" as Theme, label: "OLED Pure", icon: Sparkles, color: "text-purple-400" },
                  ].map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setTheme(item.id);
                          setThemeDropdown(false);
                        }}
                        className={`w-full text-left px-2.5 py-2 text-xs font-semibold rounded-xl transition-colors cursor-pointer flex items-center justify-between ${
                          theme === item.id
                            ? "bg-cyan-500/20 text-cyan-300"
                            : "text-slate-300 hover:bg-white/5"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <ItemIcon className={`w-3.5 h-3.5 ${item.color}`} />
                          <span>{item.label}</span>
                        </span>
                        {theme === item.id && <CheckCircle2 className="w-3 h-3 text-cyan-400" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Currency Pill Dropdown */}
            <div className="relative">
              <button
                onClick={() => setCurrencyDropdown(!currencyDropdown)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0d1430] hover:bg-[#131d45] border border-white/10 hover:border-cyan-400/40 text-xs font-bold text-slate-200 hover:text-white transition-all cursor-pointer shadow-inner"
              >
                <span>{currency}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {currencyDropdown && (
                <div className="absolute right-0 mt-2 w-28 glass-dropdown rounded-2xl p-1.5 border border-white/10 shadow-2xl z-50 bg-[#070e28]/95 backdrop-blur-xl">
                  {currencies.map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        setCurrency(c);
                        setCurrencyDropdown(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs font-medium rounded-xl transition-colors cursor-pointer flex items-center justify-between ${
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

            {/* Vibrant Green WhatsApp Button */}
            <a
              href={generateDirectWhatsAppChatUrl()}
              target="_blank"
              rel="noreferrer"
              className="relative group overflow-hidden px-4.5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold text-white shadow-[0_0_25px_rgba(0,195,123,0.35)] hover:shadow-[0_0_35px_rgba(0,195,123,0.55)] transition-all cursor-pointer flex items-center gap-2 bg-gradient-to-r from-[#00b06f] via-[#00c37b] to-[#00a86b] hover:brightness-110 active:scale-95 whitespace-nowrap"
            >
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
              </span>
              <MessageCircle className="w-4 h-4 fill-white text-[#00b06f] shrink-0" />
              <span className="tracking-tight">WhatsApp: +94 74 260 5036</span>
            </a>
          </div>

          {/* MOBILE TOGGLE BUTTONS */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Quick Mobile Theme Button */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-lg bg-white/5 text-slate-300 border border-white/10"
              aria-label="Toggle theme"
            >
              {theme === "dark" && <Moon className="w-4 h-4 text-cyan-400" />}
              {theme === "light" && <Sun className="w-4 h-4 text-amber-400" />}
              {theme === "midnight" && <Sparkles className="w-4 h-4 text-purple-400" />}
            </button>

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
        <div className="lg:hidden glass-panel border-b border-white/10 bg-[#060a1d]/98 backdrop-blur-2xl px-5 pt-3 pb-6 space-y-2 mt-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 py-2 px-3 text-sm font-semibold text-slate-200 hover:text-cyan-400 hover:bg-white/5 rounded-xl transition-all"
              >
                <Icon className="w-4 h-4 text-cyan-400" />
                <span>{link.label}</span>
              </Link>
            );
          })}

          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-semibold">Active Theme:</span>
            <div className="flex gap-1">
              {(["dark", "light", "midnight"] as Theme[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold capitalize transition-colors ${
                    theme === t
                      ? "bg-cyan-500 text-slate-950"
                      : "bg-white/5 text-slate-400 hover:text-white"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-white/10">
            <a
              href={generateDirectWhatsAppChatUrl()}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00b06f] via-[#00c37b] to-[#00a86b] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#00b06f]" />
              <span>WhatsApp: +94 74 260 5036</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
