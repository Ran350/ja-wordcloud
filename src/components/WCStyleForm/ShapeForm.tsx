import { Select } from '@mantine/core'

import { shapes } from 'src/constant/shape'
import type { Form } from 'src/types/form.type'

type Props = {
  shape: string
  onChange: (shape: string) => void
}
export const ShapeForm: React.VFC<Props> = (props) => {
  return (
    <Select
      label="shape"
      placeholder="shape"
      value={props.shape}
      data={shapes.map((shape) => ({ value: shape, label: shape }))}
      onChange={props.onChange}
    />
  )
}
