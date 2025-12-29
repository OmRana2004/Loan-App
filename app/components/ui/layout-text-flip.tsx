"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type LayoutTextFlipProps = {
  text: string;
  words: string[];
  duration?: number;
};

export const LayoutTextFlip = ({
  text,
  words,
  duration = 3000,
}: LayoutTextFlipProps) => {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Deterministic animation (no interval drift)
  useEffect(() => {
    if (!mounted) return;

    const timeout = setTimeout(() => {
      setIndex((i) => (i + 1) % words.length);
    }, duration);

    return () => clearTimeout(timeout);
  }, [index, mounted, duration, words.length]);

  // SEO + SSR fallback
  if (!mounted) {
    return (
      <span className="text-2xl md:text-4xl font-bold tracking-tight">
        {text} {words[0]}
      </span>
    );
  }

  return (
    <div className="flex items-center gap-2 flex-wrap justify-center">
      <span className="text-2xl md:text-4xl font-bold tracking-tight drop-shadow-lg">
        {text}
      </span>

      <span className="relative overflow-hidden px-0 py-0 text-2xl md:text-4xl font-bold tracking-tight text-blue-600">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ y: -24, opacity: 0, filter: "blur(8px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: 24, opacity: 0, filter: "blur(8px)" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className={cn("inline-block whitespace-nowrap")}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </div>
  );
};
