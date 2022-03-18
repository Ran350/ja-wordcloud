import { useRef, VFC } from 'react'
import { useEffect } from 'react'
import TinySegmenter from 'tiny-segmenter'

import { formatToken } from '../lib/format/format'
import { getWCOptions } from '../lib/WCOption'
import { InputWCOptions } from '../lib/WCOption/WCOptions.type'

type Props = {
  sentence: string
  option: InputWCOptions
  ranCount: number
}

export const WC: VFC<Props> = ({ sentence, option, ranCount }) => {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    console.time('all')

    /* word segmentation */
    console.time('seg')
    const segmenter = new TinySegmenter()
    const segments = segmenter.segment(sentence)
    console.timeEnd('seg')

    /* remove stop words */
    const words = formatToken(segments)

    /* create word cloud */
    import('wordcloud').then(({ default: WordCloud }) => {
      if (ref.current !== null) {
        WordCloud(ref.current, { list: words, ...getWCOptions(option) })
        console.log(getWCOptions(option))
      }
    })

    console.timeEnd('all')
  }, [ranCount])

  return (
    <div className="my-2">
      <canvas ref={ref} id="canvas" width="800" height="500"></canvas>
    </div>
  )
}
