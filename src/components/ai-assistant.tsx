"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  User,
  Send,
  Sparkles,
  RefreshCw,
  Copy,
  Check,
  TrendingDown,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  CornerDownLeft,
} from "lucide-react";
import { useModal } from "./modal-provider";

interface Message {
  id: string;
  sender: "user" | "ai";
  content: string;
  actionItems?: string[];
  metrics?: { label: string; value: string; positive?: boolean }[];
  timestamp: string;
}

export function AIAssistant() {
  const { openTrialModal } = useModal();
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  const initialMessages: Message[] = [
    {
      id: "m-1",
      sender: "user",
      content: "Why did my brand sentiment decrease?",
      timestamp: "10:24 AM",
    },
    {
      id: "m-2",
      sender: "ai",
      content:
        "Negative feedback increased due to delivery complaints across European regional carriers. Out of 4,820 negative mentions analyzed in the past 48 hours, 68% cite fulfillment delays following the regional port logistics congestion.",
      metrics: [
        { label: "Net Sentiment Drop", value: "-4.2%", positive: false },
        { label: "Delivery Mentions", value: "+182% surge", positive: false },
        { label: "Product UX Sentiment", value: "94% Positive", positive: true },
      ],
      actionItems: [
        "Improve proactive delivery communication: Send automated SMS notifications for orders exceeding 48h transit.",
        "Deploy temporary FAQ banner on EU checkout informing buyers of regional courier delays.",
        "Engage 14 key macro-influencers who inquired publicly with direct concierge resolution.",
      ],
      timestamp: "10:24 AM",
    },
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const presetQuestions = [
    "Why did my brand sentiment decrease?",
    "Compare our Q3 share of voice against Competitor X",
    "Identify top 3 emerging trends in our industry",
    "Draft an executive briefing for our board of directors",
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: `usr-${Date.now()}`,
      sender: "user",
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate smart dynamic AI intelligence responses
    setTimeout(() => {
      let aiContent = "";
      let actionItems: string[] | undefined = undefined;
      let metrics: { label: string; value: string; positive?: boolean }[] | undefined = undefined;

      const lower = query.toLowerCase();

      if (lower.includes("sentiment") || lower.includes("decrease") || lower.includes("why")) {
        aiContent =
          "Negative feedback increased primarily due to delivery complaints. Out of 4,820 negative mentions, 68% cite third-party courier delays. Recommended action: improve delivery communication immediately.";
        metrics = [
          { label: "Sentiment Delta", value: "-3.8%", positive: false },
          { label: "Root Cause Factor", value: "Logistics Carrier", positive: false },
          { label: "Customer Loyalty", value: "88% Stable", positive: true },
        ];
        actionItems = [
          "Send proactive delivery delay email update to impacted batch.",
          "Offer $10 store credit to defuse public escalations on X & Reddit.",
          "Post status update on Help Center regarding shipping timeline.",
        ];
      } else if (lower.includes("competitor") || lower.includes("share of voice") || lower.includes("q3")) {
        aiContent =
          "In Q3, your Share of Voice reached 38.4% (+6.2% QoQ), outperforming Competitor X (24.1%) and Competitor Y (18.2%). Your brand leads significantly in product innovation sentiment (+92%), but Competitor X has higher video engagement on TikTok.";
        metrics = [
          { label: "Your SOV", value: "38.4% (#1)", positive: true },
          { label: "Competitor X", value: "24.1% (#2)", positive: false },
          { label: "Net Win Margin", value: "+14.3%", positive: true },
        ];
        actionItems = [
          "Accelerate short-form video campaign to counter Competitor X on TikTok.",
          "Highlight enterprise security benchmark victory in upcoming PR pitch.",
        ];
      } else if (lower.includes("trend") || lower.includes("emerging") || lower.includes("opportunity")) {
        aiContent =
          "Top 3 emerging industry trends detected by predictive models: 1) Autonomous AI Copilots in Operations (+164% discussion growth), 2) Privacy-first On-Premise Analytics (+92%), and 3) Real-Time Audio Podcast Intelligence (+77%).";
        metrics = [
          { label: "Predicted Velocity", value: "+84% Q4 Growth", positive: true },
          { label: "Market Opportunity", value: "High White-Space", positive: true },
        ];
        actionItems = [
          "Publish thought leadership research on Privacy-First AI listening.",
          "Test beta feature for Podcast Audio Monitoring.",
        ];
      } else {
        aiContent =
          `I analyzed 142,850 recent brand interactions regarding "${query}". Overall brand perception remains strong at 78% Positive sentiment. Public conversations show high trust in product speed and customer support.`;
        metrics = [
          { label: "Confidence Score", value: "98.8%", positive: true },
          { label: "Conversations Analyzed", value: "142.8K", positive: true },
        ];
        actionItems = [
          "Export detailed sentiment attribution report for this topic.",
          "Set up automatic Slack alert for sudden sentiment swings above 5%.",
        ];
      }

      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        content: aiContent,
        actionItems,
        metrics,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1100);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <section id="ai-assistant" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/15 via-blue-600/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/30 mb-4">
            <Bot className="w-3.5 h-3.5 text-purple-400" />
            <span>Conversational Intelligence Copilot</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ask Your Brand Data Anything
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Powered by fine-tuned enterprise LLMs. Get instant root-cause diagnostics, competitor briefings, and recommended action steps.
          </p>
        </div>

        {/* CHATBOT INTERFACE CONTAINER */}
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl border border-white/10 shadow-2xl bg-[#070e28]/95 overflow-hidden">
          {/* Top Bar */}
          <div className="px-6 py-4 border-b border-white/10 bg-[#091133] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
                  <Bot className="w-5 h-5" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#091133]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white">InsightAI Copilot</h3>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 font-mono border border-cyan-500/30">
                    GPT-4o Enterprise + Domain RAG
                  </span>
                </div>
                <p className="text-xs text-slate-400">Trained on your brand&apos;s real-time sentiment stream</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setMessages(initialMessages)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                title="Reset Conversation"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Preset Queries Bar */}
          <div className="px-6 py-3 border-b border-white/5 bg-black/30 flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-xs text-slate-400 shrink-0 flex items-center gap-1 font-medium">
              <Lightbulb className="w-3.5 h-3.5 text-amber-400" /> Try:
            </span>
            {presetQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className="shrink-0 text-xs px-3 py-1 rounded-full bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/40 transition-all cursor-pointer truncate max-w-xs"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Chat Messages Display */}
          <div className="p-6 space-y-6 min-h-[380px] max-h-[500px] overflow-y-auto">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {/* AI Avatar */}
                {msg.sender === "ai" && (
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shrink-0 shadow-md shadow-cyan-500/20 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                {/* Message Bubble */}
                <div
                  className={`max-w-2xl rounded-2xl p-4 sm:p-5 text-sm ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-cyan-500/15"
                      : "glass-card bg-[#0b1336]/90 border border-white/10 text-slate-200"
                  }`}
                >
                  <p className="leading-relaxed whitespace-pre-wrap">{msg.content}</p>

                  {/* AI Metrics Grid */}
                  {msg.metrics && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-3 pt-3 border-t border-white/10">
                      {msg.metrics.map((m, i) => (
                        <div key={i} className="p-2 rounded-lg bg-black/40 border border-white/5">
                          <div className="text-[10px] text-slate-400">{m.label}</div>
                          <div
                            className={`text-xs font-bold font-mono mt-0.5 ${
                              m.positive ? "text-emerald-400" : "text-rose-400"
                            }`}
                          >
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* AI Action Items Checklist */}
                  {msg.actionItems && (
                    <div className="mt-4 pt-3 border-t border-white/10">
                      <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono mb-2 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Recommended Action Plan:</span>
                      </div>
                      <div className="space-y-1.5">
                        {msg.actionItems.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                            <span className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                              {idx + 1}
                            </span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Bubble Footer */}
                  <div className="flex items-center justify-between mt-3 text-[10px] text-slate-400">
                    <span>{msg.timestamp}</span>
                    {msg.sender === "ai" && (
                      <button
                        onClick={() => copyToClipboard(msg.content, msg.id)}
                        className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
                      >
                        {copiedId === msg.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy Directive</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {/* User Avatar */}
                {msg.sender === "user" && (
                  <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center text-white shrink-0 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </motion.div>
            ))}

            {/* Simulated Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3.5 justify-start">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="glass-card rounded-2xl px-4 py-3 border border-white/10 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
                  <span className="text-xs text-slate-400 ml-2 font-mono">Analyzing sentiment vectors...</span>
                </div>
              </div>
            )}

            <div ref={chatBottomRef} />
          </div>

          {/* Interactive Chat Input Form */}
          <div className="p-4 sm:p-5 border-t border-white/10 bg-[#091133]/90">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2 relative"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about sentiment, competitor shifts, or crisis alerts..."
                className="w-full pl-4 pr-12 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all shadow-inner"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="absolute right-2 p-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-all cursor-pointer shadow-md shadow-cyan-500/20"
                title="Send query"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 px-1">
              <span>Press Enter ↵ to query intelligence models</span>
              <button
                onClick={() => openTrialModal()}
                className="text-cyan-400 hover:text-cyan-300 font-medium cursor-pointer"
              >
                Connect Your Company Data Lake →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
