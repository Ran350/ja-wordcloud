import { Slider } from '@mantine/core'

type Props = {
  step: number
  onChange: (range: number) => void
}
export const RotationStepForm: React.VFC<Props> = ({ step, onChange }) => {
  return (
    <Slider
      value={step}
      onChange={onChange}
      label="Rotation Step"
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
  )
}
