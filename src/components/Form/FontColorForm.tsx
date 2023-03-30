import { ColorInput } from '@mantine/core'

import { Label } from '../ui/Label'

import type { Form } from 'src/lib/form/index.type'

type Props = {
  form: Form
  setForm: React.Dispatch<React.SetStateAction<Form>>
}
export const FontColorForm: React.VFC<Props> = ({ form, setForm }) => {
  return (
    <div>
      {Array.from({ length: form.colors.length }).map((_, i) => (
        <ColorInput
          key={i}
          color={form.colors[i]}
          onChange={(color) => {
            setForm((prev) => {
              const colors = prev.colors
              colors[i] = color
              return { ...prev, colors }
            })
          }}
        />
      ))}
    </div>
  )
}
