type Props = {
  sentence: string
  setSentence: React.Dispatch<React.SetStateAction<string>>
}
export const TextArea: React.VFC<Props> = ({ sentence, setSentence }) => {
  const onChange = (x: React.ChangeEvent<HTMLTextAreaElement>) => {
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
