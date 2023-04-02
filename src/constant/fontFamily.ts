import type { Form } from 'types/form.type'
import type { WCOptions } from 'types/WCOption.type'

type FontFamily = {
  name: string
  css: WCOptions['fontFamily']
}
export const fontFamilies: Record<Form['fontFamilyId'], FontFamily> = {
  '1': { name: 'Dela Gothic One ', css: 'font-dela_gothic_one' },
  '2': { name: 'DotGothic16', css: 'font-dot_gothic_16' },
  '3': { name: 'Hachi Maru Pop', css: 'font-hachi_maru_pop' },
  '4': { name: 'Kaisei Tokumin', css: 'font-kaisei_tokumin' },
  '5': { name: 'Kiwi Maru', css: 'font-kiwi_maru' },
  '6': { name: 'M PLUS 1', css: 'font-m_plus_1' },
  '7': { name: 'M PLUS Rounded 1c', css: 'font-m_plus_rounded_1c' },
  '8': { name: 'Mochiy Pop One', css: 'font-mochiy_pop_one' },
  '9': { name: 'Noto Sans JP', css: 'font-noto_sans_jp' },
  '10': { name: 'Noto Serif JP', css: 'font-noto_serif_jp' },
  '11': { name: 'Potta One', css: 'font-potta_one' },
  '12': { name: 'Rampart One', css: 'font-rampart_one' },
  '13': { name: 'RocknRoll One', css: 'font-rocknroll_one' },
  '14': { name: 'Sawarabi Mincho', css: 'font-sawarabi_mincho' },
  '15': { name: 'Train One', css: 'font-train_one' },
  '16': { name: 'Yuji Syuku', css: 'font-yuji_syu' },
}
