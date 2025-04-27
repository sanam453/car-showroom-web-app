// components
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";


const DATA = [
  {
    title: "Expert Maintenance & Repair",
    description:
      "Comprehensive maintenance and repair services to keep your vehicle in top condition. Our certified technicians ensure your car runs smoothly and efficiently.",
    buttonText: "Read More",
  },
  {
    title: "Customer Centric Approach",
    description:
      "At our dealership, we prioritize your satisfaction. Our customer-centric approach ensures that you receive personalized service and support throughout your car-buying journey.",
    buttonText: "Read More",
  },
  {
    title: "Top-Quality Parts & Accessories",
    description:
      "We offer a wide range of top-quality parts and accessories to enhance your vehicle's performance and style. All our parts are sourced from trusted manufacturers to ensure durability and reliability.",
    buttonText: "Read More",
  },
];


export default function ServiceCard() {
  return (
    <div className="text-center my-36">
      <h1 className="mx-auto md:text-5xl text-secondary-foreground text-3xl max-w-5xl [text-wrap:_balance] !leading-tight">
        Our Services
      </h1>
      <p className="max-w-3xl text-lg mx-auto text-balance mt-4 text-secondary-foreground/80">
        Enjoy a seamless car-buying experience with our expert services, from
        finding your car to after-sales support.
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-20 gap-4">
        {DATA.map(({ title, description, buttonText }, index) => (
          <Card
            key={index}
            className="relative bg-background border border-primary/15 hover:border-primary/20 transition ease-in-out group overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgb(120,65,2)_0%,transparent_60%)] w-full h-full scale-150 blur-xl -translate-y-1/4 opacity-25 group-hover:opacity-80 transition-opacity duration-300" />
            <CardHeader className="relative">
              <CardTitle className="text-2xl font-medium text-secondary-foreground">
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="relative text-secondary-foreground/80 text-balance">
              {description}
            </CardContent>
            <CardFooter className="relative justify-center">
              <Button variant="outline">{buttonText}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
