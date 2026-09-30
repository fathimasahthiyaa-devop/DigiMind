"use client";

import React, { useState } from "react";
import {
  Search,
  Zap,
  Star,
  CheckCircle2,
  ShieldCheck,
  MessageCircle,
  ExternalLink,
  Info,
  X,
  Sparkles,
  ArrowRight,
  Clock,
  Key,
} from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";
import { useCurrency } from "@/context/currency-context";
import { generateWhatsAppOrderUrl } from "@/lib/whatsapp";
import { getProductLogo } from "@/components/brand-logos";

export function DigiMindCatalog() {
  const { formatPrice, currency } = useCurrency();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = [
    { id: "all", label: "All Offers" },
    { id: "career", label: "Career & Learning" },
    { id: "design", label: "Design & Creative" },
    { id: "dev", label: "Developer & Cloud" },
    { id: "ai", label: "AI & Productivity" },
    { id: "streaming", label: "Streaming & Media" },
  ];

  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-1/4 w-[550px] h-[550px] bg-gradient-to-l from-blue-600/15 via-cyan-600/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 mb-4">
            <Zap className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
            <span>Best Selling Subscription Offers</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Premium Software & Accounts Catalog
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Official licenses, voucher codes & invitations with full warranty. Click any product to inspect details or order instantly.
          </p>
        </div>

        {/* SEARCH & CATEGORY FILTER BAR */}
        <div className="glass-panel rounded-2xl p-4 mb-10 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar w-full md:w-auto pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-cyan-500/20"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products (e.g. YouTube, GitHub)..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/90 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-all"
            />
          </div>
        </div>

        {/* PRODUCT CARDS GRID WITH OFFICIAL BRAND LOGOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            const currentPrice = formatPrice(product.priceUSD, product.priceLKR);
            const originalPrice = formatPrice(product.originalPriceUSD, product.originalPriceLKR);
            const discountPercent = Math.round(
              ((product.originalPriceUSD - product.priceUSD) / product.originalPriceUSD) * 100
            );

            const whatsappUrl = generateWhatsAppOrderUrl({
              productName: product.name,
              duration: product.duration,
              priceString: currentPrice,
            });

            return (
              <div
                key={product.id}
                className="group relative rounded-3xl glass-card border border-white/10 hover:border-cyan-500/40 p-6 flex flex-col justify-between transition-all duration-300 shadow-xl overflow-hidden hover:shadow-cyan-500/10 hover:-translate-y-1.5 bg-[#08102d]/90"
              >
                <div>
                  {/* Top Badge Row */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                      {product.stockStatus}
                    </span>

                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      Save {discountPercent}%
                    </span>
                  </div>

                  {/* Header: Official Logo + Title */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 p-2 flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 group-hover:border-cyan-500/40 transition-transform">
                      {getProductLogo(product.id, "w-8 h-8")}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight">
                        {product.name}
                      </h3>
                      <span className="text-[11px] font-medium text-cyan-400">
                        {product.categoryName}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 mt-1 mb-4 leading-relaxed font-normal">
                    {product.tagline}
                  </p>

                  {/* Rating & Activation Method Badge */}
                  <div className="flex items-center justify-between text-xs pb-4 mb-4 border-b border-white/5">
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span className="font-bold text-white text-xs">{product.rating}</span>
                      <span className="text-slate-500 text-[11px]">({product.reviewsCount})</span>
                    </div>

                    <div className="flex items-center gap-1 text-cyan-400 text-[11px] font-medium">
                      <Key className="w-3 h-3" />
                      <span>{product.activationMethod}</span>
                    </div>
                  </div>

                  {/* Feature Bullets */}
                  <div className="space-y-2 mb-6">
                    {product.features.slice(0, 4).map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Pricing & Action Buttons */}
                <div>
                  {/* Price Box */}
                  <div className="p-3 rounded-2xl bg-black/40 border border-white/5 mb-4 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">
                        Offer Price ({currency})
                      </div>
                      <div className="flex items-baseline gap-1.5 mt-0.5">
                        <span className="text-2xl font-extrabold text-white font-mono">
                          {currentPrice}
                        </span>
                        <span className="text-xs text-slate-500 line-through font-mono">
                          {originalPrice}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[11px] text-slate-400 block font-medium">
                        {product.duration}
                      </span>
                      <span className="text-[10px] text-emerald-400 font-medium">
                        Warranty Included
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-600" />
                      <span>Order on WhatsApp</span>
                    </a>

                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white font-semibold text-xs transition-colors cursor-pointer text-center"
                    >
                      Quick Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* PRODUCT DETAIL MODAL WITH BRAND LOGO */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <div className="relative w-full max-w-xl glass-panel bg-[#070e28]/98 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 p-2.5 flex items-center justify-center shrink-0 shadow-lg">
                  {getProductLogo(selectedProduct.id, "w-10 h-10")}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                      {selectedProduct.categoryName}
                    </span>
                    <span className="text-xs text-slate-400">
                      {selectedProduct.activationMethod}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {selectedProduct.name}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-cyan-300 mb-4">{selectedProduct.tagline}</p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {selectedProduct.description}
              </p>

              <div className="mb-6 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                  Full Feature Inclusion:
                </div>
                {selectedProduct.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Price & Warranty Box */}
              <div className="p-4 rounded-2xl bg-black/50 border border-white/5 mb-6 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">Total Price ({currency})</div>
                  <div className="text-3xl font-extrabold text-white font-mono mt-0.5">
                    {formatPrice(selectedProduct.priceUSD, selectedProduct.priceLKR)}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1 justify-end">
                    <ShieldCheck className="w-3.5 h-3.5" /> Warranty Included
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {selectedProduct.warranty}
                  </div>
                </div>
              </div>

              {/* Order Button */}
              <a
                href={generateWhatsAppOrderUrl({
                  productName: selectedProduct.name,
                  duration: selectedProduct.duration,
                  priceString: formatPrice(selectedProduct.priceUSD, selectedProduct.priceLKR),
                })}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-sm shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>Confirm Order via WhatsApp (+94 74 260 5036)</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
