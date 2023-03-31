import type { ListEntry } from 'wordcloud'

import { stopWords } from './stopWords'

const filterStopWords = (l: string[]): string[] => l.filter((e) => !stopWords.includes(e))

const countWords = (words: string[]): ListEntry[] =>
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

export const tokenToListEntry = (token: string[]): ListEntry[] => {
  const filtered = filterStopWords(token)
  return countWords(filtered)
}
