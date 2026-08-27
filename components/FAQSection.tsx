import { getFaqs } from "@/lib/data";
import { getHomepageContent } from "@/lib/homepage";
import FaqAccordion from "./FaqAccordion";

export default async function FAQSection() {
  const [faqs, { sections }] = await Promise.all([getFaqs(), getHomepageContent()]);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim() },
    })),
  };

  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <div className="text-center">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F04483]">
          {sections.faq.eyebrow}
        </span>
        <h2 className="mt-2 font-display text-3xl font-bold text-[#10233F] sm:text-4xl">
          {sections.faq.heading}
        </h2>
      </div>

      <FaqAccordion faqs={faqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
