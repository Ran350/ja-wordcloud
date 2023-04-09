import type { WCOptions } from './WCOption.type'

import type { Color } from '~/types/Color.type'

type Form = Omit<WCOptions, 'color' | 'weightFactor'> & {
  colors: [Color, Color, Color]
}

const setColor =
  (colors: Form['colors']): WCOptions['color'] =>
  (_word: string, _weight: number | string, fontSize: number) => {
    if (fontSize >= 32) return colors[0]
    if (fontSize > 16) return colors[1]
    return colors[2]
  }

export const formValuesToWCOption = (form: Form): WCOptions => {
  console.log(form)
  return {
    ...form,
    color: setColor(form.colors),
    weightFactor: (size) => (size * 11) ** 1.1,
  }
}
