import { NumberInput } from '@mantine/core'

type Props = {
  gridSize: number
  onChange: (gridSize: number) => void
}
export const GridSizeForm = (props: Props) => {
  return <NumberInput label="grid size" placeholder="grid size" value={props.gridSize} onChange={props.onChange} />
}
