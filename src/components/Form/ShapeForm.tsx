import { Select } from '@mantine/core'

import { shapes } from 'src/lib/form/data/shape'
import type { Form } from 'src/lib/form/index.type'

type Props = {
  form: Form
  setForm: React.Dispatch<React.SetStateAction<Form>>
}
export const ShapeForm: React.VFC<Props> = ({ form, setForm }) => {
  return (
    <Select
      label="shape"
      placeholder="shape"
      value={`${form.shape}`}
      data={shapes.map((shape) => ({ value: shape, label: shape }))}
      onChange={(shape) => {
        setForm((form) => ({ ...form, fw: shape }))
      }}
    />
  )
}
