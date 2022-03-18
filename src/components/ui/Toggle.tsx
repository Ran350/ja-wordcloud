import type { VFC } from 'react'

type Props = {
  checked: boolean
  onChange: () => void
  // TODO: disabled?: boolean
}
export const Toggle: VFC<Props> = ({ checked, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} className="peer sr-only" />
      <span
        className="block w-16 cursor-pointer bg-gray-500 rounded-full p-1 
                peer-checked:bg-blue-500
                after:block after:h-6 after:w-6 after:rounded-full after:bg-white after:transition 
                peer-checked:after:translate-x-[calc(130%)]"
      ></span>
    </label>
  )
}
