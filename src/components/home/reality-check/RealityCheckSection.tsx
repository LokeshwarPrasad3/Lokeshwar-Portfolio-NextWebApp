"use client";

import { motion } from "motion/react";
import { QuizCard } from "./QuizCard";

export const RealityCheckSection = () => {
  return (
    <section className="relative z-10 w-full overflow-hidden px-6 py-24 lg:px-12">
      <div className="container mx-auto max-w-4xl">
        {/* 1. Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-bree mb-4 text-3xl font-bold tracking-wide md:text-4xl">
              <span className="bg-linear-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Quick Frontend Reality Check
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">Not a test. Just curiosity.</p>
          </motion.div>
        </div>

        {/* 2. Interactive Card */}
        <div className="flex justify-center">
          <QuizCard />
        </div>

        {/* 3. Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-base font-medium">
            Don’t worry. No one gets this right on first scroll.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
