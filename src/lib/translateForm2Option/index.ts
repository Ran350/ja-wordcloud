import { fontFamilies } from '../form/data/fontFamily'
import { Form } from '../form/index.type'
import { WCOptions } from '../WCOption/index.type'

type SetColor = (colors: [string, string, string]) => WCOptions['color']
const setColor: SetColor = (colors) => (word, weight, fontSize) => {
  if (fontSize >= 32) return colors[0]
  if (fontSize > 16) return colors[1]
  return colors[2]
}

export const translateForm2Option = (form: Form): WCOptions => {
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
