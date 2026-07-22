import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { getPortfolioProject, type LocalizedText, type ProjectCategory } from "@/lib/data";
import type { SiteLocale } from "@/lib/site";

const categoryLabels: Record<ProjectCategory, LocalizedText> = {
  professional: { en: "Professional contribution", fr: "Contribution professionnelle" },
  product: { en: "Independent product", fr: "Produit indépendant" },
  client: { en: "Client work", fr: "Projet client" },
  tool: { en: "Developer tool", fr: "Outil pour développeurs" },
  experiment: { en: "Experiment", fr: "Expérience" },
};

const copy = {
  en: {
    back: "Back to selected work",
    context: "Context",
    contribution: "My contribution",
    features: "Important features",
    skills: "Skills demonstrated",
    links: "Relevant public links",
    placeholder: "Manual input required",
    visual: "Visual asset pending",
  },
  fr: {
    back: "Retour aux réalisations",
    context: "Contexte",
    contribution: "Ma contribution",
    features: "Fonctionnalités importantes",
    skills: "Compétences démontrées",
    links: "Liens publics pertinents",
    placeholder: "Saisie manuelle requise",
    visual: "Visuel à ajouter",
  },
} as const;

function localized(value: LocalizedText, locale: SiteLocale) {
  return value[locale];
}

export default function ProjectDetailLayout({ slug, locale }: { slug: string; locale: SiteLocale }) {
  const project = getPortfolioProject(slug);
  if (!project) return null;
  const strings = copy[locale];
  const category = localized(categoryLabels[project.category], locale);
  const backHref = locale === "fr" ? "/fr#work" : "/#work";

  return (
    <main className="min-h-screen bg-[#080e19] pb-24 pt-28 sm:pt-36">
      <div className="mx-auto max-w-5xl px-6">
        <Link href={backHref} className="inline-flex min-h-11 items-center text-sm text-[#a5b4fc] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#818cf8]">
          <span aria-hidden="true" className="mr-2">←</span>{strings.back}
        </Link>

        <header className="mt-10 max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#818cf8]">{category}</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">{project.title}</h1>
          <p className="mt-4 text-lg font-medium text-[#c2cada]">{localized(project.subtitle, locale)}</p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#a5adbd]">{localized(project.summary, locale)}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => <span key={tag} className="rounded-full border border-[#303b52] bg-[#151e31] px-3 py-1.5 text-xs text-[#c7cfdd]">{tag}</span>)}
          </div>
        </header>

        <div className="mt-12 rounded-3xl border border-[#263044] bg-[#0d1422] p-5 sm:p-8">
          <div className="project-visual relative flex min-h-64 items-end overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(129,140,248,.34),transparent_34%),linear-gradient(135deg,#172554,#0f172a_58%,#111827)] p-6 sm:min-h-80" role="img" aria-label={`${project.title} — ${strings.visual}`}>
            <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:32px_32px]" />
            <span className="relative text-sm text-white/75">{strings.visual} — {project.actions?.find((action) => action.placeholder)?.placeholder ?? "TODO_ADD_PUBLIC_PROJECT_VISUAL"}</span>
          </div>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div className="space-y-12">
            {project.context ? <section><SectionHeading title={strings.context} /><p className="max-w-2xl text-base leading-8 text-[#a5adbd]">{localized(project.context, locale)}</p></section> : null}
            {project.contributions ? <section><SectionHeading title={strings.contribution} /><div className="space-y-6">{project.contributions.map((item) => <article key={item.title.en}><h2 className="text-xl font-semibold text-white">{localized(item.title, locale)}</h2><p className="mt-2 text-base leading-8 text-[#a5adbd]">{localized(item.description, locale)}</p></article>)}</div></section> : null}
            {project.highlights ? <section><SectionHeading title={strings.features} /><ul className="space-y-3">{project.highlights.map((item) => <li key={item.en} className="flex gap-3 text-base leading-7 text-[#c0c8d8]"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#818cf8]" aria-hidden="true" />{localized(item, locale)}</li>)}</ul></section> : null}
          </div>
          <aside className="space-y-8">
            {project.skillsDemonstrated ? <section className="rounded-2xl border border-[#263044] bg-[#0d1422] p-6"><h2 className="text-lg font-semibold text-white">{strings.skills}</h2><ul className="mt-4 space-y-3">{project.skillsDemonstrated.map((item) => <li key={item.en} className="text-sm leading-6 text-[#a5adbd]">{localized(item, locale)}</li>)}</ul></section> : null}
            {project.status ? <section className="rounded-2xl border border-[#263044] bg-[#0d1422] p-6"><h2 className="text-lg font-semibold text-white">{locale === "fr" ? "Statut" : "Status"}</h2><p className="mt-2 text-sm text-[#a5adbd]">{localized(project.status, locale)}</p></section> : null}
            <section className="rounded-2xl border border-[#263044] bg-[#0d1422] p-6"><h2 className="text-lg font-semibold text-white">{strings.links}</h2><div className="mt-4 space-y-3">{project.actions?.map((action) => action.href ? <a key={action.label.en} href={action.href} target="_blank" rel="noopener noreferrer" className="block text-sm text-[#a5b4fc] hover:text-white">{localized(action.label, locale)} ↗</a> : action.placeholder ? <p key={action.label.en} className="text-sm leading-6 text-[#8792a7]"><span className="font-mono text-xs text-[#818cf8]">{action.placeholder}</span><br />{strings.placeholder}</p> : null)}</div></section>
            {project.disclaimer ? <p className="border-l border-[#4f46e5]/60 pl-4 text-sm leading-6 text-[#8792a7]">{localized(project.disclaimer, locale)}</p> : null}
          </aside>
        </div>
      </div>
    </main>
  );
}
