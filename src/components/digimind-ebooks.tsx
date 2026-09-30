"use client";

import React, { useState } from "react";
import { BookOpen, Download, Sparkles, CheckCircle2, ArrowRight, X, ExternalLink } from "lucide-react";
import { generateDirectWhatsAppChatUrl } from "@/lib/whatsapp";

interface Ebook {
  id: string;
  title: string;
  category: string;
  pages: string;
  desc: string;
  badge: string;
  downloadUrl: string;
}

export function DigiMindEbooks() {
  const [selectedEbook, setSelectedEbook] = useState<Ebook | null>(null);

  const ebooks: Ebook[] = [
    {
      id: "github-guide",
      title: "GitHub Student Developer Pack (SDP) 2026 Activation Guide",
      category: "Developer Guide",
      pages: "24 Pages • PDF",
      desc: "Comprehensive step-by-step walkthrough on verifying student status, claiming $200 DigitalOcean credits, setting up free JetBrains IDE licenses, and configuring GitHub Copilot.",
      badge: "Free E-Book",
      downloadUrl: "https://whatsapp.com/channel/0029VabRRa71dAw3RzQhcX28",
    },
    {
      id: "coursera-blueprint",
      title: "Coursera 100% Financial Aid Approval Blueprint",
      category: "Education & Career",
      pages: "18 Pages • PDF",
      desc: "Proven templates and exact answers to earn 100% free verified certificates from Google, Meta, IBM, and top global universities without paying out of pocket.",
      badge: "Community Favorite",
      downloadUrl: "https://whatsapp.com/channel/0029VabRRa71dAw3RzQhcX28",
    },
    {
      id: "canva-playbook",
      title: "Canva Pro Design Mastery for Social Media & Freelancers",
      category: "Design Mastery",
      pages: "32 Pages • PDF",
      desc: "Master Brand Kits, Magic Studio AI tools, custom typography, transparent exports, and batch content generation to streamline your graphic design workflow.",
      badge: "Free Resource",
      downloadUrl: "https://whatsapp.com/channel/0029VabRRa71dAw3RzQhcX28",
    },
    {
      id: "gpt-handbook",
      title: "Mastering GPT-4o: Advanced Prompt Engineering Handbook",
      category: "Artificial Intelligence",
      pages: "28 Pages • PDF",
      desc: "50+ production-grade prompts for data analysis, automated coding, academic research synthesis, and creating personalized custom GPT agents.",
      badge: "Updated for 2026",
      downloadUrl: "https://whatsapp.com/channel/0029VabRRa71dAw3RzQhcX28",
    },
  ];

  return (
    <section id="ebooks" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-l from-purple-600/15 via-blue-600/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 mb-4">
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span>Community Free Services & Resources</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Free E-Books & Software Guides
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Complimentary knowledge resources compiled by the Digi Mind technical team to help you maximize your software subscriptions.
          </p>
        </div>

        {/* EBOOKS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {ebooks.map((book) => (
            <div
              key={book.id}
              className="glass-card rounded-3xl p-7 border border-white/10 hover:border-cyan-500/40 flex flex-col justify-between transition-all duration-300 shadow-xl bg-[#08102e]/90 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    {book.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{book.pages}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1.5">{book.title}</h3>
                <div className="text-xs text-cyan-300 font-medium mb-3">{book.category}</div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {book.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => setSelectedEbook(book)}
                  className="text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  View Table of Contents
                </button>

                <a
                  href={generateDirectWhatsAppChatUrl(`Hello Digi Mind! I would like to download the free guide: "${book.title}". Please send me the link.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Free PDF</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* WHATSAPP CHANNEL BANNER */}
        <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 bg-gradient-to-r from-blue-950/40 via-cyan-950/30 to-emerald-950/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Join the Official Digi Mind WhatsApp Channel
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Get instant updates on limited-time discounts, free voucher giveaways, and restock alerts.
            </p>
          </div>

          <a
            href="https://whatsapp.com/channel/0029VabRRa71dAw3RzQhcX28"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-600/25 shrink-0 transition-all cursor-pointer"
          >
            <span>Join WhatsApp Channel</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* EBOOK MODAL */}
        {selectedEbook && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              onClick={() => setSelectedEbook(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <div className="relative w-full max-w-lg glass-panel bg-[#070e28]/98 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl z-10">
              <button
                onClick={() => setSelectedEbook(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-xs font-bold text-cyan-400 font-mono uppercase">
                {selectedEbook.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-3">
                {selectedEbook.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                {selectedEbook.desc}
              </p>

              <div className="space-y-2 mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                  What You Will Learn:
                </div>
                {[
                  "Official account verification pathways",
                  "Step-by-step screenshots & setup checklists",
                  "Common mistakes to avoid and account security guidelines",
                  "Direct links to official redemption portals",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={generateDirectWhatsAppChatUrl(`Hello Digi Mind! Please send me the free PDF for "${selectedEbook.title}".`)}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xs flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Receive Free PDF on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
