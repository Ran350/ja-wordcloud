import { AppShell, Button, Center, Flex, Stack } from '@mantine/core'
import { useState } from 'react'

import { AsideForm } from '~/components/AsideForm'
import { Header } from '~/components/Header'
import { TextArea } from '~/components/TextArea'
import { WC } from '~/components/WC'
import { exampleSentence } from '~/constant/sentence'
import { useStopWord } from '~/domain/stopWord/useStopWord'
import { useWCStyleForm } from '~/domain/WCStyleForm/useWCStyleForm'

const IndexPage = () => {
  const { form, setForm } = useWCStyleForm()
  const { stopWordList, resetStopWord, appendStopWord, removeStopWord, setEmptyStopWord } = useStopWord()

  const [sentence, setSentence] = useState(exampleSentence)
  const [textAreaText, setTextAreaText] = useState(exampleSentence)
  const generateWordCloud = () => setSentence(textAreaText) // sentenceは遅延評価

  return (
    <AppShell
      padding="md"
      header={<Header />}
      navbar={
        <AsideForm
          wcStyleFormProps={{ form, setForm }}
          stopWordProps={{
            stopWordList,
            resetStopWord,
            appendStopWord,
            removeStopWord,
            setEmptyStopWord,
          }}
        />
      }
    >
      <Center>
        <Stack style={{ width: '800px' }}>
          <WC sentence={sentence} stopWordList={stopWordList} wcStyleOption={form} magnification={50} />
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
