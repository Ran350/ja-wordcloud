import { Flex, Select, Text } from '@mantine/core'
import { forwardRef } from 'react'

import { fontFamilies } from '~/constant/fontFamily'
import type { WCStyleForm } from '~/feature/WCStyleForm/WCStyleForm.type'

type SelectItemProps = {
  label: string
  css: string
}
const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(function SelectItem({ label, css, ...others }, ref) {
  return (
    <div ref={ref} {...others}>
      <Flex justify="space-between">
        <Text>{label}</Text>
        <Text sx={{ fontFamily: css }}>サンプル</Text>
      </Flex>
    </div>
  )
})

type Props = {
  fontFamilyId: WCStyleForm['fontFamilyId']
  onChange: (value: string) => void
}
export const FontFamilyForm = ({ fontFamilyId, onChange }: Props) => {
  return (
    <Select
      label="font family"
      placeholder="font family"
      itemComponent={SelectItem}
      maxDropdownHeight={400}
      data={Object.entries(fontFamilies).map(([id, { name, css }]) => ({
        value: id,
        label: name,
        fontFamily: css,
      }))}
      defaultValue={fontFamilyId}
      onChange={onChange}
    />
  )
}
