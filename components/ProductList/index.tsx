import React, { useMemo } from "react"
import { RefreshControl } from "react-native"
import { FlashList } from "@shopify/flash-list"
import { styled } from "styled-components/native"

import {
  ESTIMATED_ITEM_HEIGHT,
  ListItem,
  ListItemProps,
  NUM_COLUMNS
} from "./ListItem"
import { ListItemSeparator } from "./ListItemSeparator"

import { ListError } from "@/components/ListError"
import { ListLoading } from "@/components/ListLoading"
import { useProducts } from "@/hooks/useProducts"
import { useRefreshing } from "@/hooks/useRefreshing"
import { DEFAULT_SPACING } from "@/services/theme"

export function renderItem({ item, index }: ListItemProps) {
  return (
    <ListItem
      item={item}
      index={index}
    />
  )
}

export function ProductList() {
  const { data, isLoading, isError, refetch } = useProducts()
  const [isRefreshing, onRefresh] = useRefreshing(refetch)

  const refreshControl = useMemo(
    () => (
      <RefreshControl
        refreshing={isRefreshing}
        onRefresh={onRefresh}
      />
    ),
    [isRefreshing, onRefresh]
  )

  if (isLoading) {
    return <ListLoading />
  }

  if (isError) {
    return <ListError refetch={refetch} />
  }

  return (
    <List
      numColumns={NUM_COLUMNS}
      estimatedItemSize={ESTIMATED_ITEM_HEIGHT}
      ItemSeparatorComponent={ListItemSeparator}
      refreshControl={refreshControl}
      data={data}
      renderItem={renderItem}
    />
  )
}

const List = styled(FlashList).attrs({
  contentContainerStyle: {
    padding: DEFAULT_SPACING
  }
})``
