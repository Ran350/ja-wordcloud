type Props = {
  color: string
  onChange: React.InputHTMLAttributes<HTMLInputElement>['onChange']
  // TODO: disabled?: boolean
}
export const InputColor: React.VFC<Props> = ({ color, onChange }) => {
  return <input type="color" value={color} onChange={onChange} className="block w-1/2 h-8" />
}
