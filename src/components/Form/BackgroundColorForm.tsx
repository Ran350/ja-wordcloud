import { ColorInput } from '@mantine/core'

import type { Form } from 'src/lib/form/index.type'

type Props = {
  form: Form
  setForm: React.Dispatch<React.SetStateAction<Form>>
}
export const BackgroundColorForm: React.VFC<Props> = ({ form, setForm }) => {
  return (
    <ColorInput
      label="background color"
      color={form.backgroundColor}
      onChange={(backgroundColor) => {
        setForm((prev) => ({ ...prev, backgroundColor }))
      }}
    />
  )
}
