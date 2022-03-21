type Props = {
  text: string
}
export const Label: React.VFC<Props> = ({ text }) => {
  return <label className="pr-6 text-lg text-gray-700">{text}</label>
}
