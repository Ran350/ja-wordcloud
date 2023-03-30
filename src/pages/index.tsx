import { AppShell, Button, Container, Flex } from '@mantine/core'
import { useState } from 'react'

import { Header } from '../components/Header'
import { TextArea } from '../components/TextArea'
import { WC } from '../components/WC'
import { exampleSentence } from '../data/sentence'
import { initForm } from '../lib/form/initForm'

import { FormArea } from 'src/components/Form'

const IndexPage: React.VFC = () => {
  const [form, setForm] = useState(initForm)
  const [sentence, setSentence] = useState(exampleSentence)

  const [ranCount, setRanCount] = useState(0)
  const onRun = () => {
    setRanCount(ranCount + 1)
  }

  return (
    <AppShell padding="md" header={<Header />}>
      <Flex>
        <Container>
          <WC sentence={sentence} form={form} ranCount={ranCount} />
          <TextArea sentence={sentence} setSentence={setSentence} />
        </Container>

        <Container size="xl">
          <FormArea form={form} setForm={setForm} />
          <Button onClick={onRun}>Run</Button>
        </Container>
      </Flex>
    </AppShell>
  )
}

export default IndexPage
