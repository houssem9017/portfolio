"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";
import { useLanguage } from "@/components/LanguageProvider";

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 bg-[#0a0f1a] relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            {t("skills.heading")}
          </h2>
          <div className="w-20 h-1 bg-[#6366f1] rounded-full mb-8" />

          <p className="text-[#9ca3af] mb-12 max-w-2xl">
            {t("skills.description")}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm text-[#6366f1]">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="h-2 bg-[#1f2937] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.percentage}%` } : {}}
                    transition={{
                      duration: 1.2,
                      delay: 0.2 + index * 0.1,
                      ease: "easeOut",
                    }}
                    className="h-full bg-gradient-to-r from-[#6366f1] to-[#818cf8] rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
