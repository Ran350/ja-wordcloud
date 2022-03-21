import { url } from 'src/utils/config'

export type ListItemProps = {
  text1: {
    display: string
    fontFamily?: string
  }
  text2?: {
    display: string
    fontFamily?: string
  }
  onClick: () => void
  selected: boolean
}
export const ListItem: React.VFC<ListItemProps> = ({ text1, text2, onClick, selected }) => {
  return (
    <button
      type="button"
      className="pr-3 py-2 w-full flex
                cursor-pointer group select-none
                bg-gray-800 hover:bg-blue-600"
      onClick={onClick}
    >
      <span className="mx-2 w-4 text-center">{selected && <img src={url('/icons/check.svg')} alt="selected" />}</span>

      <span
        className={`text-sm text-gray-50 ${text1.fontFamily}
                    group-hover:text-white`}
      >
        {text1.display}
      </span>

      {text2 && (
        <span
          className={`ml-auto
                   text-gray-500 text-xs text-right
                   group-hover:text-white ${text2.fontFamily}`}
        >
          {text2.display}
        </span>
      )}
    </button>
  )
}
