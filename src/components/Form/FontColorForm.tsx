import { InputColor } from '../ui/InputColor'
import { Label } from '../ui/Label'

import type { Form } from 'src/lib/form/index.type'

type Props = {
  form: Form
  setForm: React.Dispatch<React.SetStateAction<Form>>
}
export const FontColorForm: React.VFC<Props> = ({ form, setForm }) => {
  return (
    <div>
      <Label text="font colors" />

      {Array.from({ length: form.colors.length }).map((_, i) => (
        <InputColor
          key={i}
          color={form.colors[i]}
          onChange={(e) => {
            const colors = form.colors
            colors[i] = e.target.value
            setForm((option) => ({ ...option, colors }))
          }}
        />
      ))}
    </div>
  )
}
