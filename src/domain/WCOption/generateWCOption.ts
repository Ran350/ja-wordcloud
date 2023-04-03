import type { WCOptions } from './WCOption.type'

import { fontFamilies } from '~/constant/fontFamily'
import type { Color } from '~/types/Color.type'

type Form = Omit<WCOptions, 'fontFamily' | 'color' | 'weightFactor'> & {
  fontFamilyId: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16'
  colors: [Color, Color, Color]
}

const setColor =
  (colors: Form['colors']): WCOptions['color'] =>
  (_word: string, _weight: number | string, fontSize: number) => {
    if (fontSize >= 32) return colors[0]
    if (fontSize > 16) return colors[1]
    return colors[2]
  }

export const generateWCOption = (form: Form): WCOptions => {
  console.log(form)
  return {
    ...form,
    fontFamily: fontFamilies[form.fontFamilyId].css,
    color: setColor(form.colors),
    weightFactor: (size) => (size * 11) ** 1.1,
  }
}
