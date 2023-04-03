import { ColorInput } from '@mantine/core'

type Props = {
  color: string
  onChange: (backgroundColor: string) => void
}
export const BackgroundColorForm: React.VFC<Props> = (props) => {
  return <ColorInput label="background color" value={props.color} color={props.color} onChangeEnd={props.onChange} />
}
