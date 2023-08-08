import React from "react"
import { Pressable } from "react-native"
import { Image } from "expo-image"
import { Link } from "expo-router"
import { styled } from "styled-components/native"

import { Price } from "@/components/Price"
import { TextButton } from "@/components/TextButton"
import { useAddToCart } from "@/hooks/useAddToCart"
import { DEFAULT_SPACING, SCREEN_WIDTH } from "@/services/theme"
import { Product } from "@/types/product"

const ITEM_PADDING = 12
export const NUM_COLUMNS = 2
const ITEM_MARGIN = ITEM_PADDING / 2
const LIST_WIDTH = SCREEN_WIDTH - DEFAULT_SPACING * 2
const ITEM_SIZE = LIST_WIDTH / NUM_COLUMNS - ITEM_MARGIN
const IMAGE_SIZE = ITEM_SIZE - ITEM_PADDING * 2
export const ESTIMATED_ITEM_HEIGHT = 260

export interface ListItemProps {
  item: Product
  index: number
}

export function ListItem({ item: product, index }: ListItemProps) {
  const { mutateAsync: addToCart } = useAddToCart()

  return (
    <Item index={index}>
      <Link
        asChild
        href={`products/${product.id}`}
      >
        <Pressable>
          <ProductImage
            source={product.image}
            contentFit="contain"
          />
        </Pressable>
      </Link>
      <Link
        asChild
        href={`products/${product.id}`}
      >
        <TitleWrapper>
          <Title numberOfLines={3}>{product.title}</Title>
        </TitleWrapper>
      </Link>
      <Footer>
        <Price value={product.price} />
        <TextButton
          onPress={() => addToCart({ productId: product.id })}
          title="Shop now"
        />
      </Footer>
    </Item>
  )
}

const Item = styled.View<{ index: number }>`
  background-color: #fff;
  height: ${ESTIMATED_ITEM_HEIGHT}px;
  padding: ${ITEM_PADDING}px;
  width: ${ITEM_SIZE}px;
  ${({ index }) =>
    index % 2
      ? `margin-left: ${ITEM_MARGIN}px`
      : `margin-right: ${ITEM_MARGIN}px`};
`
const ProductImage = styled(Image)`
  width: ${IMAGE_SIZE}px;
  height: ${IMAGE_SIZE}px;
`
const Title = styled.Text`
  text-align: center;
`
const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
const TitleWrapper = styled.Pressable`
  flex: 1;
  margin-top: 8px;
`
