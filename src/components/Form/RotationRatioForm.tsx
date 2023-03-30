import { NumberInput } from '@mantine/core'

import type { Form } from 'src/lib/form/index.type'

type Props = {
  form: Form
  setForm: React.Dispatch<React.SetStateAction<Form>>
}
export const RotationRatioForm: React.VFC<Props> = ({ form, setForm }) => {
  return (
    <NumberInput
      label="rotation ratio"
      placeholder="rotation ratio"
      value={form.rotateRatio}
      onChange={(rotateRatio) => {
        if (rotateRatio === '') return
        setForm((form) => ({ ...form, rotateRatio }))
      }}
    />
  )
}
