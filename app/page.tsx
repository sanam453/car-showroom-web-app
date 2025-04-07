import CarCard from "@/components/car-card";
import Hero from "@/components/hero";
import ServiceCard from "@/components/service-card";
import Trust from "@/components/trust";

export default function Home() {
  return (
    <main>
      <Hero />
      <Trust />
      <ServiceCard />
      <CarCard />
    </main>
  );
}
