import { Label } from '../ui/Label'
import { Select } from '../ui/Select'

import { shapes } from 'src/lib/form/data/shape'
import type { Form } from 'src/lib/form/index.type'

type Props = {
  form: Form
  setForm: React.Dispatch<React.SetStateAction<Form>>
}
export const ShapeForm: React.VFC<Props> = ({ form, setForm }) => {
  return (
    <div>
      <Label text="shape" />

      <Select
        value={form.shape}
        options={shapes.map((shape) => ({
          key: shape,
          value: shape,
        }))}
        onChange={(shape: string) => {
          setForm((form) => ({
            ...form,
            shape,
          }))
        }}
      />
    </div>
  )
}
