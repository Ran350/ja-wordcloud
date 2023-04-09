import { AppShell, Button, Center, Flex, Stack } from '@mantine/core'
import { zodResolver } from '@mantine/form'
import { useState } from 'react'

import { Header } from '~/components/header/Header'
import { AsideNavbar } from '~/components/navigation/AsideNavbar'
import { TextArea } from '~/components/TextArea'
import { WC } from '~/components/WC'
import { useStopWord } from '~/feature/stopWord/useStopWord'
import { FormProvider, useForm } from '~/feature/wcStyleForm/context'
import { formValuesToWCOptions } from '~/feature/wcStyleForm/formValuesToWCOptions'
import { wcStyleSchema } from '~/feature/wcStyleForm/schema'

const exampleSentence = `吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。この書生というのは時々我々を捕えて煮て食うという話である。しかしその当時は何という考もなかったから別段恐しいとも思わなかった。ただ彼の掌に載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。掌の上で少し落ちついて書生の顔を見たのがいわゆる人間というものの見始であろう。この時妙なものだと思った感じが今でも残っている。第一毛をもって装飾されべきはずの顔がつるつるしてまるで薬缶だ。その後猫にもだいぶ逢ったがこんな片輪には一度も出会わした事がない。のみならず顔の真中があまりに突起している。そうしてその穴の中から時々ぷうぷうと煙を吹く。どうも咽せぽくて実に弱った。これが人間の飲む煙草というものである事はようやくこの頃知った。`

const IndexPage = () => {
  const form = useForm({
    initialValues: {
      fontFamilyId: '1',
      fontWeight: 'normal',
      // カラーパレット  #f4f7f7 > #8cd790 > #77af9c > #285943
      colors: ['#285943', '#77af9c', '#8cd790'],
      backgroundColor: '#f4f7f7',
      minSize: 0,
      gridSize: 10,
      drawMask: false,
      maskColor: '#555555',
      maskGapWidth: 20,
      minRotation: -90,
      maxRotation: 90,
      rotationSteps: 2,
      rotateRatio: 0.5,
      shape: 'circle',
    },
    validate: zodResolver(wcStyleSchema),
  })
  const stopWord = useStopWord()

  const [sentence, setSentence] = useState(exampleSentence)
  const [textAreaText, setTextAreaText] = useState(exampleSentence)
  const generateWordCloud = () => setSentence(textAreaText) // sentenceは遅延評価

  return (
    <FormProvider form={form}>
      <AppShell padding="md" header={<Header />} navbar={<AsideNavbar stopWordProps={{ stopWord }} />}>
        <Center>
          <Stack style={{ width: '800px' }}>
            <WC
              sentence={sentence}
              stopWordList={stopWord.list}
              wcOptions={formValuesToWCOptions(form.values)}
              magnification={50}
            />
            <TextArea placeholder={exampleSentence} onChangeText={setTextAreaText} />
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
