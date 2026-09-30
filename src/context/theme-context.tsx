"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Theme = "dark" | "light" | "midnight";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    // Check localStorage or system preference
    const saved = localStorage.getItem("digimind-theme") as Theme | null;
    if (saved && (saved === "dark" || saved === "light" || saved === "midnight")) {
      setThemeState(saved);
      applyTheme(saved);
    } else {
      applyTheme("dark");
    }
  }, []);

  const applyTheme = (t: Theme) => {
    const root = document.documentElement;
    root.classList.remove("dark", "light", "midnight");
    root.classList.add(t);
    root.setAttribute("data-theme", t);
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("digimind-theme", newTheme);
    applyTheme(newTheme);
  };

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : theme === "light" ? "midnight" : "dark";
    setTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
