"use client";

import { experiences, education, achievements } from "@/lib/data";
import { useLanguage } from "@/components/LanguageProvider";
import SectionHeading from "@/components/SectionHeading";

function ExperienceList({ full = false }: { full?: boolean }) {
  const items = full ? experiences : experiences.slice(0, 3);
  return (
    <div className="space-y-6">
      {items.map((experience) => (
        <article key={`${experience.company}-${experience.period}`} className="border-l border-[#303b52] pl-5">
          <p className="font-mono text-xs text-[#818cf8]">{experience.period}</p>
          <h3 className="mt-1 text-base font-semibold text-white">{experience.role}</h3>
          <p className="mt-1 text-sm text-[#a5adbd]">{experience.company}</p>
          {full ? (
            <ul className="mt-3 space-y-2">
              {experience.details.map((detail) => <li key={detail} className="text-sm leading-6 text-[#8792a7]">{detail}</li>)}
            </ul>
          ) : null}
        </article>
      ))}
    </div>
  );
}

export default function Resume() {
  const { t } = useLanguage();
  return (
    <section id="experience" className="scroll-mt-20 border-t border-[#151e2d] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title={t("resume.heading")} description={t("resume.summary")} />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-[#818cf8]">{t("resume.currentRole")}</p>
            <ExperienceList />
            <details className="mt-8 rounded-2xl border border-[#263044] bg-[#0d1422] p-5">
              <summary className="cursor-pointer text-sm font-medium text-[#d4dcf0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#818cf8]">{t("resume.viewFull")}</summary>
              <div className="mt-6"><ExperienceList full /></div>
            </details>
          </div>
          <div className="space-y-8">
            <section>
              <h3 className="text-lg font-semibold text-white">{t("resume.education")}</h3>
              {education.slice(0, 1).map((item) => <article key={item.school} className="mt-4 border-l border-[#303b52] pl-5"><p className="font-mono text-xs text-[#818cf8]">{item.period}</p><h4 className="mt-1 text-base font-semibold text-white">{item.degree}</h4><p className="mt-1 text-sm leading-6 text-[#a5adbd]">{item.school}</p><p className="mt-1 text-sm text-[#8792a7]">{item.description}</p></article>)}
            </section>
            <section>
              <h3 className="text-lg font-semibold text-white">{t("resume.selectedAchievements")}</h3>
              <ul className="mt-4 space-y-4">
                {achievements.slice(0, 4).map((item) => <li key={item.title} className="text-sm leading-6 text-[#a5adbd]"><span className="font-mono text-xs text-[#818cf8]">{item.date}</span><br /><span className="font-medium text-[#d4dcf0]">{item.title}</span></li>)}
              </ul>
            </section>
            <div className="rounded-2xl border border-dashed border-[#4b5563] bg-[#0d1422] p-5 text-sm text-[#8792a7]">
              <p className="font-mono text-xs text-[#818cf8]">TODO_RESUME_PDF_URL</p>
              <p className="mt-2">{t("resume.download")}: add the verified public PDF when available.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
