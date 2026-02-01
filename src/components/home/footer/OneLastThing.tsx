"use client";

import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export const OneLastThing = () => {
  return (
    <section className="relative w-full overflow-hidden px-6 py-24">
      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[200px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 blur-[100px]" />

      <div className="relative z-10 container mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <div className="rounded-full border border-white/5 bg-white/5 p-3 backdrop-blur-sm">
            <Sparkles size={20} className="text-yellow-400" />
          </div>

          <h2 className="font-bree text-2xl leading-tight font-medium text-white/90 md:text-3xl">
            "If you scrolled this far, <br className="hidden sm:block" />
            we’ll probably get along."
          </h2>

          <p className="text-muted-foreground/50 font-mono text-sm tracking-widest uppercase">
            — One Last Thing
          </p>
        </motion.div>
      </div>
    </section>
  );
};
