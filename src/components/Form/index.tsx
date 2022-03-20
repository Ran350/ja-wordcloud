import { BackgroundColorForm } from './BackgroundColorForm'
import { DrawMaskFrom } from './DrawMaskFrom'
import { FontColorForm } from './FontColorForm'
import { FontFamilyForm } from './FontFamilyForm'
import { FontWeightForm } from './FontWeightForm'
import { GridSizeForm } from './GridSizeForm'
import { MaskColorForm } from './MaskColorForm'
import { MaskWidthForm } from './MaskWidthForm'
import { RotationRatioForm } from './RotationRatioForm'
import { ShapeForm } from './ShapeForm'

import type { Form } from 'src/lib/form/index.type'

type Props = {
  form: Form
  setForm: React.Dispatch<React.SetStateAction<Form>>
}
export const FormArea: React.VFC<Props> = ({ form, setForm }) => {
  return (
    <div className="flex flex-col gap-4">
      <FontFamilyForm form={form} setForm={setForm} />

      <FontWeightForm form={form} setForm={setForm} />

      <FontColorForm form={form} setForm={setForm} />

      <BackgroundColorForm form={form} setForm={setForm} />

      <GridSizeForm form={form} setForm={setForm} />

      <DrawMaskFrom form={form} setForm={setForm} />

      <MaskColorForm form={form} setForm={setForm} />

      <MaskWidthForm form={form} setForm={setForm} />

      {/* <RotationRangeForm form={form} setForm={setForm} /> */}

      {/* <RotationRatioForm form={form} setForm={setForm} /> */}

      <RotationRatioForm form={form} setForm={setForm} />

      <ShapeForm form={form} setForm={setForm} />
    </div>
  )
}
