import React from "react"
import { styled } from "styled-components/native"

export function TextButton({
  onPress,
  title
}: {
  onPress: () => void
  title: string
}) {
  return (
    <Button onPress={onPress}>
      <Text>{title}</Text>
    </Button>
  )
}

const Button = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-bottom-color: #000;
`
const Text = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
`
