import { Textarea } from '@mantine/core'

type Props = {
  sentence: string
  setSentence: (text: string) => void
}
export const TextArea: React.VFC<Props> = ({ sentence, setSentence }) => {
  const onChange = (x: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = x.currentTarget.value
    setSentence(text)
  }

  return (
    <div>
      <Textarea placeholder={sentence} autosize minRows={5} maxRows={8} onChange={onChange} />
    </div>
  )
}
