"use client";

import { motion } from "motion/react";

export const CodeFragment = () => {
  return (
    <div className="relative w-full max-w-[340px] overflow-hidden rounded-xl border border-white/10 bg-[#1e1e1e]/95 shadow-2xl backdrop-blur-md">
      {/* Window Controls - Authentic macOS spacing */}
      <div className="flex items-center gap-2 border-b border-white/5 bg-white/5 px-4 py-3">
        <div className="h-3 w-3 rounded-full border border-[#E0443E] bg-[#FF5F57]" />
        <div className="h-3 w-3 rounded-full border border-[#D89E24] bg-[#FEBC2E]" />
        <div className="h-3 w-3 rounded-full border border-[#1AAB29] bg-[#28C840]" />
        <div className="ml-2 text-[10px] tracking-wide text-white/60">developer.ts</div>
      </div>

      {/* Code Content - Syntax Highlighting */}
      <div className="p-5 text-xs leading-6 text-gray-300 sm:text-[13px]">
        <div className="grid grid-cols-[auto_1fr] gap-x-4">
          {/* Line Numbers */}
          <div className="flex flex-col text-right font-medium text-gray-700 select-none">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
          </div>
          {/* Code */}
          <div className="overflow-x-auto tracking-wide">
            <p>
              <span className="font-semibold text-purple-400">const</span>{" "}
              <span className="text-yellow-300">Developer</span>{" "}
              <span className="text-white">=</span> <span className="text-white">{"{"}</span>
            </p>
            <p className="pl-4">
              <span className="text-blue-300">name</span>:{" "}
              <span className="text-green-400">"Lokeshwar"</span>,
            </p>
            <p className="pl-4">
              <span className="text-blue-300">role</span>:{" "}
              <span className="text-green-400">"Full Stack Engineer"</span>,
            </p>
            <p className="pl-4">
              <span className="text-blue-300">focus</span>: <span className="text-white">[</span>
            </p>
            <p className="pl-8">
              <span className="text-orange-300">"React"</span>,{" "}
              <span className="text-orange-300">"Next.js"</span>,
            </p>
            <p className="pl-8">
              <span className="text-orange-300">"Performance"</span>,{" "}
              <span className="text-orange-300">"UX"</span>
            </p>
            <p className="pl-4">
              <span className="text-white">]</span>
            </p>
            <p>
              <span className="text-white">{"}"}</span>;
            </p>
          </div>
        </div>
      </div>

      {/* Glossy Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-white/5 via-white/0 to-transparent opacity-40" />
    </div>
  );
};
