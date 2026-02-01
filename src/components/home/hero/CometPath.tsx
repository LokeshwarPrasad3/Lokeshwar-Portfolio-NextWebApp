"use client";

import React, { useMemo } from "react";
import { motion } from "motion/react";

export default function CometPath() {
  const size = 200;

  // Configuration
  const steps = 2;
  const stepSize = 60;
  const visibleLength = 80;

  // Calculate the actual path length mathematically
  // (steps * stepSize * 2) for the loop + stepSize for the final H
  const actualPathLength = useMemo(() => steps * stepSize * 2 + stepSize, [steps, stepSize]);

  const pathData = useMemo(() => {
    let d = "M 20 20";
    for (let i = 0; i < steps; i++) {
      d += ` h ${stepSize} v ${stepSize}`;
    }
    d += ` h ${stepSize}`;
    return d;
  }, [steps, stepSize]);

  return (
    <div className="absolute -top-34 -left-10 w-fit rotate-180">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <defs>
          <linearGradient id="comet-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
          </linearGradient>

          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <motion.path
          d={pathData}
          stroke="url(#comet-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
          initial={{
            // Set the gap exactly to the path length plus the comet length
            // to ensure it loops immediately as it finishes.
            strokeDasharray: `${visibleLength} ${actualPathLength}`,
            strokeDashoffset: actualPathLength,
          }}
          animate={{
            strokeDashoffset: -visibleLength, // Stops exactly when the tail exits
          }}
          transition={{
            duration: 2, // Reduced from 8 to make it feel snappier without the dead space
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>
    </div>
  );
}
