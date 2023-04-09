import { Flex, Select, SelectProps, Text } from '@mantine/core'
import { forwardRef } from 'react'

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
        <Text sx={{ fontFamily }}>{label}</Text>
        <Text sx={{ fontFamily }}>{fontFamilySampleText}</Text>
      </Flex>
    </div>
  )
})

type Props = Required<Pick<SelectProps, 'data' | 'defaultValue' | 'onChange'>> & { fontFamily: string }
export const FontFamilySelect = ({ data, defaultValue, onChange, fontFamily }: Props) => {
  return (
    <Select
      label="フォント"
      placeholder="フォント"
      itemComponent={SelectItem}
      maxDropdownHeight={400}
      data={data}
      defaultValue={defaultValue}
      onChange={onChange}
      styles={(theme) => ({
        input: {
          fontFamily,
          color: theme.colors.gray,
        },
      })}
    />
  )
}
