export interface PriceItem {
  label: string
  base: string
  value: number
  icon: string
}

export const priceFormatMap = Object.fromEntries(
  [
    {
      label: '卢布',
      base: 'RUB',
      icon: '₽',
    },
    {
      label: '人民币',
      base: 'RMB',
      icon: '¥',
    },
    {
      label: '美元',
      base: 'USD',
      icon: '$',
    },
  ].map((e) => [e.base, e])
)

export interface Price extends Record<string, number> {
  RUB: number
  USD: number
  RMB: number
}

export interface Plan {
  id: number;
  name: string
  price: Price
  isFinished: boolean
}

export interface USDExchangeRate {
  base: string
  date: string
  rates: {
    CNY: number
    RUB: number
  }
}
