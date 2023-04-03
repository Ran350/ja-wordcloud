import { ColorInput } from '@mantine/core'

type Props = {
  color: string
  onChange: (color: string) => void
}
export const BackgroundColorForm = (props: Props) => {
  return <ColorInput label="背景色" value={props.color} color={props.color} onChangeEnd={props.onChange} />
}
