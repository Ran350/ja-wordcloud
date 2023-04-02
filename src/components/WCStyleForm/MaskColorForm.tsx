import { ColorInput } from '@mantine/core'

type Props = {
  maskColor: string
  onChange: (color: string) => void
}
export const MaskColorForm: React.VFC<Props> = (props) => {
  return <ColorInput label="mask color" color={props.maskColor} onChange={props.onChange} />
}