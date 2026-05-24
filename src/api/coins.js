const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchCoins = async (page, perPage) => {
  const url = new URL(`${BASE_URL}/markets`);
  url.searchParams.append("vs_currency", "usd");
  url.searchParams.append("per_page", perPage);
  url.searchParams.append("page", page);

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error("Failed to fetch coins data");
  }
  return response.json();
};
