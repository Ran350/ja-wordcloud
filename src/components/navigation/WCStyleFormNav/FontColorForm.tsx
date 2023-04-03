import { ColorInput, Stack } from '@mantine/core'

type Colors = {
  color: string
  onChange: (color: string) => void
}
type Props = {
  colors: Colors[]
}
export const FontColorForm = (props: Props) => {
  return (
    <Stack spacing="xs">
      {props.colors.map(({ color, onChange }, i) => (
        <ColorInput
          key={i}
          label={i === 0 ? 'フォントの色' : undefined}
          value={color}
          color={color}
          onChangeEnd={onChange}
        />
      ))}
    </Stack>
  )
}
