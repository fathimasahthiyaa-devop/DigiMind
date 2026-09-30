"use client";

import React from "react";
import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-60 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Ambient Starlight Dots */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30" />

      {/* Glowing 3D Glass Aurora Orb 1 (Top Left) */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.35, 0.55, 0.35],
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[10%] left-[10%] w-[650px] h-[650px] rounded-full bg-gradient-to-br from-cyan-500/25 via-blue-600/20 to-indigo-600/10 blur-[130px]"
      />

      {/* Glowing 3D Glass Aurora Orb 2 (Top Right) */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.25, 0.45, 0.25],
          x: [0, -45, 0],
          y: [0, 35, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-[25%] -right-[10%] w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-purple-600/20 via-blue-600/15 to-transparent blur-[140px]"
      />

      {/* Glowing 3D Glass Aurora Orb 3 (Bottom Center) */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
          x: [0, 25, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute bottom-[5%] left-[25%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-teal-500/15 via-cyan-600/10 to-transparent blur-[130px]"
      />

      {/* Floating Holographic Geometry Shapes */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 90, 180, 270, 360],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[18%] left-[8%] w-24 h-24 border border-cyan-400/20 rounded-3xl [transform:rotate(45deg)] backdrop-blur-3xl shadow-[0_0_30px_rgba(6,182,212,0.1)]"
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [360, 270, 180, 90, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[45%] right-[7%] w-32 h-32 border border-purple-500/20 rounded-full [box-shadow:inset_0_0_20px_rgba(168,85,247,0.15)]"
      />

      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[22%] left-[12%] w-28 h-28 border border-blue-500/20 rounded-2xl [transform:rotate(25deg)] backdrop-blur-2xl"
      />

      {/* Cyber Circuitry Ray Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-radial-aurora opacity-70" />
    </div>
  );
}
