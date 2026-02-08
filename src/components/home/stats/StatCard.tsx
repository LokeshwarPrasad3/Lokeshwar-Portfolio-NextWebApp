"use client";

import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  subtext?: string;
  icon?: LucideIcon;
  delay?: number;
  className?: string;
  gradient?: string;
}

export const StatCard = ({
  label,
  value,
  subtext,
  icon: Icon,
  delay = 0,
  className,
  gradient = "from-pink-500/20 to-purple-500/20",
}: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={cn(
        "group relative flex flex-col gap-1 overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:shadow-xl",
        className
      )}
    >
      {/* Gradient Glow */}
      <div
        className={cn(
          "absolute inset-0 -z-10 translate-y-full bg-linear-to-t opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100",
          gradient
        )}
      />

      <div className="flex items-center justify-between">
        <h3 className="text-muted-foreground text-sm font-medium">{label}</h3>
        {Icon && (
          <div className="text-foreground/80 rounded-full bg-white/5 p-2 transition-colors group-hover:bg-white/10 group-hover:text-white">
            <Icon size={18} />
          </div>
        )}
      </div>

      <div className="space-y-1">
        <h2 className="font-bree bg-linear-to-br from-white to-white/70 bg-clip-text text-4xl font-bold text-transparent">
          {value}
        </h2>
        {subtext && <p className="text-muted-foreground/80 text-xs">{subtext}</p>}
      </div>
    </motion.div>
  );
};
