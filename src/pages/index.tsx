import { AppShell, Button, Center, Flex, Stack } from '@mantine/core'
import { useState } from 'react'

import { Header } from '~/components/header/Header'
import { AsideForm } from '~/components/navigation/AsideForm'
import { TextArea } from '~/components/TextArea'
import { WC } from '~/components/WC'
import { exampleSentence } from '~/constant/sentence'
import { useStopWord } from '~/feature/stopWord/useStopWord'
import { useWCStyleForm } from '~/feature/WCStyleForm/useWCStyleForm'

const IndexPage = () => {
  const { form, setForm } = useWCStyleForm()
  const stopWord = useStopWord()

  const [sentence, setSentence] = useState(exampleSentence)
  const [textAreaText, setTextAreaText] = useState(exampleSentence)
  const generateWordCloud = () => setSentence(textAreaText) // sentenceは遅延評価

  return (
    <AppShell
      padding="md"
      header={<Header />}
      navbar={<AsideForm wcStyleFormProps={{ form, setForm }} stopWordProps={{ stopWord }} />}
    >
      <Center>
        <Stack style={{ width: '800px' }}>
          <WC sentence={sentence} stopWordList={stopWord.list} wcStyleOption={form} magnification={50} />
          <TextArea placeholder={exampleSentence} onChangeText={setTextAreaText} />
          <Flex justify="flex-end">
            <Button size="md" color="green" onClick={generateWordCloud}>
              Generate
            </Button>
          </Flex>
        </Stack>
      </Center>
    </AppShell>
  )
}

export default IndexPage
