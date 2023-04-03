import { NumberInput } from '@mantine/core'

type Props = {
  maskWidth: number
  disabled: boolean
  onChange: (maskWidth: number) => void
}
export const MaskWidthForm = ({ maskWidth, disabled, onChange }: Props) => {
  return (
    <NumberInput
      label="mask width"
      placeholder="mask width"
      disabled={disabled}
      value={maskWidth}
      onChange={onChange}
    />
  )
}
