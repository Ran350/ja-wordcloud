import { NumberInput } from '@mantine/core'

import type { Form } from 'src/lib/form/index.type'

type Props = {
  form: Form
  setForm: React.Dispatch<React.SetStateAction<Form>>
}
export const GridSizeForm: React.VFC<Props> = ({ form, setForm }) => {
  return (
    <NumberInput
      label="grid size"
      placeholder="grid size"
      value={form.gridSize}
      onChange={(gridSize) => {
        if (gridSize === '') return
        setForm((form) => ({ ...form, gridSize }))
      }}
    />
  )
}
