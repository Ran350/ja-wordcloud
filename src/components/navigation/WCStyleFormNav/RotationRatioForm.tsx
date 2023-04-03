import { Input, Slider } from '@mantine/core'

type Props = {
  rotationRatio: number
  onChange: (rotationRatio: number) => void
}
export const RotationRatioForm = (props: Props) => {
  return (
    <Input.Wrapper label="rotation ratio">
      <Slider
        defaultValue={0}
        label={(value) => `${value}%`}
        mb="xl"
        marks={[
          { value: 0, label: '0%' },
          { value: 50, label: '50%' },
          { value: 100, label: '100%' },
        ]}
        value={props.rotationRatio}
        onChangeEnd={props.onChange}
      />
    </Input.Wrapper>
  )
}
