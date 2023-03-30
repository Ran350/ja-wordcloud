import { ColorInput } from '@mantine/core'

import type { Form } from 'src/lib/form/index.type'

type Props = {
  form: Form
  setForm: React.Dispatch<React.SetStateAction<Form>>
}
export const MaskColorForm: React.VFC<Props> = ({ form, setForm }) => {
  return (
    <ColorInput
      label="mask color"
      color={form.maskColor}
      onChange={(maskColor) => {
        setForm((prev) => ({ ...prev, maskColor }))
      }}
    />
  )
}
