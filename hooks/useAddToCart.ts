import { useNotifications } from "react-native-notificated"
import { useMutation, useQueryClient } from "@tanstack/react-query"

import { useCart } from "./useCart"

import { axiosClient } from "@/services/api"
import { Cart, CartProduct } from "@/types/cart"

function addToCart(cart: Cart | undefined, newProduct: CartProduct) {
  if (!cart) {
    return []
  }

  const newProducts = Object.values(
    [...cart.products, newProduct].reduce<CartProduct[]>(
      (acc, { productId, ...item }) => {
        if (!acc[productId]) {
          acc[productId] = {
            quantity: 0
          }
        }

        acc[productId] = {
          productId,
          ...acc[productId],
          ...item,
          quantity: acc[productId].quantity + item.quantity
        }

        return acc
      },
      {}
    )
  )

  return {
    ...cart,
    products: newProducts
  }
}

export function useAddToCart() {
  const queryClient = useQueryClient()
  const { data } = useCart()
  const { notify } = useNotifications()

  return useMutation({
    mutationFn: async ({
      productId
    }: {
      productId: CartProduct["productId"]
    }): Promise<Cart> => {
      const newData = addToCart(data, { productId, quantity: 1 })

      const resp = await axiosClient.patch("carts/1", newData)
      return resp.data
    },
    onMutate: ({ productId }) => {
      const newData = addToCart(data, { productId, quantity: 1 })

      queryClient.setQueryData(["cart"], newData)
    },
    onSuccess: (data) => {
      notify("success", {
        params: {
          title: "Product is added to cart"
        }
      })
      queryClient.setQueryData(["cart"], data)
    },
    onError: () => {
      notify("error", {
        params: {
          title: "Something went wrong. Please try again later."
        }
      })
    }
  })
}
