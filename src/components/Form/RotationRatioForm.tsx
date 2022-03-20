import { InputNumber } from '../ui/InputNumber'
import { Label } from '../ui/Label'

import type { Form } from 'src/lib/form/index.type'

type Props = {
  form: Form
  setForm: React.Dispatch<React.SetStateAction<Form>>
}
export const RotationRatioForm: React.VFC<Props> = ({ form, setForm }) => {
  return (
    <div>
      <Label text="Rotation Ratio" />
      <InputNumber
        number={form.gridSize}
        onChange={(rotationRatio) => {
          setForm((form) => ({ ...form, rotationRatio }))
        }}
        placeholder="rotation ratio"
      />
    </div>
  )
}
