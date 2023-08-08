import { Text } from "react-native"
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context"
import { SCREEN_WIDTH } from "@gorhom/bottom-sheet"
import { Image } from "expo-image"
import { Stack, useLocalSearchParams } from "expo-router"
import { styled } from "styled-components/native"

import { Price } from "@/components/Price"
import { TextButton } from "@/components/TextButton"
import { useAddToCart } from "@/hooks/useAddToCart"
import { useProduct } from "@/hooks/useProduct"
import { DEFAULT_SPACING } from "@/services/theme"

const IMAGE_SIZE = SCREEN_WIDTH - DEFAULT_SPACING * 2

export default function ProductScreen() {
  const { id } = useLocalSearchParams()
  const { data: product, isLoading, isError } = useProduct(+id)
  const { mutateAsync: addToCart } = useAddToCart()
  const { bottom } = useSafeAreaInsets()

  if (isLoading) {
    return <Text>Loading...</Text>
  }

  if (isError) {
    return <Text>Error</Text>
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: product.title
        }}
      />
      <Wrapper>
        <ProductImage
          source={product.image}
          contentFit="contain"
        />
        <Title>{product.title}</Title>
        <Description>{product.description}</Description>
      </Wrapper>
      <Footer paddingBottom={bottom}>
        <Price value={product.price} />
        <TextButton
          onPress={() => addToCart({ productId: product.id })}
          title="Shop now"
        />
      </Footer>
    </>
  )
}

const Wrapper = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: DEFAULT_SPACING,
    paddingTop: DEFAULT_SPACING
  }
})``
const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  padding-vertical: 16px;
`
const Description = styled.Text`
  font-size: 16px;
`
const ProductImage = styled(Image)`
  width: ${IMAGE_SIZE}px;
  height: ${IMAGE_SIZE}px;
`
const Footer = styled.View<{ paddingBottom: EdgeInsets["bottom"] }>`
  padding: ${DEFAULT_SPACING}px;
  padding-bottom: ${({ paddingBottom }) => paddingBottom + DEFAULT_SPACING}px;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
`
