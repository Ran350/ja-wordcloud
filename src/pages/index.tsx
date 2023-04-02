import { AppShell, Button, Container, Flex, Stack } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useState } from 'react'

import { AsideForm } from 'components/AsideForm'
import { Header } from 'components/Header'
import { TextArea } from 'components/TextArea'
import { WC } from 'components/WC'
import { defaultForm } from 'constant/defaultForm'
import { defaultStopWords } from 'constant/defaultStopWords'
import { exampleSentence } from 'constant/sentence'
import type { WCStyleForm } from 'types/form.type'

const useWordCloud = () => {
  const { values: form, setFieldValue: setForm } = useForm<WCStyleForm>({
    initialValues: defaultForm,
  })
  const [stopWordList, setStopWordList] = useState(defaultStopWords)
  const [sentence, setSentence] = useState(exampleSentence)

  return { form, setForm, stopWordList, setStopWordList, sentence, setSentence }
}

const IndexPage: React.VFC = () => {
  const { form, setForm, stopWordList, setStopWordList, sentence, setSentence } = useWordCloud()

  const [textAreaText, setTextAreaText] = useState(exampleSentence)
  const generateWordCloud = () => setSentence(textAreaText) // sentenceは遅延評価

  const resetStopWord = () => setStopWordList(defaultStopWords)

  return (
    <AppShell
      padding="md"
      header={<Header />}
      navbar={
        <AsideForm
          wcStyleFormProps={{ form, setForm }}
          stopWordProps={{ stopWordList, onChangeStopWordList: setStopWordList, onClickReset: resetStopWord }}
        />
      }
    >
      <Container>
        <Stack style={{ width: '800px' }}>
          <WC sentence={sentence} stopWordList={stopWordList} wcStyleOption={form} magnification={50} />
          <TextArea placeholder={exampleSentence} onChangeText={setTextAreaText} />
          <Flex justify="flex-end">
            <Button size="md" color="green" onClick={generateWordCloud}>
              Generate
            </Button>
          </Flex>
        </Stack>
      </Container>
    </AppShell>
  )
}

export default IndexPage
