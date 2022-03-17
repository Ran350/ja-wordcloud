import { VFC } from 'react'

type Option = JSX.IntrinsicElements['option' | 'optgroup']
type Props = {
  children: Option | Option[]
}
export const Select: VFC<Props> = ({ children }) => {
  return (
    <select
      className="form-select appearance-none block
                m-0 border border-solid border-gray-300 rounded px-3 py-1.5 w-full
                text-base font-normal text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                transition ease-in-out
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      aria-label="Default select example"
    >
      {children}
    </select>
  )
}
