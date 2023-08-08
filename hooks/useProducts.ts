import { useQuery } from "@tanstack/react-query"

import { axiosClient } from "@/services/api"
import { Product } from "@/types/product"

export function useProducts() {
  // note: fakestoreapi doesn't have pagination but if it did, we could use useInfiniteQuery
  return useQuery({
    queryKey: ["products"],
    queryFn: (): Promise<Product[]> =>
      axiosClient.get("products").then((resp) => resp.data)
  })
}
