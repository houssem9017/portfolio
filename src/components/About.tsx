"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { label: "Experience", value: "4+ Years" },
  { label: "Projects", value: "15+" },
  { label: "Hackathons", value: "5+" },
  { label: "Clients", value: "10+" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            About <span className="text-[#6366f1]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[#6366f1] rounded-full mb-8" />

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-[#9ca3af] leading-relaxed">
              <p>
                I&apos;m a Fullstack Developer specialized in building robust
                web applications using <strong className="text-white">Django</strong> and{" "}
                <strong className="text-white">Angular</strong>. My experience
                spans backend architecture, frontend interfaces, and API
                integrations.
              </p>
              <p>
                With a solid foundation from academic projects, internships, and
                hackathons, I deliver efficient and scalable solutions. I thrive
                in fast-paced environments, combining problem-solving skills
                with a focus on clean, maintainable code.
              </p>
              <p>
                Proficient in <strong className="text-white">Python</strong>,{" "}
                <strong className="text-white">JavaScript</strong>,{" "}
                <strong className="text-white">PHP</strong>, and{" "}
                <strong className="text-white">C# (.NET)</strong>. Skilled in
                managing relational and NoSQL databases. Fluent in English and
                French.
              </p>
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
