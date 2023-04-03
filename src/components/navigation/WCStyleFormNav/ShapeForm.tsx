import { Select } from '@mantine/core'

import { shapes } from '~/constant/shape'

type Props = {
  shape: string
  onChange: (shape: string) => void
}
export const ShapeForm = (props: Props) => {
  return (
    <Select
      label="クラウドの形状"
      placeholder="クラウドの形状"
      value={props.shape}
      data={shapes.map((shape) => ({ value: shape, label: shape }))}
      onChange={props.onChange}
    />
  )
}
