type Props = {
  text: string
  onClick: () => void
  // TODO: disabled: boolean
}
export const Button: React.VFC<Props> = ({ text, onClick }) => {
  return (
    <button className="bg-green-700 p-2 rounded-md w-full text-xl text-white" onClick={onClick}>
      {text}
    </button>
  )
}
