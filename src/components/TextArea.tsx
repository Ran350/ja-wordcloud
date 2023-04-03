import { Textarea } from '@mantine/core'

type Props = {
  placeholder: string
  onChangeText: (text: string) => void
}
export const TextArea: React.VFC<Props> = ({ placeholder, onChangeText }) => {
  const onChange = (x: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChangeText(x.currentTarget.value)
  }

  return (
    <>
      <Textarea placeholder={placeholder} autosize minRows={4} maxRows={5} onChange={onChange} />
    </>
  )
}
