"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { websites } from "@/lib/data";
import { useLanguage } from "@/components/LanguageProvider";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.4 },
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

export default function WebsitesPage() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { t } = useLanguage();

  const desc = (i: number, fallback: string) => {
    const key = `websites.item${i + 1}_desc`;
    const value = t(key);
    return value === key ? fallback : value;
  };
  const title = (i: number, fallback: string) => {
    const key = `websites.item${i + 1}_title`;
    const value = t(key);
    return value === key ? fallback : value;
  };

  return (
    <section className="pt-32 pb-24 bg-[#0a0f1a] min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
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
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            {t("websites.allHeading")}
          </h1>
          <div className="w-20 h-1 bg-[#6366f1] rounded-full mb-4" />
          <p className="text-[#9ca3af] mb-12 max-w-2xl">
            {t("websites.allDescription")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {websites.map((site, i) => {
            const isLive = Boolean(site.live && site.liveUrl);
            const cardClassName =
              "group relative bg-[#111827] border border-[#1f2937] rounded-2xl overflow-hidden hover:border-[#6366f1]/40 transition-all duration-500";
            const content = (
              <>
                <div className="aspect-video overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-[#1e293b] to-[#0f172a] flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#6366f1] text-[#818cf8] text-xs font-semibold tracking-wide">
                      {site.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        isLive ? "bg-green-500 animate-pulse" : "bg-[#6b7280]"
                      }`}
                    />
                    <span
                      className={`text-xs font-mono ${
                        isLive ? "text-green-500" : "text-[#6b7280]"
                      }`}
                    >
                      {isLive ? t("websites.badge") : t("websites.comingSoon")}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-[#6366f1] transition-colors">
                    {title(i, site.title)}
                  </h3>
                  <p className="text-sm text-[#9ca3af] mb-4 leading-relaxed">
                    {desc(i, site.description)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {site.technologies.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-[#1f2937] text-[#9ca3af] border border-[#374151]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            );

            if (isLive && site.liveUrl) {
              return (
                <motion.a
                  key={site.id}
                  href={site.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${title(i, site.title)} — ${t("websites.badge")}`}
                  variants={cardVariants}
                  className={cardClassName}
                >
                  {content}
                </motion.a>
              );
            }

            return (
              <motion.div
                key={site.id}
                variants={cardVariants}
                className={`${cardClassName} opacity-80 cursor-not-allowed`}
                aria-disabled="true"
              >
                {content}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
