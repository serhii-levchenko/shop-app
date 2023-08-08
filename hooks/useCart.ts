import { useQuery, UseQueryResult } from "@tanstack/react-query"

import { axiosClient } from "@/services/api"
import { Cart, CartProduct } from "@/types/cart"

export function useCart(options = {}): UseQueryResult<Cart> {
  return useQuery({
    ...options,
    queryKey: ["cart"],
    queryFn: (): Promise<Cart> =>
      axiosClient.get("carts/1").then((resp) => resp.data)
  })
}

export function useCartProducts(): UseQueryResult<CartProduct[]> {
  return useCart({
    select: (data: Cart) => data?.products
  })
}

export function useCartCount() {
  const { data } = useCartProducts()

  return data?.reduce?.((total, item) => item.quantity + total, 0)
}
