import { useListState } from '@mantine/hooks'

import { defaultStopWords } from '~/feature/stopWord/defaultStopWords'

export const useStopWord = () => {
  const [list, handler] = useListState(defaultStopWords)
  const reset = () => handler.setState(defaultStopWords)
  const append = handler.append
  const remove = (index: number) => handler.remove(index)
  const setEmpty = () => handler.setState([])

  return {
    list,
    reset,
    append,
    remove,
    setEmpty,
  }
}
