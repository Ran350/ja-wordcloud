import { Navbar, ScrollArea, Stack } from '@mantine/core'
import type { SetFieldValue } from '@mantine/form/lib/types'

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

import type { Color } from '~/types/Color.type'
import type { WCStyleForm } from '~/domain/WCStyleForm/WCStyleForm.type'

type Props = {
  form: WCStyleForm
  setForm: SetFieldValue<WCStyleForm>
}
export const WCStyleFormNav: React.VFC<Props> = ({ form, setForm }) => {
  return (
    <Navbar.Section grow component={ScrollArea} mt="md">
      <Stack spacing="sm" align="stretch">
        <FontFamilyForm
          fontFamilyId={form.fontFamilyId}
          onChange={(ff) => setForm('fontFamilyId', ff as WCStyleForm['fontFamilyId'])}
          // FIXME: asアサーションせずにvalidationかける
        />
        <FontWeightForm
          fontWeight={`${form['fontWeight']}`}
          onChange={(fw) => setForm('fontWeight', fw as WCStyleForm['fontWeight'])}
          // FIXME: asアサーションせずにvalidationかける
        />
        <FontColorForm
          colors={form.colors.map((color, i) => ({
            color,
            onChange: (color) =>
              setForm('colors', form.colors.map((c, j) => (i === j ? color : c)) as [Color, Color, Color]),
          }))}
          // FIXME: asアサーションせずにvalidationかける
        />
        <BackgroundColorForm color={form['backgroundColor']} onChange={(bc) => setForm('backgroundColor', bc)} />
        <GridSizeForm gridSize={form['gridSize']} onChange={(gs) => setForm('gridSize', gs)} />
        <ShapeForm
          shape={form['shape']}
          onChange={(s) => setForm('shape', s as WCStyleForm['shape'])}
          // FIXME: asアサーションせずにvalidationかける
        />
        <RotationRatioForm rotationRatio={form['rotateRatio']} onChange={(r) => setForm('rotateRatio', r)} />

        <DrawMaskFrom isDrawMask={form['drawMask']} onToggle={() => setForm('drawMask', !form['drawMask'])} />
        <MaskColorForm
          color={form['maskColor']}
          disabled={!form['drawMask']}
          onChange={(c) => setForm('maskColor', c)}
        />
        <MaskWidthForm
          maskWidth={form['maskGapWidth']}
          disabled={!form['drawMask']}
          onChange={(w) => setForm('maskGapWidth', w)}
        />
      </Stack>
    </Navbar.Section>
  )
}
