import { NumberInput } from '@mantine/core'

type Props = {
  gridSize: number
  onChange: (gridSize: number) => void
}
export const GridSizeForm = (props: Props) => {
  return (
    <NumberInput
      label="グリッドの大きさ"
      placeholder="グリッドの大きさ"
      value={props.gridSize}
      onChange={props.onChange}
    />
  )
}
