import { AppShell, Box, Button, Container, Flex, ScrollArea, Stack } from '@mantine/core'
import { useState } from 'react'

import { Header } from '../components/Header'
import { TextArea } from '../components/TextArea'
import { WC } from '../components/WC'
import { exampleSentence } from '../data/sentence'
import { initForm } from '../lib/form/initForm'

import { useForm } from '@mantine/form'
import { FormArea } from 'src/components/Form'
import { Form } from 'src/lib/form/index.type'

const IndexPage: React.VFC = () => {
  const { values: form, setFieldValue: setForm } = useForm<Form>({
    initialValues: initForm,
  })
  const [sentence, setSentence] = useState(exampleSentence)

  const [ranCount, setRanCount] = useState(0)
  const onRun = () => {
    setRanCount(ranCount + 1)
  }

  return (
    <AppShell padding="md" header={<Header />}>
      <Flex>
        <Container>
          <Box>
            <WC sentence={sentence} form={form} ranCount={ranCount} />
            <TextArea sentence={sentence} setSentence={setSentence} />
          </Box>
        </Container>

        <Stack spacing="sm">
          <ScrollArea h={450}>
            {/* FIXME: 高さ */}
            <FormArea form={form} setForm={setForm} />
          </ScrollArea>
          <Button size="md" color="green" onClick={onRun}>
            Run
          </Button>
        </Stack>
      </Flex>
    </AppShell>
  )
}

export default IndexPage
