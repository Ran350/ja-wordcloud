import { VFC } from 'react'

import { url } from 'src/utils/config'

export type ListItemProps = {
  text1: {
    text: string
    fontFamily?: string
  }
  text2?: {
    text: string
    fontFamily?: string
  }
  onKeyPress: () => void
  selected: boolean
}
export const ListItem: VFC<ListItemProps> = ({ text1, text2, onKeyPress, selected }) => {
  return (
    <div
      role="option"
      tabIndex={0}
      aria-selected={true}
      className="px-4 py-2 flex
                cursor-pointer group select-none
                bg-gray-800 hover:bg-blue-600"
      onKeyPress={onKeyPress}
    >
      {selected && <img src={url('/icons/check.svg')} alt="selected" />}

      <span
        className={`text-sm text-gray-50 ${text1.fontFamily}
                    group-hover:text-white`}
      >
        {text1.text}
      </span>

      {text2 && (
        <span
          className={`ml-auto
                   text-gray-500 text-xs text-right
                   group-hover:text-white ${text2.fontFamily}`}
        >
          {text2.text}
        </span>
      )}
    </div>
  )
}
