import { Price, priceFormatMap } from "@/interface";

interface PriceSpanProps {
  price: Price
}

export const PriceSpan = ({price}: PriceSpanProps) => {
  return <>{Object.entries(price).map(([k, v]) => (
    <div style={{ marginLeft: 16 }} key={k}>
      <span>{priceFormatMap[k].icon}</span>
      <span>{v}</span>
    </div>
  ))}</>
};

