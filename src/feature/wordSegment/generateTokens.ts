import TinySegmenter from 'tiny-segmenter'

const segment = (sentence: string): string[] => {
  const segmenter = new TinySegmenter()
  const segments = segmenter.segment(sentence)
  return segments
}

const filterStopWords = (wordList: string[], stopWords: string[]): string[] => {
  return wordList.filter((e) => !stopWords.includes(e))
}

const countWords = (words: string[]): [string, number][] =>
  // ["word1", "word2", "word1"]
  // -> { "word1": 2, "word2": 1 }
  // -> [["word1", 2], ["word2", 1]]

  Object.entries(
    words.reduce<Record<string, number>>(
      (count, word) => ({
        ...count,
        [word]: (count[word] ?? 0) + 1,
      }),
      {},
    ),
  )

export const segmentSentence = (sentence: string, stopWords: string[]): [string, number][] => {
  const segmented = segment(sentence)
  const filtered = filterStopWords(segmented, stopWords)
  return countWords(filtered)
}
