import { Flex, Header as MHeader } from '@mantine/core'

import { url } from 'src/utils/config'

export const Header: React.VFC = () => {
  const githubURL = 'https://github.com/ran350/ja-wordcloud'
  const githubIconURL = githubURL + url('/icons/GitHub.svg')

  return (
    <MHeader height={60} p="xs">
      <Flex align="center" justify="space-between">
        <p>Japanese Word Cloud</p>
        <a href={githubURL}>
          <img src={githubIconURL} alt="GitHub" />
        </a>
      </Flex>
    </MHeader>
  )
}
