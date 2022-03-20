import { InputColor } from '../ui/InputColor'
import { Label } from '../ui/Label'

import type { Form } from 'src/lib/form/index.type'

type Props = {
  form: Form
  setForm: React.Dispatch<React.SetStateAction<Form>>
}
export const BackgroundColorForm: React.VFC<Props> = ({ form, setForm }) => {
  return (
    <div>
      <Label text="background color" />

      <InputColor
        color={form.backgroundColor}
        onChange={(e) => {
          setForm((option) => ({
            ...option,
            backgroundColor: e.target.value,
          }))
        }}
      />
    </div>
  )
}
