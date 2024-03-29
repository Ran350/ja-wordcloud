import { AppShell, Button, Center, Flex, Stack, Textarea } from '@mantine/core'
import { useState } from 'react'

import { Header } from '~/components/header/Header'
import { AsideNavbar } from '~/components/navigation/AsideNavbar'
import { WC } from '~/components/WC'
import { useStopWord } from '~/feature/stopWord/useStopWord'
import { FormProvider, useWCStyleForm } from '~/feature/wcStyleForm/context'
import { formValuesToWCOptions } from '~/feature/wcStyleForm/formValuesToWCOptions'
import { segmentSentence } from '~/feature/wordSegment/generateTokens'

const exampleSentence = `吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。この書生というのは時々我々を捕えて煮て食うという話である。しかしその当時は何という考もなかったから別段恐しいとも思わなかった。ただ彼の掌に載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。掌の上で少し落ちついて書生の顔を見たのがいわゆる人間というものの見始であろう。この時妙なものだと思った感じが今でも残っている。第一毛をもって装飾されべきはずの顔がつるつるしてまるで薬缶だ。その後猫にもだいぶ逢ったがこんな片輪には一度も出会わした事がない。のみならず顔の真中があまりに突起している。そうしてその穴の中から時々ぷうぷうと煙を吹く。どうも咽せぽくて実に弱った。これが人間の飲む煙草というものである事はようやくこの頃知った。`

const IndexPage = () => {
  const form = useWCStyleForm()

  const stopWord = useStopWord()

  const [sentence, setSentence] = useState(exampleSentence)
  const [textAreaText, setTextAreaText] = useState(exampleSentence)
  const generateWordCloud = () => setSentence(textAreaText) // sentenceは遅延評価

  return (
    <FormProvider form={form}>
      <AppShell padding="md" header={<Header />} navbar={<AsideNavbar stopWordProps={{ stopWord }} />}>
        <Center>
          <Stack style={{ maxWidth: '100%', maxHeight: '100%' }}>
            <WC
              list={segmentSentence(sentence, stopWord.list)}
              styleOption={formValuesToWCOptions(form.values)}
              magnification={50}
            />

            <Textarea
              placeholder={exampleSentence}
              autosize
              minRows={4}
              maxRows={5}
              onChange={(x) => setTextAreaText(x.target.value)}
            />

            <Flex justify="flex-end">
              <Button size="md" color="green.9" onClick={generateWordCloud}>
                生成する
              </Button>
            </Flex>
          </Stack>
        </Center>
      </AppShell>
    </FormProvider>
  )
}

export default IndexPage
