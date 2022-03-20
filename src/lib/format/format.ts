import type { ListEntry } from 'wordcloud'

import { stopWords } from './stopWords'

const removeStopWords = (l: string[]): string[] => l.filter((e) => !stopWords.includes(e))

export const countWords = (words: string[]): ListEntry[] =>
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

export const formatToken = (token: string[]): ListEntry[] => {
  const filtered = removeStopWords(token)
  return countWords(filtered)
}
