import { useEffect, useRef } from 'react'

import { type WCOptions } from '~/feature/WCOptions/WCOptions.type'
import { generateTokens } from '~/feature/wordSegment/generateTokens'

type Props = {
  sentence: string
  stopWordList: string[]
  wcOptions: WCOptions
  magnification: number
}
export const WC = ({ sentence, stopWordList, wcOptions, magnification }: Props) => {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const token = generateTokens(sentence, stopWordList)
    import('wordcloud').then(({ default: WordCloud }) => {
      // 動的importしているのは、wordcloud2.jsがwindow objectを参照しており、Next.jsがSSG/SSRできないため
      if (ref.current === null) return
      WordCloud(ref.current, { list: token, ...wcOptions })
    })
  }, [sentence, stopWordList, wcOptions])

  return (
    <>
      <canvas ref={ref} id="canvas" width={16 * magnification} height={9 * magnification}></canvas>
    </>
  )
}
