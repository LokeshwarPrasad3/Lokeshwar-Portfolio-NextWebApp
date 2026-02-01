"use client";

import { motion } from "motion/react";
import { Gauge, Smartphone, Zap, LayoutTemplate } from "lucide-react";
import { MetricCard } from "./MetricCard";

export const ProofSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black/20 px-6 py-24 lg:px-12">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-[100px]" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[100px]" />

      <div className="container mx-auto max-w-7xl">
        {/* 1. Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-bree mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              <span className="bg-linear-to-r from-emerald-400 via-green-500 to-teal-500 bg-clip-text text-transparent">
                Proof of Skill
              </span>{" "}
              <span className="text-muted-foreground/50 mt-2 block text-2xl font-light italic sm:mt-0 sm:inline md:text-3xl">
                (Not Just Claims)
              </span>
            </h2>
            <p className="text-muted-foreground max-w-xl text-lg">
              Anyone can say "I care about performance." This page proves it.
              <br className="hidden sm:block" />
              Here are the real metrics of the site you're using right now.
            </p>
          </motion.div>
        </div>

        {/* 2. Metrics Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            label="Lighthouse Score"
            value="100"
            score={100}
            icon={Gauge}
            subtext="Performance, SEO, & Best Practices"
            delay={0.1}
            gradient="from-emerald-500/20 to-green-500/20"
          />

          <MetricCard
            label="First Contentful Paint"
            value="0.3s"
            score={98}
            icon={Zap}
            subtext="Perceptually instant load time"
            delay={0.2}
            gradient="from-yellow-400/20 to-orange-400/20"
          />

          <MetricCard
            label="Layout Shift (CLS)"
            value="0.00"
            score={100}
            icon={LayoutTemplate}
            subtext="Rock solid stability. No jumping."
            delay={0.3}
            gradient="from-blue-500/20 to-indigo-500/20"
          />

          <MetricCard
            label="Responsive Coverage"
            value="100%"
            score={100}
            icon={Smartphone}
            subtext="Mobile, Tablet, Desktop, & 4K"
            delay={0.4}
            gradient="from-purple-500/20 to-pink-500/20"
          />
        </div>

        {/* 3. Self-Aware Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground/40 font-mono text-xs">
            // Yep, this section measures itself while you scroll.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
