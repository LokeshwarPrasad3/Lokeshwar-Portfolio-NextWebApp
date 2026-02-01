"use client";

import { motion } from "motion/react";
import { Bug, Coffee, Eye, Layers, Zap, Rocket } from "lucide-react";
import { StatCard } from "./StatCard";
import { InteractiveCard } from "./InteractiveCard";

export const FunStatsSection = () => {
  return (
    <section className="relative w-full overflow-hidden px-6 py-24 lg:px-12">
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
              <span className="bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                By The Numbers
              </span>{" "}
              <span className="text-muted-foreground/50 mt-2 block text-2xl font-light italic sm:mt-0 sm:inline md:text-3xl">
                (But Make It Fun)
              </span>
            </h2>
            <p className="text-muted-foreground max-w-xl text-lg">
              Stats, experiments, and actual proof that I care about the user experience more than
              my sleep schedule.
            </p>
          </motion.div>
        </div>

        {/* 2. Grid Layout */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Row 1 */}
          <StatCard
            label="Portfolio Visitors"
            value="12,403"
            icon={Eye}
            subtext="Mostly recruiters & my mom"
            gradient="from-blue-500/20 to-cyan-500/20"
            delay={0.1}
          />

          <StatCard
            label="Projects Shipped"
            value="14+"
            icon={Rocket}
            subtext="Only 2 abandoned (progress)"
            gradient="from-purple-500/20 to-pink-500/20"
            delay={0.2}
          />

          {/* Interactive Card spans 2 cols on tablet+ */}
          <InteractiveCard />

          {/* Row 2 */}
          <StatCard
            label="Bugs Fixed"
            value="999"
            icon={Bug}
            subtext="And 999 more created"
            gradient="from-amber-500/20 to-orange-500/20"
            delay={0.3}
          />

          <StatCard
            label="Avg Page Load"
            value="<1s"
            icon={Zap}
            subtext="Faster than your attention span"
            gradient="from-green-500/20 to-emerald-500/20"
            delay={0.4}
          />

          <StatCard
            label="Chai Refills"
            value="∞"
            icon={Coffee}
            subtext="Fueling the codebase"
            gradient="from-rose-500/20 to-red-500/20"
            delay={0.5}
          />

          <StatCard
            label="Tech Stack"
            value="10+"
            icon={Layers}
            subtext="React, Node, Next, & Hope"
            gradient="from-indigo-500/20 to-violet-500/20"
            delay={0.6}
          />
        </div>

        {/* 4. Easter Egg Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground/30 hover:text-muted-foreground/60 cursor-help font-mono text-xs transition-colors selection:bg-pink-500/30">
            /* Yes, this section is over-engineered on purpose. */
          </p>
        </motion.div>
      </div>
    </section>
  );
};
