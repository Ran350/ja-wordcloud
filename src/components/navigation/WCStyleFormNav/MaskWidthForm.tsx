import { NumberInput } from '@mantine/core'

type Props = {
  maskWidth: number
  disabled: boolean
  onChange: (maskWidth: number) => void
}
export const MaskWidthForm = ({ maskWidth, disabled, onChange }: Props) => {
  return (
    <NumberInput
      label="マスクの大きさ"
      placeholder="マスクの大きさ"
      disabled={disabled}
      value={maskWidth}
      onChange={onChange}
    />
  )
}
