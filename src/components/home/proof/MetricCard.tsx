"use client";

import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  label: string;
  value: string;
  score: number; // 0 to 100
  subtext?: string;
  icon?: LucideIcon;
  delay?: number;
  className?: string;
  gradient?: string;
}

export const MetricCard = ({
  label,
  value,
  score,
  subtext,
  icon: Icon,
  delay = 0,
  className,
  gradient = "from-emerald-500 to-green-500",
}: MetricCardProps) => {
  // Radial Progress Calculations
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:shadow-2xl",
        className
      )}
    >
      {/* Hover Gradient Glow */}
      <div
        className={cn(
          "absolute inset-0 -z-10 translate-y-full bg-linear-to-t opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-20",
          gradient
        )}
      />

      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <div className="text-muted-foreground flex items-center gap-2">
            {Icon && <Icon size={16} />}
            <h3 className="text-sm font-medium">{label}</h3>
          </div>
          <div className="mt-2">
            <span className="font-bree text-3xl font-bold tracking-tight text-white">{value}</span>
          </div>
        </div>

        {/* Radial Progress Meter */}
        <div className="relative flex items-center justify-center">
          {/* Background Circle */}
          <svg className="h-16 w-16 -rotate-90 transform" viewBox="0 0 70 70">
            <circle
              cx="35"
              cy="35"
              r={radius}
              stroke="currentColor"
              strokeWidth="6"
              fill="transparent"
              className="text-white/10"
            />
            {/* Progress Circle with Animation */}
            <motion.circle
              initial={{ strokeDashoffset: circumference }}
              whileInView={{ strokeDashoffset }}
              transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              cx="35"
              cy="35"
              r={radius}
              stroke="currentColor"
              strokeWidth="6"
              fill="transparent"
              strokeDasharray={circumference}
              strokeLinecap="round"
              className={cn("text-emerald-500 drop-shadow-[0_0_4px_rgba(16,185,129,0.4)]", {
                "text-yellow-500 drop-shadow-[0_0_4px_rgba(234,179,8,0.4)]":
                  score < 90 && score >= 50,
                "text-red-500 drop-shadow-[0_0_4px_rgba(239,68,68,0.4)]": score < 50,
              })}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="type-nums text-[10px] font-bold text-white/80">{score}</span>
          </div>
        </div>
      </div>

      {/* Loading Bar (Visual Flourish) */}
      <div className="mt-4 flex flex-col gap-1">
        {subtext && <p className="text-muted-foreground/70 font-mono text-xs">{subtext}</p>}
        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/5">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${score}%` }}
            transition={{ duration: 1.2, delay: delay + 0.4 }}
            viewport={{ once: true }}
            className={cn(
              "h-full rounded-full opacity-80",
              score >= 90 ? "bg-emerald-500" : score >= 50 ? "bg-yellow-500" : "bg-red-500"
            )}
          />
        </div>
      </div>
    </motion.div>
  );
};
