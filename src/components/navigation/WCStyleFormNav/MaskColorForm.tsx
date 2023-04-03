import { ColorInput } from '@mantine/core'

type Props = {
  disabled: boolean
  color: string
  onChange: (color: string) => void
}
export const MaskColorForm = ({ color, disabled, onChange }: Props) => {
  return <ColorInput disabled={disabled} label="mask color" value={color} color={color} onChangeEnd={onChange} />
}
