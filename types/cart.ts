export type CartProduct = {
  productId: number
  quantity: number
}

export type Cart = {
  userId: number
  id: number
  date: Date
  products: CartProduct[]
}
