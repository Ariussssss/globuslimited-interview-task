import { Plan } from '@/interface'
import { Button, Checkbox } from 'antd'
import { PriceSpan } from './price-span'

interface PlanItemProps {
  onChange(): void
  plan: Plan
}

export const PlanItem = ({ onChange, plan }: PlanItemProps) => (
  <Button block style={{ display: 'flex', padding: 4, alignItems: 'center' }}>
    <Checkbox checked={plan.isFinished} onClick={onChange} />
    <p style={{ margin: 0, flex: 1, padding: 8, textAlign: 'left' }}>
      {plan.name}
    </p>
    <PriceSpan price={plan.price} />
  </Button>
)
