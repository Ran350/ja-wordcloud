import { ListItem } from './ListItem'
import type { ListItemProps } from './ListItem'

type Item = { id: string | number } & ListItemProps

type Props = {
  list: Item[]
}

export const List: React.VFC<Props> = ({ list }) => {
  return (
    <div role="listbox" className="w-full flex flex-col overflow-y-auto divide-y">
      {list.map(({ id, ...item }) => (
        <ListItem key={id} text1={item.text1} text2={item.text2} onClick={item.onClick} selected={item.selected} />
      ))}
    </div>
  )
}
