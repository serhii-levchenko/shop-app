import FontAwesome from "@expo/vector-icons/FontAwesome"
import { styled } from "styled-components/native"

export function TabBarIcon({
  name,
  color,
  children
}: {
  name: React.ComponentProps<typeof FontAwesome>["name"]
  color: string
  children?: React.ReactNode
}) {
  return (
    <Wrapper>
      <FontAwesome
        size={24}
        name={name}
        color={color}
      />
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.View``
