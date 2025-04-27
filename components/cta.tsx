// components
import Image from "next/image";
import { Button } from "./ui/button";

// icons
import { ArrowRight } from "lucide-react";

export default function Cta() {
  return (
    <section className="my-32 bg-primary rounded-lg">
      <div className="flex justify-between items-center">
        <div className="sm:pl-20 pl-6 lg:py-0 py-10">
          <p className="xl:text-7xl md:text-4xl text-xl max-w-xl !leading-tight mb-2">
            Your Next Travel With Us?
          </p>
          <p className="text-lg mb-8">
            Discover the joy of seamless journeys and unforgettable adventures.
          </p>
          <Button variant="secondary">Book Now 
           <ArrowRight />
          </Button>
        </div>
        <Image
          src="/black-car.png"
          alt="car"
          width={500}
          height={500}
          className="hidden translate-y-24 lg:block w-1/2 h-auto object-cover scale-x-[-1]"
        />
      </div>
    </section>
  );
}
