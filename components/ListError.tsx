import React from "react"
import { Button } from "react-native"
import { QueryObserverBaseResult } from "@tanstack/react-query"
import { styled } from "styled-components/native"

export function ListError({
  refetch
}: {
  refetch: QueryObserverBaseResult["refetch"]
}) {
  const onPress = () => refetch()

  return (
    <Wrapper>
      <Title>{"Error while fetching ;("}</Title>
      <Button
        onPress={onPress}
        title={"Please try again"}
      />
    </Wrapper>
  )
}

const Wrapper = styled.View`
  flex: 1;
  padding: 16px;
  align-items: center;
  justify-content: center;
`
const Title = styled.Text`
  font-size: 16px;
`
