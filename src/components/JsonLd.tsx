import { buildJsonLd } from "@/lib/metadata";
import type { SiteLocale } from "@/lib/site";

export default function JsonLd({ locale }: { locale: SiteLocale }) {
  const data = buildJsonLd(locale);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
