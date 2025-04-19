import Image from "next/image";
import { getCarsBySlug } from "@/lib/actions/car-market";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  CalendarFold,
  CarFront,
  Earth,
  Milestone,
  Receipt,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

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

  return (
    <main className="container mx-auto my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-4 md:p-8">
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
          <div className="grid grid-cols-4 gap-2">
            {record.gallary.map((image: string, index: number) => (
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
        </div>
        <div>
          <div className="flex justify-between">
            <h1 className="text-2xl md:text-3xl font-semibold uppercase mb-6">
              {record.model}
            </h1>
            <Button className="w-full md:w-auto">Add to Favorite</Button>
          </div>
          <div className="grid grid-cols-4 gap-4 mb-2">
            <div className="flex items-center gap-2">
              <Receipt className="size-5" />
              <p>{record.price}</p>
            </div>
            <div className="flex items-center gap-2">
              <CalendarFold className="size-5" />
              <p>{record.year}</p>
            </div>
            <div className="flex items-center gap-2">
              <Earth className="size-5" />
              <p>{record.stateName}</p>
            </div>
            <div className="flex items-center gap-2">
              <Milestone className="size-5" />
              <p>{record.mileage}</p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 mb-2">
            <div className="flex items-center gap-2">
              <CarFront className="size-5" />
              <p>{record.make}</p>
            </div>
            <div className="flex items-center gap-2">
              <CalendarFold className="size-5" />
              <p>{record.engineType}</p>
            </div>
            <div className="flex items-center gap-2">
              <Earth className="size-5" />
              <p>{record.transmissionType}</p>
            </div>
            <div className="flex items-center gap-2">
              <Milestone className="size-5" />
              <p>{record.mileage}</p>
            </div>
          </div>
          <div className="flex items-baseline space-x-2">
            <Badge className="bg-green-500 text-white">In Stock</Badge>
          </div>
        </div>
      </div>
    </main>
  );
}
