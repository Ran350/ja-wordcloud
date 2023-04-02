import { Label } from '../ui/Label'
import { Range } from '../ui/Range'

import type { Form } from 'src/types/form.type'

type Props = {
  form: Form
  setForm: React.Dispatch<React.SetStateAction<Form>>
}
export const RotationRangeForm: React.VFC<Props> = ({ form, setForm }) => {
  return (
    //   TODO: min max rotation
    <div>
      <Label text="hoge" />
      <Range value={10} max={100} min={0} step={10} />
    </div>
  )
}
