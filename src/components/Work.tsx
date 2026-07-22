"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { experimentGallery, portfolioProjects } from "@/lib/data";
import { useLanguage } from "@/components/LanguageProvider";

export default function Work() {
  const [showAllExperiments, setShowAllExperiments] = useState(false);
  const { locale, t } = useLanguage();
  const professional = portfolioProjects.filter((p) => p.category === "professional");
  const products = portfolioProjects.filter((p) => p.category === "product");
  const client = portfolioProjects.filter((p) => p.category === "client");
  const tools = portfolioProjects.filter((p) => p.category === "tool");
  const experiments = portfolioProjects.filter((p) => p.category === "experiment");
  const visibleExperiments = showAllExperiments ? experiments : experiments.slice(0, 4);

  return (
    <>
      <section id="work" className="relative scroll-mt-20 border-t border-[#151e2d] bg-[#080e19] py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow={t("work.label")} title={t("work.professionalHeading")} description={t("work.professionalDescription")} />
          <div className="space-y-6">
            {professional.map((project) => <ProjectCard key={project.id} project={project} level={1} />)}
          </div>
        </div>
      </section>

      <section id="products" className="scroll-mt-20 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title={t("work.productsHeading")} description={t("work.productsDescription")} />
          <div className="grid gap-6 lg:grid-cols-2">
            {products.map((project) => <ProjectCard key={project.id} project={project} level={1} />)}
          </div>
        </div>
      </section>

      <section id="client-work" className="scroll-mt-20 border-y border-[#151e2d] bg-[#0a101c] py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title={t("work.clientHeading")} description={t("work.clientDescription")} />
          {client.map((project) => <ProjectCard key={project.id} project={project} level={1} />)}
        </div>
      </section>

      <section id="developer-tools" className="scroll-mt-20 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title={t("work.toolsHeading")} description={t("work.toolsDescription")} />
          <div className="grid gap-6 lg:grid-cols-2">
            {tools.map((project) => <ProjectCard key={project.id} project={project} level={2} />)}
          </div>
        </div>
      </section>

      <section id="experiments" className="scroll-mt-20 border-t border-[#151e2d] bg-[#0a101c] py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title={t("work.experimentsHeading")} description={t("work.experimentsDescription")} />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {visibleExperiments.map((project) => <ProjectCard key={project.id} project={project} level={3} />)}
          </div>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <button type="button" onClick={() => setShowAllExperiments((value) => !value)} className="min-h-11 rounded-full border border-[#303b52] px-5 text-sm font-medium text-[#d4dcf0] transition-colors hover:border-[#818cf8] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#818cf8]">
              {showAllExperiments ? (locale === "fr" ? "Afficher moins" : "Show fewer experiments") : t("work.viewAll")}
            </button>
            <p className="text-xs text-[#758198]">
              {experimentGallery.items.join(" · ")} — {locale === "fr" ? "Concept · UI experiment · Travail non commandé" : "Concept · UI experiment · Uncommissioned work"}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
