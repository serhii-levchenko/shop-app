import React from "react"

import { Badge } from "./Badge"

import { useCartCount } from "@/hooks/useCart"

export function CartBadge() {
  const cartCount = useCartCount()

  return <Badge value={cartCount} />
}
