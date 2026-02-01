"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const InteractiveCard = () => {
  const [errors, setErrors] = useState(0);
  const [isChecking, setIsChecking] = useState(false);

  // Mock checking animation
  const handleCheck = () => {
    setIsChecking(true);
    setTimeout(() => {
      setIsChecking(false);
      // 10% chance to find a "bug" just for fun, or always keep 0 to flex
      setErrors(0);
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="group relative col-span-1 overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-1 backdrop-blur-xl md:col-span-2"
    >
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 via-purple-500/5 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col justify-between rounded-xl border border-white/5 bg-neutral-900/50 p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-md bg-neutral-800 p-2 text-green-400">
              <Terminal size={20} />
            </div>
            <span className="text-sm font-medium text-neutral-400">System Status</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span
                className={cn(
                  "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                  errors === 0 ? "bg-green-400" : "bg-red-500"
                )}
              ></span>
              <span
                className={cn(
                  "relative inline-flex h-3 w-3 rounded-full",
                  errors === 0 ? "bg-green-500" : "bg-red-600"
                )}
              ></span>
            </span>
            <span className="font-mono text-xs tracking-wider text-neutral-500 uppercase">
              {isChecking ? "SCANNING..." : "ONLINE"}
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="my-6 flex flex-col items-center justify-center text-center">
          <AnimatePresence mode="wait">
            {isChecking ? (
              <motion.div
                key="scanning"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="font-mono text-2xl text-cyan-400"
              >
                &gt; npm run audit...
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center gap-2"
              >
                <span
                  className={cn(
                    "font-bree text-5xl font-bold",
                    errors === 0 ? "text-white" : "text-red-400"
                  )}
                >
                  {errors}
                </span>
                <p className="text-muted-foreground text-sm tracking-widest uppercase">
                  Console Errors Today
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer / Action */}
        <div className="flex items-center justify-between border-t border-white/5 pt-4">
          <div className="text-xs text-neutral-500">Last checked: Just now</div>
          <button
            onClick={handleCheck}
            disabled={isChecking}
            className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-medium text-white transition-all hover:bg-white/10 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isChecking ? (
              "Scanning..."
            ) : (
              <>
                <CheckCircle2 size={14} className="text-green-400" />
                Verify System
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};
