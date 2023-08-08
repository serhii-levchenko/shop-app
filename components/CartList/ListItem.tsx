import React from "react"
import { ActivityIndicator, Pressable } from "react-native"
import { Image } from "expo-image"
import { Link } from "expo-router"
import { styled } from "styled-components/native"

import { Counter } from "../Counter"

import { Price } from "@/components/Price"
import { useChangeProductCart } from "@/hooks/useChangeProductCart"
import { useProduct } from "@/hooks/useProduct"
import { SCREEN_WIDTH } from "@/services/theme"
import { CartProduct } from "@/types/cart"

export const ESTIMATED_ITEM_HEIGHT = 121
const IMAGE_SIZE = SCREEN_WIDTH / 5

export interface ListItemProps {
  item: CartProduct
}

export function ListItem({ item }: ListItemProps) {
  const { data: product } = useProduct(item.productId)
  const { mutateAsync: changeProductCart } = useChangeProductCart()

  if (!product) {
    return <ActivityIndicator />
  }

  return (
    <Item>
      <ImageWrapper>
        <Link
          asChild
          href={`/products/${item.productId}`}
        >
          <Pressable>
            <ItemImage
              source={product.image}
              contentFit="cover"
            />
          </Pressable>
        </Link>
        <Counter
          initialValue={item.quantity}
          onChange={(quantity) =>
            changeProductCart({ productId: item.productId, quantity })
          }
        />
      </ImageWrapper>
      <Details>
        <Category>{product.category}</Category>
        <Title>{product.title}</Title>
        <Price value={product.price} />
      </Details>
    </Item>
  )
}

const Item = styled.View`
  flex-direction: row;
`
const ImageWrapper = styled.View`
  margin-right: 16px;
`
const Details = styled.View`
  flex: 1;
`
const ItemImage = styled(Image)`
  width: ${IMAGE_SIZE}px;
  height: ${IMAGE_SIZE}px;
  margin-bottom: 8px;
`
const Title = styled.Text`
  font-size: 16px;
  flex: 1;
`
const Category = styled.Text`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  padding-bottom: 4px;
`
