import { Flex, Select, Text } from '@mantine/core'
import { forwardRef } from 'react'

import { fontFamilies } from '~/feature/font/fontFamily'
import { fontFamilySampleText } from '~/feature/font/sampleText'

type SelectItemProps = {
  label: string
  fontFamily: string
}
const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(function SelectItem(
  { label, fontFamily, ...others },
  ref,
) {
  return (
    <div ref={ref} {...others}>
      <Flex justify="space-between">
        <Text>{label}</Text>
        <Text sx={{ fontFamily }}>{fontFamilySampleText}</Text>
      </Flex>
    </div>
  )
})

type Props = {
  fontFamily: string
  onChange: (value: string) => void
}
export const FontFamilyField = ({ fontFamily, onChange }: Props) => {
  return (
    <Select
      label="フォント"
      placeholder="フォント"
      itemComponent={SelectItem}
      maxDropdownHeight={400}
      data={fontFamilies.map(({ name, fallbacks }) => ({
        value: name,
        label: name,
        fontFamily: [name, ...fallbacks].join(','),
      }))}
      defaultValue={fontFamily}
      onChange={onChange}
    />
  )
}
