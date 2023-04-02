import TinySegmenter from 'tiny-segmenter'

type Word = string
type Count = number
type Token = [Word, Count]

const separateWords = (sentence: string): string[] => {
  console.time('seg')
  const segmenter = new TinySegmenter()
  const segments = segmenter.segment(sentence)
  console.timeEnd('seg')
  return segments
}

const filterStopWords = (wordList: string[], stopWords: string[]): string[] => {
  return wordList.filter((e) => !stopWords.includes(e))
}

const countWords = (words: string[]): Token[] =>
  // ["word1", "word2", "word1"]
  // -> {"word1": 2, "word2", 1}
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

export const generateTokens = (sentence: string, stopWords: string[]): Token[] => {
  const segmented = separateWords(sentence)
  const filtered = filterStopWords(segmented, stopWords)
  return countWords(filtered)
}
