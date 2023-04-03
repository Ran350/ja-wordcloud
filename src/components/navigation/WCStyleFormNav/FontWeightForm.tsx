import { Select } from '@mantine/core'

import { fontWeights } from '~/constant/fontWeight'

type Props = {
  fontWeight: string
  onChange: (fontWeight: string) => void
}
export const FontWeightForm = (props: Props) => {
  return (
    <Select
      label="フォントの太さ"
      placeholder="フォントの太さ"
      value={props.fontWeight}
      data={fontWeights.map((fw) => ({ value: `${fw}`, label: `${fw}` }))}
      onChange={props.onChange}
    />
  )
}
