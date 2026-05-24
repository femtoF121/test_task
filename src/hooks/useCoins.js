import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "../api/coins";

export const useCoins = (page = 1, perPage = 50) => {
  return useQuery({
    queryKey: ["coins", page, perPage],
    queryFn: () => fetchCoins(page, perPage),
    staleTime: 60 * 1000,
  });
};
