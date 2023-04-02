import { fontFamilies } from 'constant/fontFamily'
import type { Form } from 'types/form.type'
import type { WCOptions } from 'types/WCOption.type'

type SetColor = (colors: [string, string, string]) => WCOptions['color']
const setColor: SetColor = (colors) => (_word: string, _weight: number | string, fontSize: number) => {
  if (fontSize >= 32) return colors[0]
  if (fontSize > 16) return colors[1]
  return colors[2]
}

export const generateWCOption = (form: Form): WCOptions => {
  return {
    fontFamily: fontFamilies[form.fontFamilyId].css,
    fontWeight: form.fontWeight,
    // カラーパレット  #f4f7f7 > #8cd790 > #77af9c > #285943
    color: setColor(form.colors),

    backgroundColor: form.backgroundColor,
    minSize: form.minSize,
    weightFactor: (size) => (size * 11) ** 1.1,
    gridSize: form.gridSize,

    drawMask: form.drawMask,
    maskColor: form.maskColor,
    maskGapWidth: undefined,

    minRotation: form.minRotation,
    maxRotation: form.maxRotation,
    rotationSteps: form.rotationSteps,

    rotateRatio: form.rotateRatio,

    shape: form.shape,
  }
}
