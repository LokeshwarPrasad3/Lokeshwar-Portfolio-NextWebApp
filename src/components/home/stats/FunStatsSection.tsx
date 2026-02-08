"use client";

import { motion } from "motion/react";
import { Bug, Coffee, Eye, Layers, Zap, Rocket, Clock } from "lucide-react";
import { StatCard } from "./StatCard";
import { InteractiveCard } from "./InteractiveCard";
import TrafficChart from "@/components/analytics/TrafficChart";
import { AnalyticsStatCards } from "@/components/analytics/StatCards";

export const FunStatsSection = () => {
  return (
    <section className="relative z-10 w-full overflow-hidden px-6 py-24 lg:px-12">
      <div className="container mx-auto max-w-7xl">
        {/* 1. Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-bree mb-4 text-4xl font-bold tracking-wide md:text-5xl">
              <span className="bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                By The Numbers
              </span>{" "}
              {/* <span className="text-muted-foreground/50 mt-2 block text-2xl font-light italic sm:mt-0 sm:inline md:text-3xl">
                (But Make It Fun)
              </span> */}
            </h2>
            <p className="text-muted-foreground max-w-xl text-lg">
              Stats, experiments, and actual proof that I care about the user experience more than
              my sleep schedule.
            </p>
          </motion.div>
        </div>

        <div className="col-span-12 grid grid-cols-12 gap-6">
          <div className="col-span-9">
            <TrafficChart />
          </div>

          <div className="col-span-3 grid gap-6">
            <AnalyticsStatCards />

            {/* <InteractiveCard /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
