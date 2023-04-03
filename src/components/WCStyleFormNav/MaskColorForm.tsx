import { ColorInput } from '@mantine/core'

type Props = {
  disabled: boolean
  color: string
  onChange: (color: string) => void
}
export const MaskColorForm: React.VFC<Props> = ({ color, disabled, onChange }) => {
  return <ColorInput disabled={disabled} label="mask color" value={color} color={color} onChangeEnd={onChange} />
}
