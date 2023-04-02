import { NumberInput } from '@mantine/core'

type Props = {
  maskWidth: number
  onChange: (maskWidth: number) => void
}
export const MaskWidthForm: React.VFC<Props> = (props) => {
  return <NumberInput label="mask width" placeholder="mask width" value={props.maskWidth} onChange={props.onChange} />
}
