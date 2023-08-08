import React from "react"
import { ActivityIndicator } from "react-native"
import { styled } from "styled-components/native"

export function ListLoading() {
  return (
    <Wrapper>
      <ActivityIndicator />
    </Wrapper>
  )
}

const Wrapper = styled.View`
  flex: 1;
  padding: 16px;
  align-items: center;
  justify-content: center;
`
