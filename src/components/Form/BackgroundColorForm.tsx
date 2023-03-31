import { ColorInput } from '@mantine/core'

type Props = {
  backgroundColor: string
  onChange: (backgroundColor: string) => void
}
export const BackgroundColorForm: React.VFC<Props> = (props) => {
  return <ColorInput label="background color" color={props.backgroundColor} onChange={props.onChange} />
}
