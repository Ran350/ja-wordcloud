import { Label } from '../ui/Label'
import { Toggle } from '../ui/Toggle'

import type { Form } from 'src/lib/form/index.type'

type Props = {
  form: Form
  setForm: React.Dispatch<React.SetStateAction<Form>>
}

export const DrawMaskFrom: React.VFC<Props> = ({ form, setForm }) => {
  return (
    <div>
      <Label text="draw mask" />

      <Toggle
        checked={form.drawMask}
        onChange={() =>
          setForm((form) => ({
            ...form,
            drawMask: !form.drawMask,
          }))
        }
      />
    </div>
  )
}
