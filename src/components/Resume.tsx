"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences, education, achievements } from "@/lib/data";

function TimelineItem({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative pl-8 pb-8 border-l border-[#1f2937] last:pb-0"
    >
      <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[6.5px] rounded-full bg-[#6366f1] border-2 border-[#030712]" />
      {children}
    </motion.div>
  );
}

export default function Resume() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            My <span className="text-[#6366f1]">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-[#6366f1] rounded-full mb-12" />

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-[#6366f1]">
                Experience
              </h3>
              {experiences.map((exp, i) => (
                <TimelineItem key={i} index={i}>
                  <span className="text-xs text-[#6366f1] font-mono">
                    {exp.period}
                  </span>
                  <h4 className="text-base font-semibold mt-1">
                    {exp.role}
                  </h4>
                  <p className="text-sm text-[#9ca3af] mb-2">
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#6366f1] transition-colors"
                      >
                        @{exp.company}
                      </a>
                    ) : (
                      `@${exp.company}`
                    )}
                  </p>
                  <ul className="space-y-1">
                    {exp.details.map((detail, j) => (
                      <li
                        key={j}
                        className="text-sm text-[#9ca3af] flex items-start gap-2"
                      >
                        <span className="text-[#6366f1] mt-1.5 w-1 h-1 rounded-full bg-current shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </TimelineItem>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-[#6366f1]">
                Education
              </h3>
              {education.map((edu, i) => (
                <TimelineItem key={i} index={i}>
                  <span className="text-xs text-[#6366f1] font-mono">
                    {edu.period}
                  </span>
                  <h4 className="text-base font-semibold mt-1">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-[#9ca3af]">
                    {edu.schoolUrl ? (
                      <a
                        href={edu.schoolUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#6366f1] transition-colors"
                      >
                        {edu.school}
                      </a>
                    ) : (
                      edu.school
                    )}
                  </p>
                  <p className="text-sm text-[#6b7280] mt-1">
                    {edu.description}
                  </p>
                </TimelineItem>
              ))}

              <h3 className="text-xl font-semibold mb-6 mt-8 text-[#6366f1]">
                Achievements
              </h3>
              {achievements.map((ach, i) => (
                <TimelineItem key={i} index={i + education.length}>
                  <span className="text-xs text-[#6366f1] font-mono">
                    {ach.date}
                  </span>
                  <h4 className="text-base font-semibold mt-1">
                    {ach.title}
                  </h4>
                  {ach.eventUrl ? (
                    <a
                      href={ach.eventUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#9ca3af] hover:text-[#6366f1] transition-colors"
                    >
                      {ach.event}
                    </a>
                  ) : ach.event ? (
                    <p className="text-sm text-[#9ca3af]">{ach.event}</p>
                  ) : null}
                  <p className="text-sm text-[#6b7280] mt-1">
                    {ach.description}
                  </p>
                </TimelineItem>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
