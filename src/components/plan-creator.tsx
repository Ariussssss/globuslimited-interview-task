import { Plan, Price, PriceItem } from '@/interface'
import { Button, Input, Select } from 'antd'
import { useState } from 'react'

interface PlanCreatorProps {
  priceList: PriceItem[]
  onSubmit(props: Plan): void
}

export const PlanCreator = ({ onSubmit, priceList }: PlanCreatorProps) => {
  const [name, setName] = useState('')
  const [value, setValue] = useState(0)
  const [type, setType] = useState('RMB')

  const reset = () => {
    setName('')
    setValue(0)
    setType('RMB')
  }

  return (
    <div style={{ display: 'flex' }}>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="任务"
      />
      <Input
        value={value}
        type="number"
        onChange={(e) => setValue(+e.target.value)}
        placeholder="价格"
      />
      <Select
        value={type}
        options={priceList.map(({ label, base: value }) => ({ label, value }))}
        onChange={setType}
      />
      <Button
        type="primary"
        onClick={() => {
          const priceBase = priceList.find((e) => e.base === type)?.value
          if (name && value && priceBase) {
            onSubmit({
              id: new Date().getTime(),
              name,
              price: Object.fromEntries(
                priceList.map((e) => [
                  e.base,
                  e.base === type
                    ? value
                    : ((value / priceBase) * e.value).toFixed(3),
                ])
              ) as Price,
              isFinished: false,
            })
            reset()
          }
        }}
      >
        添加
      </Button>
    </div>
  )
}
