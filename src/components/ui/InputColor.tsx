import { InputHTMLAttributes, VFC } from 'react'

type Props = {
  color: string
  onChange: InputHTMLAttributes<HTMLInputElement>['onChange']
}
export const InputColor: VFC<Props> = ({ color, onChange }) => {
  return <input type="color" value={color} onChange={onChange} className="w-32 h-8" />
}
