"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MouseTracker() {
  const [mounted, setMounted] = useState(false);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth mouse coordinates with physics spring
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Springs for smooth, lagging follower effects
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const glowSpringConfig = { damping: 40, stiffness: 120, mass: 1 };
  const glowX = useSpring(mouseX, glowSpringConfig);
  const glowY = useSpring(mouseY, glowSpringConfig);

  useEffect(() => {
    // Only run on client and devices with fine pointer (mouse, not touch)
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive elements
      const target = e.target as HTMLElement | null;
      if (
        target?.closest("a") ||
        target?.closest("button") ||
        target?.closest("input") ||
        target?.closest("select") ||
        target?.closest(".cursor-pointer")
      ) {
        setIsHoveringClickable(true);
      } else {
        setIsHoveringClickable(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!mounted || !isVisible) return null;

  return (
    <>
      {/* AMBIENT RADIAL SPOTLIGHT THAT GLIDES BEHIND CONTENT */}
      <motion.div
        style={{
          left: glowX,
          top: glowY,
        }}
        className="fixed -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-radial from-cyan-500/15 via-blue-600/10 to-transparent blur-[90px] pointer-events-none z-10"
      />

      {/* OUTER ELEGANT MAGNETIC RING */}
      <motion.div
        style={{
          left: smoothX,
          top: smoothY,
        }}
        animate={{
          scale: isHoveringClickable ? 1.6 : 1,
          borderColor: isHoveringClickable
            ? "rgba(34, 211, 238, 0.9)"
            : "rgba(34, 211, 238, 0.45)",
          backgroundColor: isHoveringClickable
            ? "rgba(6, 182, 212, 0.12)"
            : "rgba(6, 182, 212, 0)",
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="fixed -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-cyan-400/50 pointer-events-none z-50 shadow-[0_0_15px_rgba(6,182,212,0.3)] backdrop-blur-[1px]"
      />

      {/* INNER SHARP GLOWING CORE DOT */}
      <motion.div
        style={{
          left: mouseX,
          top: mouseY,
        }}
        animate={{
          scale: isHoveringClickable ? 0.6 : 1,
        }}
        transition={{ duration: 0.1 }}
        className="fixed -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_8px_#22d3ee] pointer-events-none z-50"
      />
    </>
  );
}
