import React, { useCallback, useState } from "react"
import { styled } from "styled-components/native"

function CounterButton({
  children,
  onPress
}: {
  children: string
  onPress: () => void
}) {
  return (
    <Button onPress={onPress}>
      <ButtonText>{children}</ButtonText>
    </Button>
  )
}

export function Counter({
  initialValue,
  onChange
}: {
  initialValue: number
  onChange: (value: number) => void
}) {
  const [value, setValue] = useState(initialValue)
  const increment = useCallback(() => {
    const newValue = value + 1
    setValue(newValue)
    onChange(newValue)
  }, [value, onChange])
  const decrement = useCallback(() => {
    const newValue = value - 1
    setValue(newValue)
    onChange(newValue)
  }, [value, onChange])

  return (
    <Wrapper>
      <CounterButton onPress={decrement}>-</CounterButton>
      <Value>{value}</Value>
      <CounterButton onPress={increment}>+</CounterButton>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  flex-direction: row;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: #000;
  align-items: center;
`
const Value = styled.Text`
  text-align: center;
  flex: 1;
`
const Button = styled.TouchableOpacity`
  background-color: #000;
  width: 24px;
  height: 20px;
`
const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
`
