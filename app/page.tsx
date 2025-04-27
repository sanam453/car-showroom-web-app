// components
import CarCard from "@/components/car-card";
import Cta from "@/components/cta";
import Hero from "@/components/hero";
import ServiceCard from "@/components/service-card";
import Trust from "@/components/trust";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<any>
}) {

  const { page, search, sort } = await searchParams;

  return (
    <main>
      <Hero />
      <div className="!container mx-auto">
      <Trust />
      <ServiceCard />
      <CarCard currentPage={page || 1} currentSearch={search} currentSort={sort} />
      <Cta />
      </div>
    </main>
  );
}
