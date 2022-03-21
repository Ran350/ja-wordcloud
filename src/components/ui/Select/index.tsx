type Value = string | number
type Props = {
  value: Value
  options: Array<{
    key: React.Key
    value: Value
  }>
  onChange: (value: string) => void
  // TODO: disabled?: boolean
}
export const Select: React.VFC<Props> = ({ value, options, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value)
  }

  if (typeof value !== 'string') {
    return <></>
  }

  return (
    <select
      value={value}
      onChange={handleChange}
      onBlur={handleChange}
      className="form-select appearance-none block
                m-0 border border-solid border-gray-300 rounded px-3 py-1.5 w-full
                text-base font-normal text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                transition ease-in-out
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      aria-label="Default select example"
    >
      {options.map(({ key, value }) => (
        <option key={key} value={value}>
          {value}
        </option>
      ))}
    </select>
  )
}
