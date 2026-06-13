"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { websites } from "@/lib/data";
import { useLanguage } from "@/components/LanguageProvider";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Websites() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const desc = (i: number) => t(`websites.item${i + 1}_desc`);
  const title = (i: number) => t(`websites.item${i + 1}_title`);

  return (
    <section id="websites" className="py-24 bg-[#0a0f1a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#6366f1]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#818cf8]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="h-6 w-1 bg-[#6366f1] rounded-full" />
            <span className="text-[#6366f1] font-mono text-sm tracking-widest uppercase">
              {t("websites.label")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            {t("websites.heading")}
          </h2>
          <div className="w-20 h-1 bg-[#6366f1] rounded-full mb-4" />
          <p className="text-[#9ca3af] mb-12 max-w-2xl">
            {t("websites.description")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {websites.map((site, i) => (
            <motion.a
              key={site.url}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              className="group relative bg-[#111827] border border-[#1f2937] rounded-2xl overflow-hidden hover:border-[#6366f1]/40 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#1e293b] to-[#0f172a] flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-3xl font-bold text-[#6366f1] mb-2">
                      {title(i)}
                    </div>
                    <div className="text-xs text-[#6b7280] font-mono break-all">
                      {site.url.replace(/^https?:\/\//, "")}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-green-500 font-mono">
                    {t("websites.badge")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#6366f1] transition-colors">
                  {title(i)}
                </h3>
                <p className="text-sm text-[#9ca3af] mb-4 leading-relaxed">
                  {desc(i)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {site.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-[#1f2937] text-[#9ca3af] border border-[#374151]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
