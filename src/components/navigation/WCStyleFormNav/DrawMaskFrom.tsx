import { Switch } from '@mantine/core'

type Props = {
  isDrawMask: boolean
  onToggle: () => void
}

export const DrawMaskFrom = (props: Props) => {
  return <Switch labelPosition="left" label="グリッドのマスク" checked={props.isDrawMask} onChange={props.onToggle} />
}
