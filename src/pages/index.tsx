import Head from 'next/head'
import { useState, VFC } from 'react'

import { OptionSettingArea } from '../components/OptionSettingArea'
import { TextArea } from '../components/TextArea'
import { Button } from '../components/ui/Button'
import { WC } from '../components/WC'
import { defaultOption } from '../data/defaultOption'
import { exampleSentence } from '../data/sentence'

const IndexPage: VFC = () => {
  const [ranCount, setRanCount] = useState(0)
  const [option, setOption] = useState(defaultOption)
  const [sentence, setSentence] = useState(exampleSentence)

  return (
    <>
      <Head>
        <title>Japanese Wordcloud</title>
      </Head>

      <div className="min-h-screen relative flex justify-center">
        <div className="w-full">
          <header className="px-6 py-2 border-b border-gray-200 flex justify-between">
            <p className="text-2xl text-gray-600">Japanese Word Cloud</p>
            <a href="https://github.com/ran350/web-wordcloud">
              <img
                src="https://icongr.am/devicon/github-original.svg?size=8&color=currentColor"
                alt="GitHub"
                className="w-8 h-full align-middle"
              />
            </a>
          </header>

          <div className="flex justify-between">
            <div className="mx-auto">
              <WC sentence={sentence} option={option} ranCount={ranCount} />

              <TextArea sentence={sentence} setSentence={setSentence} />
            </div>

            <div className="p-12 w-96 bg-gray-50">
              <OptionSettingArea option={option} setOption={setOption} />
              <Button text="Run" onClick={() => setRanCount(ranCount + 1)} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexPage
