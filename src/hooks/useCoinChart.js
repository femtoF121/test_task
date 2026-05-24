import { useQuery } from "@tanstack/react-query";
import { fetchChart } from "../api/coins";
import { formatDate } from "../utils/formatters";

export const useCoinChart = (coinId) => {
  return useQuery({
    queryKey: ["chart", coinId],
    queryFn: () => fetchChart(coinId),
    refetchInterval: 30 * 1000,
    select: (data) =>
      data.prices.map(([timestamp, price]) => ({
        date: formatDate(timestamp),
        price,
      })),
  });
};
