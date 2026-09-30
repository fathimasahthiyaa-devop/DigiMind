"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { generateDirectWhatsAppChatUrl } from "@/lib/whatsapp";

export function WhatsAppWidget() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2">
      {/* Tooltip prompt */}
      {showTooltip && (
        <div className="relative glass-panel bg-[#070e28]/95 border border-emerald-500/40 rounded-2xl p-3 shadow-2xl max-w-xs text-xs text-white flex items-start gap-2.5 animate-bounce">
          <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1 shrink-0 animate-ping" />
          <div>
            <div className="font-bold text-emerald-400">Need help or want to order?</div>
            <div className="text-slate-300 text-[11px] mt-0.5">
              Chat with our team on WhatsApp for instant 5-min delivery!
            </div>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main WhatsApp Floating Action Button */}
      <a
        href={generateDirectWhatsAppChatUrl()}
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs sm:text-sm shadow-2xl shadow-emerald-500/30 hover:scale-105 transition-all cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
        <span className="hidden sm:inline">WhatsApp Support</span>
      </a>
    </div>
  );
}
