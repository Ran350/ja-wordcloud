import type { VFC } from 'react'

type Props = {
  value: number
  max: number
  min?: number
  step?: number
}
export const Range: VFC<Props> = ({ value, max, min = 0, step }) => {
  return (
    <input
      type="range"
      // value={value}
      max={max}
      min={min}
      step={step}
      // TODO: style
      className="
                p-0 w-full h-6
                bg-transparent
                focus:outline-none focus:ring-0 focus:shadow-none"
    />
  )
}
