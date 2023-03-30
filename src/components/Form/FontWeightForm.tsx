import { Select } from '@mantine/core'

import { fontWeights } from 'src/lib/form/data/fontWeight'
import type { Form } from 'src/lib/form/index.type'

type Props = {
  form: Form
  setForm: React.Dispatch<React.SetStateAction<Form>>
}
export const FontWeightForm: React.VFC<Props> = ({ form, setForm }) => {
  return (
    <Select
      label="font weight"
      placeholder="font weight"
      value={`${form.fontWeight}`}
      data={fontWeights.map((fw) => ({ value: `${fw}`, label: `${fw}` }))}
      onChange={(fw) => {
        setForm((form) => ({ ...form, fw }))
      }}
    />
  )
}
