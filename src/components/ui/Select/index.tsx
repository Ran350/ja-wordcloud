import { ChangeEvent, VFC } from 'react'

type Option = JSX.IntrinsicElements['option' | 'optgroup']
type Props = {
  onChange: (value: string) => void
  children: Option | Option[]
  // TODO: disabled?: boolean
}
export const Select: VFC<Props> = ({ onChange, children }) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value)
  }

  return (
    <select
      onChange={handleChange}
      onBlur={() => undefined}
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
