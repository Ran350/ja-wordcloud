import { type WcStyleType } from './schema'

import type { WCOptions } from '~/feature/WCOptions/WCOptions.type'

const colorsToColor =
  (colors: WcStyleType['colors']): WCOptions['color'] =>
  (_word, _weight, fontSize: number): string => {
    if (fontSize > 32) return colors[0]
    if (fontSize > 16) return colors[1]
    return colors[2]
  }

export const formValuesToWCOptions = (formValues: WcStyleType): WCOptions => {
  console.log(formValues)
  return {
    ...formValues,
    color: colorsToColor(formValues.colors),
    weightFactor: (size) => (size * 11) ** 1.1,
  }
}
