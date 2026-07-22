import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import { LanguageProvider } from "@/components/LanguageProvider";
import ProjectDetailLayout from "@/components/ProjectDetailLayout";
import HtmlLang from "@/components/HtmlLang";
import { getPortfolioProject, portfolioProjects } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return portfolioProjects.filter((project) => project.featured).map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioProject(slug);
  if (!project) return buildMetadata("fr", `/work/${slug}`);
  return { ...buildMetadata("fr", `/work/${slug}`), title: `${project.title} — Houssem Darragi`, description: project.summary.fr };
}

export default async function FrenchProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getPortfolioProject(slug)?.featured) notFound();
  return <LanguageProvider locale="fr"><HtmlLang locale="fr" /><SmoothScroll><Navbar /><ProjectDetailLayout slug={slug} locale="fr" /></SmoothScroll></LanguageProvider>;
}
