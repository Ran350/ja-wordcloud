import { ActionIcon, Badge, Flex, Navbar, ScrollArea, Stack, Textarea, rem } from '@mantine/core'
import { getHotkeyHandler } from '@mantine/hooks'
import { IconX } from '@tabler/icons-react'
import { useState } from 'react'

import { ClearAllButton } from './ClearAllButton'
import { RegisterButton } from './RegisterButton'
import { ResetButton } from './ResetButton'

const BudgeXButton = (
  <ActionIcon size="xs" color="blue" radius="xl" variant="transparent">
    <IconX size={rem(10)} />
  </ActionIcon>
)

type Props = {
  stopWordList: string[]
  onChangeStopWordList: (sw: string[]) => void
  onClickReset: () => void
}
export const StopWordForm: React.VFC<Props> = ({ stopWordList, onChangeStopWordList, onClickReset }) => {
  const [text, setText] = useState('')

  const addStopWord = () => {
    const separated = text
      .split('\n')
      .filter((s) => s !== '')

      .filter((w) => !stopWordList.includes(w))
    onChangeStopWordList([...stopWordList, ...new Set(separated)])
    setText('')
  }
  const removeStopWord = (index: number) => {
    const removed = stopWordList.filter((_, i) => index !== i)
    onChangeStopWordList(removed)
  }

  const clearAll = () => onChangeStopWordList([])

  return (
    <>
      <Navbar.Section grow component={ScrollArea} mt="md">
        <Flex wrap="wrap" gap="xs">
          {stopWordList.map((sw, i) => (
            <Badge key={sw} variant="outline" pr={3} rightSection={BudgeXButton} onClick={() => removeStopWord(i)}>
              {sw}
            </Badge>
          ))}
        </Flex>
      </Navbar.Section>

      <Navbar.Section mt="xl">
        <Stack>
          <Textarea
            label="Stop Word"
            description="改行区切りで複数のstop wordを一括挿入できます"
            placeholder="new stop word"
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
            <ResetButton removeAllStopWord={onClickReset} />
            <ClearAllButton clearAll={clearAll} />
          </Flex>
        </Stack>
      </Navbar.Section>
    </>
  )
}
