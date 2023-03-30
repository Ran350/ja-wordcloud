import { Switch } from '@mantine/core'

import type { Form } from 'src/lib/form/index.type'

type Props = {
  form: Form
  setForm: React.Dispatch<React.SetStateAction<Form>>
}

export const DrawMaskFrom: React.VFC<Props> = ({ form, setForm }) => {
  return (
    <Switch
      labelPosition="left"
      label="draw mask"
      checked={form.drawMask}
      onChange={() => setForm((form) => ({ ...form, drawMask: !form.drawMask }))}
    />
  )
}
