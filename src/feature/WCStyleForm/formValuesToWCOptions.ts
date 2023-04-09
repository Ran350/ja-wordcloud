import { type WcStyleType } from './schema'

import type { WCOptions } from '~/feature/WCOptions/WCOptions.type'

const setColor =
  (colors: WcStyleType['colors']): WCOptions['color'] =>
  (_word: string, _weight: number | string, fontSize: number) => {
    if (fontSize >= 32) return colors[0]
    if (fontSize > 16) return colors[1]
    return colors[2]
  }

export const formValuesToWCOptions = (form: WcStyleType): WCOptions => {
  console.log(form)
  return {
    ...form,
    color: setColor(form.colors),
    weightFactor: (size) => (size * 11) ** 1.1,
  }
}
