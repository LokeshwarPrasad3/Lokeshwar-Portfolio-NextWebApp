"use client";

import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { CodeFragment } from "./CodeFragment";
import CometPath from "./CometPath";
import { ImageTransition } from "./ImageTransition";
import { ToolButton } from "./ToolButton";

// --- Components ---

export const HeroSection = () => {
  const typedEl = useRef(null);
  const typed = useRef<Typed | null>(null);
  const [gradientClass, setGradientClass] = useState("from-pink-500 to-yellow-500");

  // Mouse Position for Global Parallax (Subtle)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 30, damping: 50 });
  const smoothY = useSpring(mouseY, { stiffness: 30, damping: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    mouseX.set(clientX - centerX);
    mouseY.set(clientY - centerY);
  };

  // Parallax Transforms
  const moveBack = useTransform(smoothX, (x) => x * 0.015);
  const moveMid = useTransform(smoothX, (x) => x * 0.025);
  const tiltImg = useTransform(smoothX, [-800, 800], [-2, 2]);

  useEffect(() => {
    const options = {
      strings: ["Developer", "Programmer", "Engineer"],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true,
      preStringTyped: (arrayPos: number) => {
        // Change gradient based on word index
        if (arrayPos === 0)
          setGradientClass("from-pink-500 to-yellow-500"); // Developer
        else if (arrayPos === 1)
          setGradientClass("from-purple-500 to-pink-500"); // Programmer
        else if (arrayPos === 2) setGradientClass("from-green-400 to-cyan-500"); // Engineer
      },
    };

    typed.current = new Typed(typedEl.current, options);
    return () => {
      typed.current?.destroy();
    };
  }, []);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden px-6 lg:px-12"
    >
      {/* --- Subtle Background Noise/Gradient --- */}
      {/* <div className="absolute inset-0 -z-50 pointer-events-none opacity-20">
                <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[140px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[800px] h-[800px] bg-pink-500/5 rounded-full blur-[140px]" />
            </div> */}

      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-12">
        {/* --- LEFT SIDE: Content (Col span 6) --- */}
        <div className="relative z-10 flex w-fit flex-col items-start justify-center gap-6">
          <CometPath />

          {/* 1. Greeting & Typewriter */}
          <div className="relative flex flex-col gap-2">
            <span
              style={{ fontFamily: "var(--font-bree-serif)" }}
              className="text-foreground block text-2xl font-bold sm:text-3xl"
            >
              Hey,
            </span>
            <h1 className="font-bree text-foreground text-4xl leading-tight font-medium tracking-wide md:text-5xl">
              I am{" "}
              <span
                ref={typedEl}
                style={{ fontFamily: "var(--font-bree-serif)" }}
                className={`bg-linear-to-r bg-clip-text text-transparent ${gradientClass} transition-colors duration-300`}
              />
            </h1>
          </div>

          {/* 2. Personal Bio */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-muted-foreground max-w-lg text-lg leading-relaxed"
          >
            I’m Lokeshwar Prasad Dewangan, a full-stack developer building modern, scalable web
            experiences with a strong focus on UI, performance, and thoughtful interactions.
          </motion.p>

          {/* 3. CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <ToolButton icon={Mail}>Hire Me</ToolButton>
            <ToolButton variant="secondary" icon={ArrowRight}>
              Message
            </ToolButton>

            <div className="bg-border/40 mx-2 hidden h-8 w-px sm:block" />
          </motion.div>
        </div>

        {/* --- RIGHT SIDE: The Stack (Col span 6) --- */}
        <div className="perspective-1000 relative left-15 flex h-[600px] w-full max-w-3xl items-center justify-center">
          {/* STACK LAYER 1: Background Images (Drift, Blur, Low Opacity) */}
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            style={{ x: moveBack }}
            className="pointer-events-none absolute top-[0%] right-[10%] z-0 h-[220px] w-[200px] overflow-hidden rounded-lg border border-white/5 opacity-20 blur-[2px] select-none"
          >
            <img
              src="https://picsum.photos/300/400?random=10"
              alt=""
              className="h-full w-full object-cover grayscale"
            />
          </motion.div>

          <motion.div
            animate={{ y: [15, -15, 15] }} // Opposite drift
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            style={{ x: moveBack }}
            className="pointer-events-none absolute bottom-[54%] left-[5%] z-0 h-[240px] w-[180px] overflow-hidden rounded-lg border border-white/5 opacity-30 blur-[2px] select-none lg:left-[12%]"
          >
            <img
              src="https://picsum.photos/300/400?random=11"
              alt=""
              className="h-full w-full object-cover mix-blend-multiply grayscale dark:mix-blend-screen"
            />
          </motion.div>

          {/* STACK LAYER 2: Main Image (Anchor, Sharp, Center) */}
          {/* This is the center of the visual gravity */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ rotateX: tiltImg, rotateY: tiltImg }} // Micro tilt
            className="group relative z-20 aspect-[3/4] w-[300px] overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-2xl md:w-[350px]"
          >
            <ImageTransition />
          </motion.div>

          {/* STACK LAYER 3: Code Fragment (Offset, Secondary) */}
          {/* Positioned slightly below and offset, Z-index implies it's a separate 'tool' floating near the 'person' */}
          <motion.div
            style={{ x: moveMid, y: moveMid }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute -bottom-6 left-[8%] z-30 w-[80%] transition-all duration-300 hover:z-40 md:left-[15%] md:w-auto lg:left-[5%]"
          >
            <div className="scale-90 transform overflow-hidden rounded-xl shadow-2xl shadow-black/50 sm:scale-100">
              <CodeFragment />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
