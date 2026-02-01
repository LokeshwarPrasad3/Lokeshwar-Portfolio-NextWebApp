"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Zap, Layout, Bug, Rocket, GitBranch } from "lucide-react";
import { cn } from "@/lib/utils";

const traits = [
  {
    id: "performance",
    title: "Performance-first",
    description:
      "I don't just ship features; I ship fast ones. 60fps animations and sub-second load times are non-negotiable.",
    icon: Zap,
    gradient: "from-yellow-400 via-orange-500 to-red-500",
  },
  {
    id: "design",
    title: "Design-sensitive",
    description:
      "I bridge the gap between Figma and code. I obsess over pixel-perfect implementation and micro-interactions.",
    icon: Layout,
    gradient: "from-pink-500 via-rose-500 to-red-500",
  },
  {
    id: "debug",
    title: "Debugger by instinct",
    description:
      "Tricky bugs don't scare me. I actually enjoy the detective work of tracing issues through the stack.",
    icon: Bug,
    gradient: "from-cyan-400 via-blue-500 to-indigo-500",
  },
  {
    id: "ship",
    title: "Ship > Perfect",
    description:
      "Perfection is the enemy of done. I prioritize shipping value to users while maintaining a high quality bar.",
    icon: Rocket,
    gradient: "from-emerald-400 via-green-500 to-teal-500",
  },
  {
    id: "version",
    title: "Git Ninja",
    description:
      "Clean commits, meaningful PRs, and no merge conflicts. I treat version control as a communication tool.",
    icon: GitBranch,
    gradient: "from-purple-400 via-violet-500 to-indigo-500",
  },
];

export const WorkSection = () => {
  const [activeTrait, setActiveTrait] = useState(traits[0]);

  return (
    <section className="relative w-full overflow-hidden bg-black/5 px-6 py-24 lg:px-12">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-bree mb-4 text-3xl font-bold tracking-tight md:text-5xl">
              <span className="bg-linear-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                How I Actually Work
              </span>
            </h2>
            <p className="text-muted-foreground/60 font-sans text-xl font-light italic">
              (On Real Projects)
            </p>
          </motion.div>
        </div>

        <div className="grid min-h-[400px] grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column: Trait List */}
          <div className="flex flex-col gap-3 lg:col-span-5">
            {traits.map((trait) => (
              <button
                key={trait.id}
                onMouseEnter={() => setActiveTrait(trait)}
                onClick={() => setActiveTrait(trait)} // Mobile tap
                className={cn(
                  "group relative flex items-center gap-4 rounded-xl border px-6 py-4 text-left transition-all duration-300",
                  activeTrait.id === trait.id
                    ? "border-white/10 bg-white/5 shadow-lg"
                    : "border-transparent hover:border-white/5 hover:bg-white/5"
                )}
              >
                <div
                  className={cn(
                    "rounded-full p-2 text-white transition-all duration-300",
                    activeTrait.id === trait.id
                      ? "bg-linear-to-br " + trait.gradient
                      : "bg-neutral-800"
                  )}
                >
                  <trait.icon size={20} />
                </div>
                <span
                  className={cn(
                    "text-lg font-medium transition-colors",
                    activeTrait.id === trait.id
                      ? "text-white"
                      : "text-muted-foreground group-hover:text-white"
                  )}
                >
                  {trait.title}
                </span>

                {/* Active Indicator Arrow */}
                {activeTrait.id === trait.id && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute right-4 text-white/20"
                  >
                    →
                  </motion.div>
                )}
              </button>
            ))}
          </div>

          {/* Right Column: Detail Card */}
          <div className="lg:col-span-7">
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl md:p-12">
              {/* Background Gradient Blob based on active trait */}
              <motion.div
                key={activeTrait.id + "-bg"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={cn(
                  "absolute -top-20 -right-20 h-64 w-64 rounded-full blur-[80px]",
                  "bg-linear-to-br",
                  activeTrait.gradient
                )}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTrait.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative flex h-full flex-col justify-center gap-6"
                >
                  <div
                    className={cn(
                      "w-fit rounded-2xl bg-linear-to-br p-4 shadow-2xl",
                      activeTrait.gradient
                    )}
                  >
                    <activeTrait.icon size={48} className="text-white" />
                  </div>

                  <div>
                    <h3 className="font-bree mb-4 text-3xl font-bold text-white">
                      {activeTrait.title}
                    </h3>
                    <p className="text-muted-foreground text-xl leading-relaxed">
                      {activeTrait.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
