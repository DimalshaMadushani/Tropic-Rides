import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { cars } from "@/lib/data";
import { ItemCard } from "@/components/ItemCard";

export default function CarRentPage() {
  return (
    <section className="py-14">
      <Container>
        <SectionHeading
          eyebrow="Car Rentals"
          title="Cars and vans for groups and luggage"
          subtitle="These are sample entries. Replace with your actual fleet details."
        />

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((c) => (
            <ItemCard
              key={c.id}
              title={c.name}
              subtitle={`${c.passengers} passengers • ${c.description}`}
              imageSrc={c.imageUrls[0]}
              meta={`$${c.pricePerDayUSD}/day`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
