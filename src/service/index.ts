import { USDExchangeRate } from "@/interface"

export const fetchForExchangeRate = (): Promise<USDExchangeRate> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        base: 'USD',
        date: '2022-08-16',
        rates: {
          CNY: 6.781836,
          RUB: 61.263275,
        },
      })
    }, 200)
  })
}
