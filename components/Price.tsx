import React from "react"
import { TextStyle } from "react-native"
import { styled } from "styled-components/native"

export function Price({ style, value }: { style?: TextStyle; value: number }) {
  const price = Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD"
  }).format(value)

  return <Text style={style}>{price}</Text>
}

const Text = styled.Text`
  font-weight: bold;
`
