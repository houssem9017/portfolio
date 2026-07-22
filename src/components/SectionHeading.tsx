import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[#818cf8]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      <div className="mt-4 h-1 w-16 rounded-full bg-[#6366f1]" />
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#a5adbd]">{description}</p>
      ) : null}
    </div>
  );
}
