import { useEffect, useRef } from 'react'

import { generateWCOption } from '~/domain/WCOption/getWCOption'
import { generateTokens } from '~/domain/wordSegment/generateTokens'
import type { WCStyleForm } from '~/types/form.type'

type Props = {
  sentence: string
  stopWordList: string[]
  wcStyleOption: WCStyleForm
  magnification: number
}
export const WC: React.VFC<Props> = ({ sentence, stopWordList, wcStyleOption, magnification }) => {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const token = generateTokens(sentence, stopWordList)
    import('wordcloud').then(({ default: WordCloud }) => {
      // 動的importしているのは、wordcloud2.jsがwindow objectを参照しており、Next.jsがSSG/SSRできないため
      if (ref.current === null) return
      WordCloud(ref.current, { list: token, ...generateWCOption(wcStyleOption) })
    })
  }, [sentence, wcStyleOption, stopWordList])

  return (
    <>
      <canvas ref={ref} id="canvas" width={16 * magnification} height={9 * magnification}></canvas>
    </>
  )
}
