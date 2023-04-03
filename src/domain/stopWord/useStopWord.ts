import { useListState } from '@mantine/hooks'

import { defaultStopWords } from '~/domain/stopWord/defaultStopWords'

export const useStopWord = () => {
  const [stopWordList, handler] = useListState(defaultStopWords)
  const resetStopWord = () => handler.setState(defaultStopWords)
  const appendStopWord = handler.append
  const removeStopWord = (index: number) => handler.remove(index)
  const setEmptyStopWord = () => handler.setState([])

  return {
    stopWordList,
    resetStopWord,
    appendStopWord,
    removeStopWord,
    setEmptyStopWord,
  }
}
