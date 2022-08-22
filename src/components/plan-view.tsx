import { Plan, Price } from '@/interface'
import { Typography } from 'antd'
import { useMemo } from 'react'
import { PlanItem } from './plan-item'
import { PriceSpan } from './price-span'

interface PlanViewProps {
  listLabel: string
  amountLabel: string
  plans: Plan[]
  toggle(id: number): void
}

export const PlanView = ({
  listLabel,
  amountLabel,
  plans,
  toggle,
}: PlanViewProps) => {
  console.info('plans', plans)

  const priceAmount: Price = useMemo(
    () =>
      plans.reduce(
        (a, b) => {
          return Object.fromEntries(
            Object.entries(a).map(([k, v]) => [k, (v + +b.price[k]).toFixed(3)])
          ) as typeof a
        },
        {
          RUB: 0,
          RMB: 0,
          USD: 0,
        }
      ),
    [plans.length]
  )

  return (
    <div className="">
      <Typography.Title level={3}>{listLabel}：</Typography.Title>
      {plans.map((plan) => (
        <PlanItem
          {...{
            key: plan.id,
            onChange: () => toggle(plan.id),
            plan,
          }}
        />
      ))}
      <div style={{ display: 'flex', margin: 8 }}>
        <p style={{ flex: 1 }}>{amountLabel}：</p>
        <PriceSpan price={priceAmount} />
      </div>
    </div>
  )
}
