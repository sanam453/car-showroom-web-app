"use server";

const apiKey = process.env.API_KEY;
const apiBaseUrl = "https://auto.dev/api";

const sortFilters = {
  priceAsc: "price:asc",
  priceDesc: "price:desc",
  yearAsc: "year:asc",
  yearDesc: "year:desc",
}

export type Sort = keyof typeof sortFilters;

export async function getCarMarketData({
  page = 1,
  search,
  sort,
}: {
  page?: number;
  search?: string;
  sort?: Sort;
}) {
  try {
    const baseUrl = new URL(`${apiBaseUrl}/listings`);

    baseUrl.searchParams.append("limit", "6");
    baseUrl.searchParams.append(
      "page",
      page > 10 ? "10" : page < 1 ? "1" : page.toString()
    );

    if (search) {
      baseUrl.searchParams.append("make", search);
    }


    if(sort) {
      baseUrl.searchParams.append("sort_filter", sortFilters[sort]);
    }

    const request = await fetch(baseUrl.toString(), {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    const response = await request.json();

    if (response) {
      const cars = response.records.map((car: Record<string, string>) => ({
        id: car.id,
        vin: car.vin,
        color: car.displayColor,
        year: car.year,
        make: car.make,
        model: car.model,
        price: car.price,
        mileage: car.mileage,
        photo: car.primaryPhotoUrl,
        dealer: car.dealerName,
        url: car.clickoffUrl,
        gallary: car.photoUrls,
      }));

      return cars;
    }
  } catch (error) {
    console.error("Error fetching car market data:", error);
    return null;
  }
}
