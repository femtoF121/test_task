const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchCoins = async (page, perPage) => {
  const url = new URL(`${BASE_URL}/markets?vs_currency=usd`);
  url.searchParams.append("per_page", perPage);
  url.searchParams.append("page", page);

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error("Failed to fetch coins data");
  }
  return response.json();
};

export const fetchChart = async (coinId) => {
  if (!coinId) throw new Error("Coin ID is required");

  const response = await fetch(
    `${BASE_URL}/${coinId}/market_chart?vs_currency=usd&days=7`,
  );
  if (!response.ok) throw new Error(`Failed to fetch ${coinId} data`);
  return response.json();
};
