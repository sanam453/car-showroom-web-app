// utils
import { getCarsBySlug } from "@/lib/actions/car-market";
import { notFound } from "next/navigation";

// components
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// icons
import {
  CalendarFold,
  CarFront,
  Earth,
  Milestone,
  UserRound,
} from "lucide-react";
import { CirclePlus, CircleMinus } from "lucide-react";

export default async function CarDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const record = await getCarsBySlug(slug);

  if (!record) {
    notFound();
  }

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(record.price);

  return (
    <main className="container mx-auto my-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-20">
        <div className="flex flex-col space-y-4">
          <div className="aspect-w-1 aspect-h-1 border border-gray-200 rounded-lg overflow-hidden">
            <Image
              src={record.photo}
              alt={`${record.make} ${record.model}`}
              width={768}
              height={768}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="relative">
            <Collapsible>
              <div className="grid grid-cols-4 gap-2">
                {record.gallary
                  .slice(0, 8)
                  .map((image: string, index: number) => (
                    <div
                      key={index}
                      className="aspect-w-1 aspect-h-1 border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <Image
                        src={image}
                        alt={`${record.make} ${record.model}`}
                        width={768}
                        height={768}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  ))}
              </div>
              <CollapsibleContent>
                <div className="grid grid-cols-4 gap-2">
                  {record.gallary
                    .slice(8, -1)
                    .map((image: string, index: number) => (
                      <div
                        key={index}
                        className="aspect-w-1 aspect-h-1 border border-gray-200 rounded-lg overflow-hidden"
                      >
                        <Image
                          src={image}
                          alt={`${record.make} ${record.model}`}
                          width={768}
                          height={768}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    ))}
                </div>
              </CollapsibleContent>
              <CollapsibleTrigger className="group absolute bottom-0 left-0 bg-gradient-to-t from-background via-background/50 to-transparent w-full h-1/2 data-[state=open]:h-10 data-[state=open]:translate-y-16">
                <Button className="mx-auto">
                  <CirclePlus className="size-4 group-data-[state=open]:hidden" />
                  <CircleMinus className="size-4 group-data-[state=closed]:hidden" />
                  <span className="group-data-[state=open]:hidden">
                    View More Images
                  </span>
                  <span className="group-data-[state=closed]:hidden">
                    View Less Images
                  </span>
                </Button>
              </CollapsibleTrigger>
            </Collapsible>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl md:text-3xl font-semibold uppercase">
              {record.model}
            </h1>
            <h1 className="text-2xl md:text-3xl font-semibold text-primary">
              {formattedPrice}
            </h1>
          </div>
          <p className="mb-8 text-balance">
            The {record.year} {record.make}, finished in a sleek {record.color},
            continues to be a favorite in the midsize sedan category thanks to
            its stylish design, spacious interior, and dependable performance.
            This particular model has a smooth automatic transmission and offers
            a comfortable, tech-friendly ride for both drivers and passengers.
            With just {record.mileage} miles on the odometer, it’s in great
            shape and ready for many more miles ahead. Currently located in{" "}
            {record.stateName}, this vehicle is available through{" "}
            {record.dealer} and comes with a clean title and no history of
            accidents—making it an excellent choice for anyone in the market for
            a reliable, stylish vehicle.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="flex items-center gap-2">
                    <CalendarFold className="size-5 text-primary" />
                    <p>{record.year}</p>
                  </TooltipTrigger>
                  <TooltipContent>Year</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="flex items-center gap-2">
                    <CarFront className="size-5 text-primary" />
                    <p>{record.make}</p>
                  </TooltipTrigger>
                  <TooltipContent>Make</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="flex items-center gap-2">
                    <Earth className="size-5 text-primary" />
                    <p>{record.stateName}</p>
                  </TooltipTrigger>
                  <TooltipContent>State</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="flex items-center gap-2">
                    <Milestone className="size-5 text-primary" />
                    <p>{record.mileage}</p>
                  </TooltipTrigger>
                  <TooltipContent>Mileage</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="flex items-center gap-2">
                    <Earth className="size-5 text-primary" />
                    <p>{record.transmissionType}</p>
                  </TooltipTrigger>
                  <TooltipContent>Transmission</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="flex items-center gap-2">
                      <UserRound className="size-5 text-primary shrink-0" />
                      <p>{record.dealer}</p>
                    </TooltipTrigger>
                    <TooltipContent>Dealer</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
