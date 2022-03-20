import { fontFamilies } from '../form/data/fontFamily'
import { Form } from '../form/index.type'
import { WCOptions } from '../WCOption/index.type'

import { setColor } from './color'
import { getGridSize } from './grid'

export const translateForm2Option = (form: Form): WCOptions => {
  return {
    fontFamily: fontFamilies[form.fontFamilyId].css,
    fontWeight: form.fontWeight,
    // カラーパレット  #f4f7f7 > #8cd790 > #77af9c > #285943
    color: setColor(form.colors),

    backgroundColor: form.backgroundColor,
    minSize: form.minSize,
    weightFactor: (size) => (size * 11) ** 1.1,
    gridSize: getGridSize(),

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
