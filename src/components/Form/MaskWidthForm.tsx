import { NumberInput } from '@mantine/core'

import type { Form } from 'src/lib/form/index.type'

type Props = {
  form: Form
  setForm: React.Dispatch<React.SetStateAction<Form>>
}
export const MaskWidthForm: React.VFC<Props> = ({ form, setForm }) => {
  return (
    <NumberInput
      label="mask width"
      placeholder="mask width"
      value={form.maskGapWidth}
      onChange={(maskGapWidth) => {
        if (maskGapWidth === '') return
        setForm((form) => ({ ...form, maskGapWidth }))
      }}
    />
  )
}
