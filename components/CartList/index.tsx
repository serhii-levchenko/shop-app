import React from "react"
import { FlashList } from "@shopify/flash-list"
import { styled } from "styled-components/native"

import { ESTIMATED_ITEM_HEIGHT, ListItem, ListItemProps } from "./ListItem"
import { ListItemSeparator } from "./ListItemSeparator"

import { ListError } from "@/components/ListError"
import { ListLoading } from "@/components/ListLoading"
import { useCartProducts } from "@/hooks/useCart"

function renderItem({ item }: ListItemProps) {
  return <ListItem item={item} />
}

export function CartList() {
  const { data, isLoading, isError, refetch } = useCartProducts()

  if (isLoading) {
    return <ListLoading />
  }

  if (isError) {
    return <ListError refetch={refetch} />
  }

  return (
    <List
      estimatedItemSize={ESTIMATED_ITEM_HEIGHT}
      ItemSeparatorComponent={ListItemSeparator}
      data={data}
      renderItem={renderItem}
    />
  )
}

const List = styled(FlashList).attrs({
  contentContainerStyle: {
    padding: 48
  }
})``
