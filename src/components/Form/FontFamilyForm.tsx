import { Flex, Select, Text } from '@mantine/core'
import { forwardRef } from 'react'

import { fontFamilies } from 'src/lib/form/data/fontFamily'
import type { Form } from 'src/lib/form/index.type'

const data = Object.entries(fontFamilies).map(([_id, { name, css }]) => ({
  value: name,
  label: name,
  fontFamily: css,
}))

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
        <Text style={{ fontFamily }}>サンプル</Text>
      </Flex>
    </div>
  )
})

type Props = {
  form: Form
  setForm: React.Dispatch<React.SetStateAction<Form>>
}
export const FontFamilyForm: React.VFC<Props> = ({ form, setForm }) => {
  return (
    <Select
      label="font family"
      placeholder="font family"
      itemComponent={SelectItem}
      data={data}
      searchable
      maxDropdownHeight={400}
      value={form.fontFamilyId}
      onChange={(fontFamilyId) => {
        if (fontFamilyId === null) return
        setForm((prev) => ({ ...prev, fontFamilyId }))
      }}
    />
  )
}
