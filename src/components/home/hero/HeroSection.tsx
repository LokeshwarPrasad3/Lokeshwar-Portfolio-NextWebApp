"use client";

import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { motion, useTransform, useSpring, useMotionValue } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ImageTransition } from "./ImageTransition";
import { ToolButton } from "./ToolButton";
import { FeaturedBadge } from "./FeaturedBadge";
import DecorativeImage1 from "@/assets/images/transition/decorative-bg-1.jpeg";
import DecorativeImage2 from "@/assets/images/transition/decorative-bg-2.jpeg";

const CodeFragment = dynamic(() => import("./CodeFragment").then((mod) => mod.CodeFragment), {
  ssr: false,
});
const CometPath = dynamic(() => import("./CometPath"), { ssr: false });

export const HeroSection = () => {
  const typedEl = useRef(null);
  const typed = useRef<Typed | null>(null);
  const [gradientClass, setGradientClass] = useState("from-pink-500 to-yellow-500");

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
      className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden px-6 pt-28 pb-20 md:pt-32 lg:px-12 lg:pt-0 lg:pb-0"
    >
      {/* --- Subtle Background Noise/Gradient --- */}
      {/* <div className="absolute inset-0 -z-50 pointer-events-none opacity-20">
                <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[140px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[800px] h-[800px] bg-pink-500/5 rounded-full blur-[140px]" />
            </div> */}

      <div className="mx-auto flex h-full w-full max-w-7xl flex-col-reverse items-center justify-center gap-12 lg:flex-row lg:justify-between">
        <div className="relative z-10 flex w-full flex-col items-center justify-center gap-6 text-center lg:w-fit lg:items-start lg:text-left">
          <CometPath />

          <div className="font-bree relative flex flex-col gap-2">
            <span className="text-foreground block text-2xl font-bold sm:text-3xl">Hey,</span>
            <h1 className="text-foreground text-4xl leading-tight font-medium tracking-wide md:text-5xl">
              I am{" "}
              <span
                ref={typedEl}
                style={{ fontFamily: "var(--font-bree-serif)" }}
                className={`bg-linear-to-r bg-clip-text text-transparent ${gradientClass} transition-colors duration-300`}
              />
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-muted-foreground max-w-lg text-lg leading-relaxed"
          >
            I’m Lokeshwar Prasad Dewangan, a full-stack developer building modern, scalable web
            experiences with a strong focus on UI, performance, and thoughtful interactions.
          </motion.p>

          <FeaturedBadge />

          {/* 3. CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4 lg:justify-start"
          >
            <ToolButton icon={Mail}>Hire Me</ToolButton>
            <ToolButton variant="secondary" icon={ArrowRight}>
              Message
            </ToolButton>

            <div className="bg-border/40 mx-2 hidden h-8 w-px sm:block" />
          </motion.div>
        </div>

        <div className="perspective-1000 relative flex h-[450px] w-full max-w-[300px] items-center justify-center sm:h-[550px] sm:max-w-xl lg:left-20 lg:h-[600px] lg:max-w-3xl 2xl:left-15">
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            style={{ x: moveBack }}
            className="pointer-events-none absolute -top-[4%] -right-[10%] z-0 h-[220px] w-[200px] overflow-hidden rounded-lg border border-white/5 opacity-20 blur-[2px] select-none md:top-[0%] md:right-[10%]"
          >
            <Image
              src={DecorativeImage2}
              alt="Decorative background"
              fill
              sizes="200px"
              placeholder="blur"
              role="presentation"
              className="object-cover grayscale"
            />
          </motion.div>

          <motion.div
            animate={{ y: [15, -15, 15] }} // Opposite drift
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            style={{ x: moveBack }}
            className="pointer-events-none absolute -bottom-[6%] -left-[10%] z-0 h-[240px] w-[180px] overflow-hidden rounded-lg border border-white/5 opacity-30 blur-[2px] select-none md:bottom-[54%] md:left-[5%] lg:left-[12%]"
          >
            <Image
              src={DecorativeImage1}
              alt="Decorative background"
              fill
              sizes="180px"
              placeholder="blur"
              role="presentation"
              className="object-cover mix-blend-multiply grayscale dark:mix-blend-screen"
            />
          </motion.div>

          <motion.div
            style={{ rotateX: tiltImg, rotateY: tiltImg }} // Micro tilt
            className="group relative z-20 aspect-3/4 w-[300px] overflow-hidden rounded-2xl border border-white/10 bg-linear-to-r from-pink-500/30 to-purple-600/30 shadow-2xl md:w-[350px]"
          >
            <ImageTransition />
          </motion.div>

          <motion.div
            style={{ x: moveMid, y: moveMid }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute -bottom-6 left-[8%] z-30 hidden w-[80%] transition-all duration-300 hover:z-40 md:left-[15%] md:block md:w-auto lg:left-[5%]"
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
