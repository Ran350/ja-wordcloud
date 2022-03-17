import { useRef, VFC } from 'react'
import { useEffect } from 'react'
import TinySegmenter from 'tiny-segmenter'

import { WCOptions } from '../types/WCOptions.type'
import { formatToken } from '../lib/format/format'

type Props = {
  sentence: string
  option: WCOptions
  ranCount: number
}

export const WC: VFC<Props> = ({ sentence, option, ranCount }) => {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // word segmentation
    const segmenter = new TinySegmenter()
    const segments = segmenter.segment(sentence)

    // remove stop words
    const words = formatToken(segments)
    console.log(ranCount, words, option)

    // create word cloud
    import('wordcloud').then(({ default: WordCloud }) => {
      if (ref.current !== null) {
        WordCloud(ref.current, { list: words, ...option })
      }
    })
  }, [ranCount])

  return (
    <div className="my-2">
      <canvas ref={ref} id="canvas" width="800" height="500"></canvas>
    </div>
  )
}
