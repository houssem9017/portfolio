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
  if (!project) return buildMetadata("en", `/work/${slug}`);
  return { ...buildMetadata("en", `/work/${slug}`), title: `${project.title} — Houssem Darragi`, description: project.summary.en };
}

export default async function EnglishProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getPortfolioProject(slug)?.featured) notFound();
  return <LanguageProvider locale="en"><HtmlLang locale="en" /><SmoothScroll><Navbar /><ProjectDetailLayout slug={slug} locale="en" /></SmoothScroll></LanguageProvider>;
}
