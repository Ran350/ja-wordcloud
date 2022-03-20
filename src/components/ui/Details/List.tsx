import type { VFC } from 'react'

import { ListItem } from './ListItem'
import type { ListItemProps } from './ListItem'

type Item = { id: string | number } & ListItemProps

type Props = {
  list: Item[]
}

export const List: VFC<Props> = ({ list }) => {
  return (
    <div role="listbox" className="z-10 w-full flex flex-col overflow-y-auto divide-y">
      {list.map(({ id, ...item }) => (
        <ListItem
          key={id}
          text1={item.text1}
          text2={item.text2}
          onKeyPress={() => item.onKeyPress()}
          selected={item.selected}
        />
      ))}
    </div>
  )
}
