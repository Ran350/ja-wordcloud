import { InputHTMLAttributes, VFC } from 'react'

type Props = {
  color: string
  onChange: InputHTMLAttributes<HTMLInputElement>['onChange']
  // TODO: disabled?: boolean
}
export const InputColor: VFC<Props> = ({ color, onChange }) => {
  return <input type="color" value={color} onChange={onChange} className="block w-1/2 h-8" />
}
