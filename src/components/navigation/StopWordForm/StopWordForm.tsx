import { ActionIcon, Badge, Flex, Navbar, ScrollArea, Stack, Textarea, rem } from '@mantine/core'
import { getHotkeyHandler } from '@mantine/hooks'
import { IconX } from '@tabler/icons-react'
import { useState } from 'react'

import { ClearAllButton } from './ClearAllButton'
import { RegisterButton } from './RegisterButton'
import { ResetButton } from './ResetButton'

type Props = {
  stopWord: {
    list: string[]
    reset: () => void
    append: (...sws: string[]) => void
    remove: (index: number) => void
    setEmpty: () => void
  }
}
export const StopWordForm = ({ stopWord }: Props) => {
  const [text, setText] = useState('')

  const addStopWord = () => {
    const separated = text
      .split('\n')
      .filter((s) => s !== '')

      .filter((w) => !stopWord.list.includes(w))
    stopWord.append(...new Set(separated))
    setText('')
  }

  return (
    <>
      <Navbar.Section grow component={ScrollArea} mt="md">
        <Flex wrap="wrap" gap="xs">
          {stopWord.list.map((sw, i) => (
            <Badge
              key={sw}
              variant="outline"
              pr={3}
              rightSection={
                <ActionIcon size="xs" color="blue" radius="xl" variant="transparent">
                  <IconX size={rem(10)} />
                </ActionIcon>
              }
              onClick={() => stopWord.remove(i)}
            >
              {sw}
            </Badge>
          ))}
        </Flex>
      </Navbar.Section>

      <Navbar.Section mt="xl">
        <Stack>
          <Textarea
            label="ストップワード"
            description="改行区切りで複数のストップワードを追加できます"
            placeholder="新しいストップワード"
            radius="xl"
            minRows={1}
            autosize
            rightSectionWidth={42}
            rightSection={<RegisterButton onClick={addStopWord} />}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={getHotkeyHandler([['mod+Enter', addStopWord]])}
          />
          <Flex justify="space-between" gap={10}>
            <ResetButton onReset={stopWord.reset} />
            <ClearAllButton onClearAll={stopWord.setEmpty} />
          </Flex>
        </Stack>
      </Navbar.Section>
    </>
  )
}
