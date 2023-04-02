import { Label } from '../ui/Label'
import { Range } from '../ui/Range'

import type { Form } from 'src/types/form.type'

type Props = {
  form: Form
  setForm: React.Dispatch<React.SetStateAction<Form>>
}
export const RotationStepForm: React.VFC<Props> = ({ form, setForm }) => {
  return (
    //   TODO: min max rotation
    <div>
      <Label text="Rotation Step" />
      <Range value={10} min={0} max={100} step={10} />
    </div>
  )
}
