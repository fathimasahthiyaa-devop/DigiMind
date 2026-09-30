"use client";

import React from "react";
import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Ambient glowing radial orbs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.4, 0.25],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[15%] left-[20%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-600/25 via-cyan-500/20 to-transparent blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
          x: [0, -40, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-[35%] -right-[10%] w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-purple-600/20 via-blue-600/15 to-transparent blur-[140px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.3, 0.15],
          x: [0, 20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute bottom-[10%] left-[5%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-cyan-600/20 via-indigo-600/15 to-transparent blur-[130px]"
      />

      {/* Floating starlight particles */}
      <div className="absolute inset-0 bg-dots-pattern opacity-25" />
    </div>
  );
}
