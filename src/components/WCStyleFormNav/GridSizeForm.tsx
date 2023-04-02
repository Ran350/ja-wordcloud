import { NumberInput } from '@mantine/core'

type Props = {
  gridSize: number
  onChange: (gridSize: number) => void
}
export const GridSizeForm: React.VFC<Props> = (props) => {
  return <NumberInput label="grid size" placeholder="grid size" value={props.gridSize} onChange={props.onChange} />
}
