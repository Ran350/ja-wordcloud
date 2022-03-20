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

      <Select onChange={(fontWeight) => setForm((form) => ({ ...form, fontWeight }))}>
        {fontWeights.map((fontWeight) => (
          <option key={fontWeight} value={fontWeight} selected={fontWeight === form.fontWeight}>
            {fontWeight}
          </option>
        ))}
      </Select>
    </div>
  )
}
