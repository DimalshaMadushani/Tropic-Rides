import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { tours } from "@/lib/data";
import { ItemCard } from "@/components/ItemCard";

export default function TourPage() {
  return (
    <section className="py-14">
      <Container>
        <SectionHeading
          eyebrow="Tours"
          title="Explore Sri Lanka with curated trips"
          subtitle="Replace these sample tours with your tour packages, pricing, and images."
        />

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((t) => (
            <ItemCard
              key={t.id}
              title={t.title}
              subtitle={`${t.subtitle}. ${t.description}`}
              imageSrc={t.imageUrl.startsWith("/") ? t.imageUrl : t.imageUrl}
              meta="Tour"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
