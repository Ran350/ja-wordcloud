import { stopWords } from './stopWords'

export type Token = [string, number][]

const removeStopWords = (l: Token) => l.filter((e) => !stopWords.includes(e[0]))

export const format = (token: string): Token =>
  // "word1 word2 word1"
  // -> ["word1", "word2", "word1"]
  // -> {"word1": 2, "word2", 1}
  // -> [["word1", 2], ["word2", 1]]

  Object.entries(
    token
      .split(' ')
      .reduce<Record<string, number>>(
        (count, word) => ({ ...count, [word]: (count[word] ?? 0) + 1 }),
        {},
      ),
  )

export const formatToken = (token: string): Token =>
  removeStopWords(format(token))
