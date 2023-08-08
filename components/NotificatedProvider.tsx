import { createNotifications } from "react-native-notificated"

export const { NotificationsProvider } = createNotifications({
  defaultStylesSettings: {
    globalConfig: {
      defaultIconType: "no-icon",
      multiline: 3
    }
  },
  duration: 5000,
  isNotch: true
})
