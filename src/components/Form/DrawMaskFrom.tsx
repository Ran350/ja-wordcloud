import { Switch } from '@mantine/core'

import type { Form } from 'src/types/form.type'

type Props = {
  isDrawMask: boolean
  onToggle: () => void
}

export const DrawMaskFrom: React.VFC<Props> = (props) => {
  return <Switch labelPosition="left" label="draw mask" checked={props.isDrawMask} onChange={props.onToggle} />
}
