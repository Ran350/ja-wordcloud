import { InputNumber } from '../ui/InputNumber'
import { Label } from '../ui/Label'

import type { Form } from 'src/lib/form/index.type'

type Props = {
  form: Form
  setForm: React.Dispatch<React.SetStateAction<Form>>
}
export const GridSizeForm: React.VFC<Props> = ({ form, setForm }) => {
  return (
    <div>
      <Label text="grid size" />

      <InputNumber
        number={form.gridSize}
        onChange={(gridSize) => {
          setForm((form) => ({ ...form, gridSize }))
        }}
        placeholder="grid size"
      />
    </div>
  )
}
