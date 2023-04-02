import { NumberInput } from '@mantine/core'

import type { Form } from 'src/types/form.type'

type Props = {
  gridSize: number
  onChange: (gridSize: number) => void
}
export const GridSizeForm: React.VFC<Props> = (props) => {
  return <NumberInput label="grid size" placeholder="grid size" value={props.gridSize} onChange={props.onChange} />
}
