import { useEffect, useState } from 'react'
import { PlanCreator, PlanView } from './components'
import { ExchangeRateBanner } from './components/exchange-rate-banner'
import { Plan, PriceItem, priceFormatMap } from './interface'
import { fetchForExchangeRate } from './service'

export const App = () => {
  const [priceList, setPriceList] = useState<null | PriceItem[]>(null)
  const [planList, setPlanList] = useState<Plan[]>([])

  const onSubmit = (newPlan: Plan) => setPlanList((pl) => [...pl, newPlan])
  const toggle = (id: number) => {
    setPlanList((pl) =>
      pl.map((e) =>
        e.id === id
          ? {
              ...e,
              isFinished: !e.isFinished,
            }
          : e
      )
    )
  }

  useEffect(() => {
    fetchForExchangeRate().then((e) => {
      console.info('e', e)

      setPriceList([
        {
          ...priceFormatMap['RUB'],
          value: e.rates.RUB,
        },
        {
          ...priceFormatMap['RMB'],
          value: e.rates.CNY,
        },
        {
          ...priceFormatMap['USD'],
          value: 1,
        },
      ])
    })
  }, [])
  return priceList ? (
    <div style={{ padding: 30 }}>
      <PlanCreator {...{ priceList, onSubmit }} />
      <ExchangeRateBanner priceList={priceList} />
      <PlanView
        listLabel="计划"
        amountLabel="将要花费"
        toggle={toggle}
        plans={planList.filter((e) => !e.isFinished)}
      />
      <PlanView
        listLabel="已完成"
        amountLabel="一共花了"
        toggle={toggle}
        plans={planList.filter((e) => e.isFinished)}
      />
    </div>
  ) : null
}
