import type { InputHTMLAttributes, VFC } from 'react'

type Props = {
  number?: number
  placeholder: string
  onChange: InputHTMLAttributes<HTMLInputElement>['onChange']
}
export const InputNumber: VFC<Props> = ({ number, placeholder, onChange }) => {
  return (
    <input
      type="number"
      value={number}
      onChange={onChange}
      placeholder={placeholder}
      className="m-0 border border-solid border-gray-300 rounded px-3 py-1.5 w-24 block
                form-control
                bg-white bg-clip-padding
                text-base font-normal text-gray-700
                transition ease-in-out
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    />
  )
}
