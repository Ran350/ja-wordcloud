import { InputColor } from '../ui/InputColor'
import { Label } from '../ui/Label'

import type { Form } from 'src/lib/form/index.type'

type Props = {
  form: Form
  setForm: React.Dispatch<React.SetStateAction<Form>>
}
export const MaskColorForm: React.VFC<Props> = ({ form, setForm }) => {
  return (
    <div>
      <Label text="mask color" />

      <InputColor
        color={form.maskColor}
        onChange={(e) => {
          setForm((form) => ({
            ...form,
            maskColor: e.target.value,
          }))
        }}
      />
    </div>
  )
}
