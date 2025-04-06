// @components
import { Button } from "@/components/ui/button";


export default function Hero() {
  return (
    <header className="min-h-[70vh] md:min-h-screen w-full h-full bg-[url('/hero-car.png')] bg-cover bg-top bg-no-repeat">
      <div className="container mt-20 text-center">
        <h1 className="lg:text-6xl mx-auto md:text-5xl text-secondary-foreground text-3xl max-w-5xl [text-wrap:_balance] !leading-tight">
          Comfort . Luxury . Lifestyle
        </h1>
        <p className="max-w-2xl text-lg mx-auto mt-4 mb-8 text-secondary-foreground">
          Experience how a thoughtful, expert approach can align your financial
          decisions with your highest standards at every step.
        </p>
          <Button>
            Find Available Cars
          </Button>
        </div>
    </header>
  );
}
