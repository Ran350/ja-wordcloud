import { useEffect, useRef } from 'react'
import TinySegmenter from 'tiny-segmenter'

import { formatToken } from '../lib/format/format'

import type { Form } from 'src/lib/form/index.type'
import { translateForm2Option as translateForm2Options } from 'src/lib/translateForm2Option'

type Props = {
  sentence: string
  form: Form
  ranCount: number
}
export const WC: React.VFC<Props> = ({ sentence, form, ranCount }) => {
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
        const options = translateForm2Options(form)
        WordCloud(ref.current, { list: words, ...options })
        console.log(options)
      }
    })

    console.timeEnd('all')
  }, [ranCount]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="my-2">
      <canvas ref={ref} id="canvas" width="800" height="500"></canvas>
    </div>
  )
}
