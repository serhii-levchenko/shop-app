import { useQuery, useQueryClient } from "@tanstack/react-query"

import { axiosClient } from "@/services/api"
import { CartProduct } from "@/types/cart"
import { Product } from "@/types/product"

export function useProduct(productId: CartProduct["productId"]) {
  const queryClient = useQueryClient()

  return useQuery({
    queryKey: ["product", productId],
    placeholderData: () => {
      const products = queryClient.getQueryData(["products"]) as
        | Product[]
        | undefined

      return products?.find((product) => product.id === productId)
    },
    queryFn: (): Promise<Product> =>
      axiosClient.get(`products/${productId}`).then((resp) => resp.data)
  })
}
