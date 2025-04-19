import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { getCarMarketData, Sort } from "@/lib/actions/car-market";
import { ListingPagination } from "./listing-pagination";
import { ListingSearch } from "./listing-search";
import { ListingSort } from "./listing-sort";

export default async function CarCard({currentPage, currentSearch, currentSort} : {
  currentPage: number, currentSearch: string, currentSort: Sort}) {

  const records = await getCarMarketData({page: currentPage, search: currentSearch, sort: currentSort});  

  return (
    <div className="container mx-auto my-12 group">
      <div className="flex items-center gap-4 flex-wrap">
        <div>
          <h1 className="text-3xl font-semibold mb-2">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <ListingSearch currentSearch={currentSearch} />
        <ListingSort currentSort={currentSort} />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
        {records?.map((record: Record<string, string>) => (
          <Card
            key={record.id}
            className="overflow-hidden group-has-[[data-pending]]:animate-pulse"
          >
            <CardHeader>
            <Image
                  src={
                    record.photo.startsWith("//")
                      ? "https://placehold.co/600x400/png"
                      : record.photo
                  }
                  alt={`${record.make} ${record.model}`}
                  width={768}
                  height={768}
                  className="w-full h-64 object-cover object-center"
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
      <ListingPagination currentPage={currentPage} />
    </div>
  );
}
