import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  VFC,
} from 'react'

import type { tokenize } from '../lib/tokenizer/pkg/tokenizer'

type Props = {
  setToken: Dispatch<SetStateAction<string>>
}

export const TextArea: VFC<Props> = ({ setToken }) => {
  const tokenizeRef = useRef<typeof tokenize>()

  useEffect(() => {
    import('../lib/tokenizer/pkg/tokenizer').then(({ tokenize }) => {
      tokenizeRef.current = tokenize
    })
  }, [])

  const handleOnChange = (x: ChangeEvent<HTMLTextAreaElement>) => {
    const tokenize = tokenizeRef.current

    if (tokenize === undefined) {
      return
    }

    const separated = tokenize(x.target.value)
    setToken(separated)
  }

  return (
    <div className="my-2 flex justify-center">
      <textarea
        rows={5}
        onChange={(e) => handleOnChange(e)}
        placeholder="Enter the sentence to generate the Word Cloud"
        className="w-full px-3 py-1 border rounded-lg text-lg text-gray-700 focus:outline-none"
      />
    </div>
  )
}
