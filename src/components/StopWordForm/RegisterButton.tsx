import { ActionIcon, Center, Code, Popover, Space, Text, useMantineTheme } from '@mantine/core'
import { useDisclosure, useOs } from '@mantine/hooks'
import { IconArrowRight } from '@tabler/icons-react'

export const RegisterButton = ({ onClick }: { onClick: () => void }) => {
  const theme = useMantineTheme()
  const os = useOs()
  const [opened, { close, open }] = useDisclosure(false)

  return (
    <Popover width={100} position="top" withArrow shadow="md" opened={opened}>
      <Popover.Target>
        <ActionIcon
          size={32}
          radius="xl"
          color={theme.primaryColor}
          variant="filled"
          onMouseEnter={open}
          onMouseLeave={close}
          onClick={onClick}
        >
          <IconArrowRight size="1.1rem" stroke={1.5} />
        </ActionIcon>
      </Popover.Target>

      <Popover.Dropdown sx={{ pointerEvents: 'none' }} style={{ backgroundColor: theme.colors.gray[1] }}>
        <Text size="sm">Add stop word</Text>
        <Center>
          <Code color="gray">{os === 'macos' ? '⌘' : 'Ctrl'}</Code>
          <Space w="xs" />
          <Code>Enter</Code>
        </Center>
      </Popover.Dropdown>
    </Popover>
  )
}
