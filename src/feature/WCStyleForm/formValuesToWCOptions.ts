import { fontFamilies, mergeFamilies } from '../font/fontFamily'

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
  console.log('formValues', formValues)
  const { fontFamiliesIndex, colors, ...others } = formValues

  const wcOptions: WCOptions = {
    ...others,
    fontFamily: mergeFamilies(fontFamilies[fontFamiliesIndex]),
    color: colorsToColor(colors),
    weightFactor: (size) => (size * 11) ** 1.1,
  }

  console.log('wcOptions', wcOptions)
  return wcOptions
}
