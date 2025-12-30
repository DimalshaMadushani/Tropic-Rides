import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { scooters } from "@/lib/data";
import { ItemCard } from "@/components/ItemCard";

export default function ScooterRentPage() {
  return (
    <section className="py-14">
      <Container>
        <SectionHeading
          eyebrow="Scooter Rentals"
          title="Pick a scooter and book fast"
          subtitle="These are sample entries. Replace with your actual scooter models, prices, and images."
        />

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {scooters.map((s) => (
            <ItemCard
              key={s.id}
              title={s.name}
              subtitle={s.description}
              imageSrc={s.image}
              meta={`$${s.pricePerDayUSD}/day`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
