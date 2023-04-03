import { ColorInput, Stack } from '@mantine/core'

type Colors = {
  color: string
  onChange: (color: string) => void
}
type Props = {
  colors: Colors[]
}
export const FontColorForm: React.VFC<Props> = (props) => {
  return (
    <Stack spacing="xs">
      {props.colors.map(({ color, onChange }, i) => (
        <ColorInput
          key={i}
          label={i === 0 ? 'font color' : undefined}
          value={color}
          color={color}
          onChange={onChange}
        />
      ))}
    </Stack>
  )
}
