import { WCOptions } from '../WCOption/index.type'

type SetColor = (colors: [string, string, string]) => WCOptions['color']
export const setColor: SetColor = (colors) => (word, weight, fontSize) => {
  if (fontSize >= 32) return colors[0]
  if (fontSize > 16) return colors[1]
  return colors[2]
}
