// utils
import { getCarMarketData, Sort } from "@/lib/actions/car-market";
import { ListingPagination } from "./listing-pagination";
import { ListingSearch } from "./listing-search";
import { ListingSort } from "./listing-sort";

// components
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

// icons
import { ArrowUpRight } from "lucide-react";

export default async function CarCard({
  currentPage,
  currentSearch,
  currentSort,
}: {
  currentPage: number;
  currentSearch: string;
  currentSort: Sort;
}) {
  const records = await getCarMarketData({
    page: currentPage,
    search: currentSearch,
    sort: currentSort,
  });

  return (
    <div className="my-12 group">
      <div className="items-center gap-4 grid md:grid-cols-2 grid-cols-1">
        <div>
          <h1 className="text-3xl font-semibold mb-2">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="w-full flex gap-4 sm:justify-end justify-normal">
          <ListingSearch currentSearch={currentSearch} />
          <ListingSort currentSort={currentSort} />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
        {records?.map((record: Record<string, string>) => (
          <Card
            key={record.id}
            className="overflow-hidden group-has-[[data-pending]]:animate-pulse"
          >
            <CardHeader className="p-0">
              <Image
                src={
                  record.photo.startsWith("//")
                    ? "https://placehold.co/600x400/png"
                    : record.photo
                }
                alt={`${record.make} ${record.model}`}
                width={768}
                height={768}
                className="w-full h-56 object-cover object-center"
              />
            </CardHeader>
            <CardContent className="mt-6">
              <div className="flex justify-between mb-4">
                <CardTitle className="text-xl flex gap-2">
                  {record.make},<p>{record.stateName}</p>
                </CardTitle>
                <span className="px-4 py-1 !rounded-sm text-sm border border-primary">
                  {record.active ? "Active" : "Inactive"}
                </span>
              </div>
              <CardDescription>
                The car is a marvel of engineering, combining performance and
                style. It offers advanced features and cutting-edge technology
                for modern drivers.
              </CardDescription>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <span className="text-lg font-bold">{record.price}</span>
              <Link href={`/car-details/${record.vin}`}>
                <Button size="sm" className="flex items-center gap-2">
                  More Details
                  <ArrowUpRight className="size-3" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <ListingPagination currentPage={currentPage} />
    </div>
  );
}
