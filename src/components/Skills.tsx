"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillCategories } from "@/lib/data";
import { useLanguage } from "@/components/LanguageProvider";

const categoryLabels: Record<string, { en: string; fr: string }> = {
  "Core engineering": { en: "Core engineering", fr: "Ingénierie logicielle" },
  "Architecture and backend": { en: "Architecture and backend", fr: "Architecture et backend" },
  "Delivery and infrastructure": { en: "Delivery and infrastructure", fr: "Delivery et infrastructure" },
  "Product and frontend": { en: "Product and frontend", fr: "Produit et frontend" },
};

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { t, locale } = useLanguage();

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

          <div className="space-y-10">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + catIndex * 0.15 }}
              >
                <h3 className="text-lg font-semibold text-[#6366f1] mb-4">
            {categoryLabels[category.label]?.[locale] || category.label}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.3 + catIndex * 0.15 + skillIndex * 0.05,
                      }}
                      className="px-4 py-2 rounded-full bg-[#111827] border border-[#1f2937] text-sm text-[#d1d5db] hover:border-[#6366f1]/40 hover:text-white transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
