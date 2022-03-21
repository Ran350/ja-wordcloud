type Props = {
  number?: number
  onChange: (num: number) => void
  placeholder?: string
  min?: number
  // TODO: disabled?: boolean
}
export const InputNumber: React.VFC<Props> = ({ number, onChange, placeholder, min = 0 }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    if (value < min) {
      return
    }
    onChange(value)
  }

  return (
    <input
      type="number"
      value={number}
      onChange={handleChange}
      placeholder={placeholder}
      className="m-0 border border-solid border-gray-300 rounded px-3 py-1.5 w-1/2 block
                form-control
                bg-white bg-clip-padding
                text-base font-normal text-gray-700
                transition ease-in-out
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    />
  )
}
