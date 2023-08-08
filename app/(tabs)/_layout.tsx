import { Tabs } from "expo-router"

import { CartBadge } from "@/components/CartBadge"
import { TabBarIcon } from "@/components/TabBarIcon"

const SCREEN_OPTIONS = {
  tabBarActiveTintColor: "#000",
  tabBarShowLabel: false
}

export default function TabLayout() {
  return (
    <Tabs screenOptions={SCREEN_OPTIONS}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Shop",
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              name="home"
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              name="shopping-cart"
              color={color}
            >
              <CartBadge />
            </TabBarIcon>
          )
        }}
      />
    </Tabs>
  )
}
