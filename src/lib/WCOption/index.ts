import { InputWCOptions, WCOptions } from './WCOptions.type'

export const fontFamilies: WCOptions['fontFamily'][] = ['メイリオ', 'sans-serif']

export const fontWeights: WCOptions['fontWeight'][] = [
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900,
  'normal',
  'bold',
  'bolder',
  'lighter',
]

export const shapes: WCOptions['shape'][] = [
  'circle',
  'cardioid',
  'diamond',
  'square',
  'triangle-forward',
  'triangle',
  'pentagon',
  'star',
]

type SetColor = (colors: [string, string, string]) => WCOptions['color']
const setColor: SetColor = (colors) => (word, weight, fontSize) => {
  if (fontSize >= 32) return colors[0]
  if (fontSize > 16) return colors[1]
  return colors[2]
}

export const getWCOptions = (options: InputWCOptions): WCOptions => {
  return {
    ...options,
    color: setColor(options.colors),
  }
}
