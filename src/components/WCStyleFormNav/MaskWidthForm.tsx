import { NumberInput } from '@mantine/core'

type Props = {
  maskWidth: number
  disabled: boolean
  onChange: (maskWidth: number) => void
}
export const MaskWidthForm: React.VFC<Props> = ({ maskWidth, disabled, onChange }) => {
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
