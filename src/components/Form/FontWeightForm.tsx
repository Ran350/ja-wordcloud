import { Label } from '../ui/Label'
import { Select } from '../ui/Select'

import { fontWeights } from 'src/lib/form/data/fontWeight'
import type { Form } from 'src/lib/form/index.type'

type Props = {
  form: Form
  setForm: React.Dispatch<React.SetStateAction<Form>>
}
export const FontWeightForm: React.VFC<Props> = ({ form, setForm }) => {
  return (
    <div>
      <Label text="font weight" />

      <Select
        value={form.fontWeight}
        options={fontWeights.map((fontWeight) => ({
          key: fontWeight,
          value: fontWeight,
        }))}
        onChange={(fontWeight) =>
          setForm((form) => ({
            ...form,
            fontWeight,
          }))
        }
      />
    </div>
  )
}
