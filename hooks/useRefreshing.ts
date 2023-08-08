import { useCallback, useState } from "react"
import { QueryObserverBaseResult } from "@tanstack/react-query"

export const useRefreshing = (
  refetch: QueryObserverBaseResult["refetch"]
): [boolean, () => void] => {
  const [isRefreshing, setIsRefreshing] = useState(false)

  const refresh = useCallback(async () => {
    try {
      setIsRefreshing(true)
      await refetch()
    } finally {
      setIsRefreshing(false)
    }
  }, [refetch, setIsRefreshing])

  return [isRefreshing, refresh]
}
