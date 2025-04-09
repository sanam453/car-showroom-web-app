"use server";

export async function getCarMarketData() {
    try {
        const response = await fetch("https://auto.dev/api/listings?apikey=ZrQEPSkKc2FuYW0uaGFtemE5QGdtYWlsLmNvbQ%3D%3D"),
        data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error fetching car market data:", error);
        return null;
    }
}