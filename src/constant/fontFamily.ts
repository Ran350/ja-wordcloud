import type { WCOptions } from '~/domain/WCOption/WCOption.type'
import type { WCStyleForm } from '~/domain/WCStyleForm/WCStyleForm.type'

type FontFamily = {
  name: string
  css: WCOptions['fontFamily']
}
export const fontFamilies: Record<WCStyleForm['fontFamilyId'], FontFamily> = {
  '1': { name: 'Dela Gothic One ', css: "'Dela Gothic One', cursive" },
  '2': { name: 'DotGothic16', css: "'DotGothic16', sans-serif" },
  '3': { name: 'Hachi Maru Pop', css: "'Hachi Maru Pop', cursive" },
  '4': { name: 'Kaisei Tokumin', css: "'Kaisei Tokumin', serif" },
  '5': { name: 'Kiwi Maru', css: "'Kiwi Maru', serif" },
  '6': { name: 'M PLUS 1', css: "'M PLUS 1', sans-serif" },
  '7': { name: 'M PLUS Rounded 1c', css: "'M PLUS Rounded 1c', sans-serif" },
  '8': { name: 'Mochiy Pop One', css: "'Mochiy Pop One', sans-serif" },
  '9': { name: 'Noto Sans JP', css: "'Noto Sans JP', sans-serif" },
  '10': { name: 'Noto Serif JP', css: "'Noto Serif JP', serif" },
  '11': { name: 'Potta One', css: "'Potta One', cursive" },
  '12': { name: 'Rampart One', css: "'Rampart One', cursive" },
  '13': { name: 'RocknRoll One', css: "'RocknRoll One', sans-serif" },
  '14': { name: 'Sawarabi Mincho', css: "'Sawarabi Mincho', serif" },
  '15': { name: 'Train One', css: "'Train One', cursive" },
  '16': { name: 'Yuji Syuku', css: "'Yuji Syuku', serif" },
}
