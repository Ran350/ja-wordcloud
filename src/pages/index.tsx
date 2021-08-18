import Head from 'next/head'
import { useState, VFC } from 'react'

import { TextArea } from '../components/TextArea'
import { WC } from '../components/WC'

const IndexPage: VFC = () => {
  const [token, setToken] = useState<string>('')

  return (
    <>
      <Head>
        <title>Wordcloud</title>
      </Head>

      <div className="min-h-screen relative flex justify-center">
        <div className="my-4 flex flex-col justify-between	">
          <header>
            <p className="text-center text-2xl text-gray-600">Word Cloud</p>
          </header>

          <WC token={token} />

          <TextArea setToken={setToken} />

          <div className="my-2 text-center text-lg text-gray-500">
            ©2021 Ran
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexPage
