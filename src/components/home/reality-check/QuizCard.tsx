"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, X, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

const options: Option[] = [
  { id: "A", text: '"number"', isCorrect: true },
  { id: "B", text: '"string"', isCorrect: false },
  { id: "C", text: '"NaN"', isCorrect: false },
];

export const QuizCard = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleSelect = (optionId: string) => {
    if (hasAnswered) return;
    setSelected(optionId);
    setHasAnswered(true);
  };

  const isCorrect = selected ? options.find((o) => o.id === selected)?.isCorrect : false;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-xl"
    >
      {/* Gradient Glow Border */}
      <div
        className={cn(
          "absolute inset-0 opacity-20 transition-opacity duration-500",
          hasAnswered
            ? isCorrect
              ? "bg-emerald-500/20"
              : "bg-red-500/20"
            : "bg-linear-to-b from-white/10 to-transparent"
        )}
      />

      <div className="relative flex flex-col gap-6 rounded-xl border border-white/5 bg-neutral-900/90 p-6 md:p-8">
        {/* Question Header */}
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-yellow-500/10 p-2 text-yellow-500">
            <HelpCircle size={20} />
          </div>
          <h3 className="text-lg font-medium text-white">JavaScript Reality Check</h3>
        </div>

        {/* Code Snippet */}
        <div className="relative overflow-hidden rounded-lg border border-white/5 bg-black/50 p-4 font-mono text-sm">
          <div className="absolute top-3 left-3 flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500/20" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/20" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-500/20" />
          </div>
          <div className="mt-4 space-y-1">
            <p className="text-pink-400">
              console<span className="text-white">.</span>
              <span className="text-blue-400">log</span>
              <span className="text-white">(</span>
            </p>
            <p className="pl-4 text-purple-400">
              typeof <span className="text-yellow-300">NaN</span>
            </p>
            <p className="text-white">);</p>
          </div>
        </div>

        <p className="text-sm text-neutral-400">What will this output?</p>

        {/* Options */}
        <div className="flex flex-col gap-2">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              disabled={hasAnswered}
              className={cn(
                "relative flex w-full items-center justify-between rounded-lg border px-4 py-3 text-sm font-medium transition-all duration-200",
                // Default State
                !hasAnswered &&
                  "border-white/10 bg-white/5 text-neutral-300 hover:border-white/20 hover:bg-white/10",
                // Correct State
                hasAnswered &&
                  option.isCorrect &&
                  "border-emerald-500/50 bg-emerald-500/10 text-emerald-400",
                // Incorrect State (Selected)
                hasAnswered &&
                  !option.isCorrect &&
                  selected === option.id &&
                  "border-red-500/50 bg-red-500/10 text-red-400",
                // Disabled (Unselected)
                hasAnswered &&
                  selected !== option.id &&
                  !option.isCorrect &&
                  "border-white/5 bg-transparent opacity-50"
              )}
            >
              <span className="font-mono">{option.text}</span>

              {hasAnswered && option.isCorrect && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                  <Check size={16} />
                </motion.div>
              )}
              {hasAnswered && selected === option.id && !option.isCorrect && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                  <X size={16} />
                </motion.div>
              )}
            </button>
          ))}
        </div>

        {/* Feedback Message */}
        <AnimatePresence>
          {hasAnswered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className={cn(
                "mt-2 text-center text-xs font-medium",
                isCorrect ? "text-emerald-400" : "text-neutral-400"
              )}
            >
              {isCorrect
                ? "Frontend instincts: ✅ (NaN is technically a number type)"
                : "Gotcha! NaN is confusingly a 'number' type."}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
