"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Currency = "LKR" | "USD" | "INR" | "EUR";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (priceUSD: number, priceLKR?: number) => string;
  currencySymbol: string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("USD");

  const symbols: Record<Currency, string> = {
    USD: "$",
    LKR: "Rs ",
    INR: "₹",
    EUR: "€",
  };

  const formatPrice = (priceUSD: number, priceLKR?: number): string => {
    switch (currency) {
      case "LKR":
        if (priceLKR) {
          return `Rs ${priceLKR.toLocaleString()}`;
        }
        return `Rs ${Math.round(priceUSD * 310).toLocaleString()}`;
      case "INR":
        return `₹${Math.round(priceUSD * 83).toLocaleString()}`;
      case "EUR":
        return `€${(priceUSD * 0.92).toFixed(0)}`;
      case "USD":
      default:
        return `$${priceUSD}`;
    }
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        formatPrice,
        currencySymbol: symbols[currency],
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}
