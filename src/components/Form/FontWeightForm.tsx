import { Select } from '@mantine/core'

import { fontWeights } from 'src/lib/form/data/fontWeight'

type Props = {
  fontWeight: string
  onChange: (fontWeight: string) => void
}
export const FontWeightForm: React.VFC<Props> = (props) => {
  return (
    <Select
      label="font weight"
      placeholder="font weight"
      value={props.fontWeight}
      data={fontWeights.map((fw) => ({ value: `${fw}`, label: `${fw}` }))}
      onChange={props.onChange}
    />
  )
}
