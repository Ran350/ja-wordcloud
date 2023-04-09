import { Tuple } from '@mantine/core'

type FontFamily = {
  name: string
  fallbacks: string[]
}
export const fontFamilies: Tuple<FontFamily, 16> = [
  { name: 'M PLUS 1', fallbacks: ['sans-serif'] },
  { name: 'Dela Gothic One', fallbacks: ['cursive'] },
  { name: 'DotGothic16', fallbacks: ['sans-serif'] },
  { name: 'Hachi Maru Pop', fallbacks: ['cursive'] },
  { name: 'Kaisei Tokumin', fallbacks: ['serif'] },
  { name: 'Kiwi Maru', fallbacks: ['serif'] },
  { name: 'M PLUS Rounded 1c', fallbacks: ['sans-serif'] },
  { name: 'Mochiy Pop One', fallbacks: ['sans-serif'] },
  { name: 'Noto Sans JP', fallbacks: ['sans-serif'] },
  { name: 'Noto Serif JP', fallbacks: ['serif'] },
  { name: 'Potta One', fallbacks: ['cursive'] },
  { name: 'Rampart One', fallbacks: ['cursive'] },
  { name: 'RocknRoll One', fallbacks: ['sans-serif'] },
  { name: 'Sawarabi Mincho', fallbacks: ['serif'] },
  { name: 'Train One', fallbacks: ['cursive'] },
  { name: 'Yuji Syuku', fallbacks: ['serif'] },
]

export const mergeFamilies = ({ name, fallbacks }: FontFamily): string => [`'${name}'`, ...fallbacks].join(',')
