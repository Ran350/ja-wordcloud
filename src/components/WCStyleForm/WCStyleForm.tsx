import { Navbar, ScrollArea, Stack } from '@mantine/core'

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

import type { SetFieldValue } from '@mantine/form/lib/types'
import type { Form } from 'types/form.type'

type Props = {
  form: Form
  setForm: SetFieldValue<Form>
}
export const WCStyleForm: React.VFC<Props> = ({ form, setForm }) => {
  return (
    <Navbar.Section grow component={ScrollArea} mt="md">
      <Stack spacing="sm" align="stretch">
        <FontFamilyForm fontFamily={form.fontFamilyId} onChange={(ff) => setForm('fontFamilyId', ff)} />
        <FontWeightForm fontWeight={`${form.fontWeight}`} onChange={(fw) => setForm('fontWeight', fw)} />
        <FontColorForm
          colors={form.colors.map((color, i) => ({
            color,
            onChange: (color) =>
              setForm('colors', form.colors.map((c, j) => (i === j ? color : c)) as [string, string, string]), // FIXME
          }))}
        />
        <BackgroundColorForm backgroundColor={form.backgroundColor} onChange={(bc) => setForm('backgroundColor', bc)} />
        <GridSizeForm gridSize={form.gridSize} onChange={(gs) => setForm('gridSize', gs)} />
        <DrawMaskFrom isDrawMask={form.drawMask} onToggle={() => setForm('drawMask', !form.drawMask)} />
        <MaskColorForm maskColor={form.maskColor} onChange={(c) => setForm('maskColor', c)} />
        <MaskWidthForm maskWidth={form.maskGapWidth} onChange={(w) => setForm('maskGapWidth', w)} />
        <RotationRatioForm rotationRatio={form.rotateRatio} onChange={(r) => setForm('rotateRatio', r)} />
        <ShapeForm shape={form.shape} onChange={(s) => setForm('shape', s)} />
      </Stack>
    </Navbar.Section>
  )
}
