import React from "react"
import styled from "styled-components/native"

const SIZE = 16

interface BadgeProps {
  value: number | undefined
}

export function Badge({ value }: BadgeProps) {
  if (!value) {
    return null
  }

  return (
    <Wrapper>
      <Value>{value}</Value>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  align-items: center;
  top: ${-SIZE / 2}px;
  height: ${SIZE}px;
  justify-content: center;
  position: absolute;
  right: ${-SIZE / 2}px;
  width: ${SIZE}px;
  background-color: #000;
  border-radius: ${SIZE / 2}px;
`
const Value = styled.Text`
  color: #fff;
  font-size: 10px;
`
