import { PriceItem } from '@/interface'
import { useMemo } from 'react'

interface ExchangeRateBannerProps {
  priceList: PriceItem[]
}

export const ExchangeRateBanner = ({ priceList }: ExchangeRateBannerProps) => {
  const fmtList = useMemo(() => {
    return priceList
      .map((e, i) => {
        let res: { value: number; icons: string }[] = []
        for (let innerI = i + 1; innerI < priceList.length; innerI++) {
          res.push({
            value: Math.round((e.value / priceList[innerI].value) * 1e3) / 1e3,
            icons: [e.icon, priceList[innerI].icon].join('/'),
          })
        }
        return res
      })
      .flat()
      .filter(Boolean)
  }, [priceList.map((e) => e.value).join('-')])
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', margin: 8 }}>
      {fmtList.map((e) => (
        <div key={e.icons} style={{ marginLeft: 16 }}>
          <span className="">{e.value}</span>
          <span className="">{e.icons}</span>
        </div>
      ))}
    </div>
  )
}
