import { useEffect, useRef } from 'react'
import { ListEntry } from 'wordcloud'

import { type WCOptions } from '~/feature/WCOptions/WCOptions.type'

type Props = {
  list: ListEntry[]
  styleOption: WCOptions
  magnification: number
}
export const WC = ({ list, styleOption, magnification }: Props) => {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    import('wordcloud').then(({ default: WordCloud }) => {
      // 動的importしているのは、wordcloud2.jsがwindow objectを参照しており、Next.jsがSSG/SSRできないため
      if (ref.current === null) return
      WordCloud(ref.current, { list, ...styleOption })
    })
  }, [list, styleOption])

  return (
    <>
      <canvas ref={ref} id="canvas" width={16 * magnification} height={9 * magnification}></canvas>
    </>
  )
}
