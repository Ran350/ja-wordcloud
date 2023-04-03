import { Select } from '@mantine/core'

import { shapes } from '~/constant/shape'

type Props = {
  shape: string
  onChange: (shape: string) => void
}
export const ShapeForm = (props: Props) => {
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
