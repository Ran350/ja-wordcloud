import { RangeSlider } from '@mantine/core'

type Props = {
  range: [number, number]
  onChange: (range: [number, number]) => void
}
export const RotationRangeForm = ({ range, onChange }: Props) => {
  return (
    <RangeSlider
      value={range}
      onChange={onChange}
      label="Rotation Range"
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
  )
}
