"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const stats = [
    { label: t("about.stats_experience"), value: t("about.stats_experience_value") },
    { label: t("about.stats_hackathons"), value: "5" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            {t("about.heading")}
          </h2>
          <div className="w-20 h-1 bg-[#6366f1] rounded-full mb-8" />

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-[#9ca3af] leading-relaxed">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="bg-[#111827] border border-[#1f2937] rounded-2xl p-6 text-center hover:border-[#6366f1]/30 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-[#6366f1] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#9ca3af]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
