import { useEffect, useRef } from 'react'
import TinySegmenter from 'tiny-segmenter'

import { tokenToListEntry } from '../lib/format/format'

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
    const words = tokenToListEntry(segments)

    /* create word cloud */
    import('wordcloud').then(({ default: WordCloud }) => {
      // 動的importしているのは、wordcloud2.jsがwindow objectを参照しており、Next.jsがSSG/SSRできないため
      const options = translateForm2Options(form)
      if (ref.current === null) return
      WordCloud(ref.current, { list: words, ...options })
    })

    console.timeEnd('all')
  }, [ranCount]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <canvas ref={ref} id="canvas" width={16 * 40} height={9 * 40}></canvas>
    </>
  )
}
