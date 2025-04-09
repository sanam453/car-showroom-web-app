import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { getCarMarketData } from "@/lib/actions/car-market";

export default async function CarCard() {

  const { records } = await getCarMarketData();

  return (
    <div className="container mx-auto text-center my-36">
      <h1 className="mx-auto md:text-5xl text-secondary-foreground text-3xl max-w-5xl [text-wrap:_balance] !leading-tight">
        Most Popular Cars Deals
      </h1>
      <p className="max-w-3xl text-lg mx-auto text-balance mt-4 text-secondary-foreground/80">
        Find the best car deals with our listings. Browse a wide range of
        options and take advantage of the latest offers.
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
        {records?.map((record: Record<string, string>) => (
          <Card
            key={record.id}
            className="overflow-hidden group-has-[[data-pending]]:animate-pulse"
          >
            <CardHeader>
              <Image
                src="/car.png"
                alt="Car"
                width={1024}
                height={1024}
                className="w-full h-full object-cover object-center"
              />
            </CardHeader>
            <CardContent className="mt-6">
              <CardTitle className="text-xl">
                {record.make}
              </CardTitle>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <span className="text-lg font-bold text-primary">{record.id}</span>
              <Button size="sm">{record.make}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
