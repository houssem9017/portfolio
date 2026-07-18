"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        titleRef.current,
        { y: 100, opacity: 0, rotationX: -20 },
        { y: 0, opacity: 1, rotationX: 0, duration: 1.2 }
      )
        .fromTo(
          subtitleRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ctaRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.4"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] from-15% via-transparent via-35% to-transparent pointer-events-none" />

      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#6366f1]/20 blur-[120px] pointer-events-none"
        initial={{ scale: 1, opacity: 0.3 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#6366f1] font-mono text-sm mb-4 tracking-widest uppercase"
        >
          {t("hero.role")}
        </motion.p>

        <h1
          ref={titleRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-6"
          style={{ perspective: "1000px" }}
        >
          {t("hero.firstName")}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#818cf8]">
            {t("hero.lastName")}
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl text-[#9ca3af] max-w-2xl mx-auto leading-relaxed"
        >
          {t("hero.tagline", {
            tech1: "Next.js",
            tech2: "Django",
            tech3: "Angular",
          })}
        </p>

        <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#websites"
            className="px-8 py-3 bg-[#6366f1] hover:bg-[#4f46e5] text-white rounded-full font-medium transition-all duration-200 hover:scale-105 active:scale-95"
          >
            {t("hero.ctaWork")}
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-[#1f2937] hover:border-[#6366f1]/50 text-[#9ca3af] hover:text-white rounded-full font-medium transition-all duration-200"
          >
            {t("hero.ctaResume")}
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border-2 border-[#374151] rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-[#6366f1] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
