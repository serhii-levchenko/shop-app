import { useMutation, useQueryClient } from "@tanstack/react-query"

import { useCart } from "./useCart"

import { axiosClient } from "@/services/api"
import { Cart, CartProduct } from "@/types/cart"

function changeProductCart(
  cart: Cart | undefined,
  updatedProduct: CartProduct
) {
  const newProducts = cart?.products?.map((product) => {
    if (product.productId === updatedProduct.productId) {
      return {
        ...product,
        quantity: updatedProduct.quantity
      }
    }

    return product
  })

  return {
    ...cart,
    products: newProducts
  }
}

export function useChangeProductCart() {
  const queryClient = useQueryClient()
  const { data } = useCart()

  return useMutation({
    mutationFn: async (product: CartProduct) => {
      const newData = changeProductCart(data, product)

      const resp = await axiosClient.patch("carts/1", newData)
      return resp.data
    },
    onMutate: (product) => {
      const newData = changeProductCart(data, product)
      queryClient.setQueryData(["cart"], newData)
    }
  })
}
