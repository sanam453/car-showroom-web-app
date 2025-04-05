// @components
import { Button } from "@/components/ui/button";

// @icons
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Hero() {
  return (
    <header className="min-h-screen w-full h-full bg-[url('/hero-car.png')] bg-cover bg-left-bottom bg-no-repeat">
      <div className="container mt-20">
        <h1 className="lg:text-6xl md:text-5xl text-secondary-foreground text-3xl max-w-5xl [text-wrap:_balance] !leading-tight">
          Find, Book, Buy, Rent & Unlock Cars Near You Super Quick & Easy
        </h1>
        <p className="max-w-[500px] mt-4 text-secondary-foreground text-balance">
          Experience how a thoughtful, expert approach can align your financial
          decisions with your highest standards at every step.
        </p>
        <div className="flex gap-4 mt-12">
          <Button>
            Explore cars
            <ArrowRightIcon className="size-4 stroke-2" />
          </Button>
          <Button variant="outline">
            Contact Us Here
          </Button>
        </div>
      </div>
    </header>
  );
}
