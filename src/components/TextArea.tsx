import { ChangeEvent, Dispatch, SetStateAction, VFC } from 'react'

type Props = {
  sentence: string
  setSentence: Dispatch<SetStateAction<string>>
}

export const TextArea: VFC<Props> = ({ sentence, setSentence }) => {
  const onChange = (x: ChangeEvent<HTMLTextAreaElement>) => {
    const text = x.currentTarget.value
    setSentence(text)
  }

  return (
    <div className="my-2 flex justify-center">
      <textarea
        rows={5}
        onChange={onChange}
        placeholder={sentence}
        className="w-full px-3 py-1 border rounded-lg text-lg text-gray-700 focus:outline-none"
      />
    </div>
  )
}
