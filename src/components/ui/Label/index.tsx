import type { VFC } from 'react'

type Props = {
  text: string
}
export const Label: VFC<Props> = ({ text }) => {
  return <label className="pr-6 text-lg text-gray-700">{text}</label>
}
