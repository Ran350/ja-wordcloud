import { VFC } from 'react'

type Props = {
  text: string
  onClick: () => void
}
export const Button: VFC<Props> = ({ text, onClick }) => {
  return (
    <button
      className="bg-green-700 p-2 rounded-md w-24 text-xl text-white"
      onClick={onClick}
    >
      {text}
    </button>
  )
}
