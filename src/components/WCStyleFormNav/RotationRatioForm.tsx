import { NumberInput } from '@mantine/core'

type Props = {
  rotationRatio: number
  onChange: (rotationRatio: number) => void
}
export const RotationRatioForm: React.VFC<Props> = (props) => {
  return (
    <NumberInput
      label="rotation ratio"
      placeholder="rotation ratio"
      value={props.rotationRatio}
      onChange={props.onChange}
    />
  )
}
