"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import type { LocalizedText, PortfolioProject, ProjectCategory } from "@/lib/data";

const categoryLabels: Record<ProjectCategory, LocalizedText> = {
  professional: { en: "Professional contribution", fr: "Contribution professionnelle" },
  product: { en: "Independent product", fr: "Produit indépendant" },
  client: { en: "Client work", fr: "Projet client" },
  tool: { en: "Developer tool", fr: "Outil pour développeurs" },
  experiment: { en: "Experiment", fr: "Expérience" },
};

function text(value: LocalizedText, locale: "en" | "fr") {
  return value[locale];
}

function VisualPanel({ project }: { project: PortfolioProject }) {
  const label = project.category === "professional"
    ? project.disclaimer?.["en"].includes("BestLog")
      ? "Neutral professional visual"
      : "Project visual"
    : project.title;

  return (
    <div
      className="project-visual relative flex min-h-56 items-end overflow-hidden rounded-2xl border border-white/10 p-5 sm:min-h-64"
      style={{
        background:
          project.category === "professional"
            ? "radial-gradient(circle at 20% 20%, rgba(129,140,248,.34), transparent 34%), linear-gradient(135deg, #172554, #0f172a 58%, #111827)"
            : project.category === "product"
              ? "radial-gradient(circle at 80% 20%, rgba(168,85,247,.35), transparent 34%), linear-gradient(135deg, #26143d, #111827 62%, #0f172a)"
              : project.category === "client"
                ? "radial-gradient(circle at 20% 80%, rgba(45,212,191,.28), transparent 34%), linear-gradient(135deg, #12303a, #111827 60%, #0f172a)"
                : "radial-gradient(circle at 80% 80%, rgba(99,102,241,.3), transparent 36%), linear-gradient(135deg, #172033, #0b1120 60%, #111827)",
      }}
      role="img"
      aria-label={`${project.title} — ${label}`}
    >
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="relative flex w-full items-end justify-between gap-4">
        <span className="max-w-[16rem] text-sm font-medium text-white/85">{label}</span>
        <span className="rounded-full border border-white/15 bg-black/20 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white/60">
          {project.image ? "Preview" : "Neutral visual"}
        </span>
      </div>
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2" aria-label="Technologies">
      {tags.map((tag) => (
        <span key={tag} className="rounded-full border border-[#303b52] bg-[#151e31] px-2.5 py-1 text-xs text-[#c7cfdd]">
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function ProjectCard({
  project,
  level = 1,
}: {
  project: PortfolioProject;
  level?: 1 | 2 | 3;
}) {
  const { locale, t } = useLanguage();
  const detailHref = `${locale === "fr" ? "/fr" : ""}/work/${project.slug}`;
  const label = text(categoryLabels[project.category], locale);

  return (
    <article className={`project-card group rounded-2xl border border-[#263044] bg-[#0d1422] ${level === 1 ? "p-4 sm:p-6" : "p-4"}`}>
      <VisualPanel project={project} />
      <div className={level === 1 ? "p-1 pt-6 sm:p-2 sm:pt-7" : "pt-5"}>
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#818cf8]">{label}</span>
          {project.status ? <span className="text-xs text-[#8792a7]">{t("work.status")}: {text(project.status, locale)}</span> : null}
        </div>
        <h3 className={`${level === 1 ? "text-2xl sm:text-3xl" : "text-xl"} font-semibold tracking-tight text-white`}>{project.title}</h3>
        <p className="mt-2 text-sm font-medium text-[#c2cada]">{text(project.subtitle, locale)}</p>
        <p className={`${level === 1 ? "mt-4 text-base" : "mt-3 text-sm"} max-w-3xl leading-7 text-[#a5adbd]`}>{text(project.summary, locale)}</p>

        {project.highlights && level === 1 ? (
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {project.highlights.slice(0, 4).map((highlight) => (
              <li key={highlight.en} className="flex gap-2 text-sm leading-6 text-[#c0c8d8]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#818cf8]" aria-hidden="true" />
                {text(highlight, locale)}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-5"><Tags tags={project.tags} /></div>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
          <Link href={detailHref} className="inline-flex min-h-11 items-center gap-2 font-medium text-[#a5b4fc] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#818cf8]">
            {level === 3 ? t("work.viewProject") : t("work.viewCaseStudy")}
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-[#8792a7] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#818cf8]">
              {t("work.viewLive")} <span aria-hidden="true" className="ml-1">↗</span>
            </a>
          ) : null}
        </div>

        {project.contributions && level === 1 ? (
          <details className="mt-5 border-t border-[#263044] pt-4">
            <summary className="cursor-pointer text-sm font-medium text-[#cbd5e1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#818cf8]">
              {t("work.contribution")}
            </summary>
            <div className="mt-4 space-y-4">
              {project.contributions.map((item) => (
                <div key={item.title.en}>
                  <h4 className="text-sm font-semibold text-white">{text(item.title, locale)}</h4>
                  <p className="mt-1 text-sm leading-6 text-[#a5adbd]">{text(item.description, locale)}</p>
                </div>
              ))}
            </div>
          </details>
        ) : null}

        {project.disclaimer ? (
          <p className="mt-5 border-l border-[#4f46e5]/60 pl-3 text-xs leading-5 text-[#818b9f]">
            {text(project.disclaimer, locale)}
          </p>
        ) : null}
      </div>
    </article>
  );
}
