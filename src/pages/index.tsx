import Head from 'next/head'
import { useState } from 'react'

import { Header } from '../components/Header'
import { TextArea } from '../components/TextArea'
import { Button } from '../components/ui/Button'
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
    <>
      <Head>
        <title>Japanese Wordcloud</title>
      </Head>

      <div className="w-full">
        <Header />

        <div className="flex justify-between h-[calc(100vh-3em)] w-full">
          <div className="mx-auto my-4 flex flex-col justify-between">
            <WC sentence={sentence} form={form} ranCount={ranCount} />

            <TextArea sentence={sentence} setSentence={setSentence} />
          </div>

          <div className="px-8 py-4 border border-gray-200 w-80 bg-gray-50 flex flex-col justify-between">
            <div className="pb-4 max-h-[600px] overflow-y-scroll">
              <FormArea form={form} setForm={setForm} />
            </div>

            <Button text="Run" onClick={onRun} />
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexPage
