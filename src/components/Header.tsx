import { Anchor, Flex, Header as MHeader, Title } from '@mantine/core'

import { url } from 'src/utils/config'

export const Header: React.VFC = () => {
  const githubURL = 'https://github.com/ran350/ja-wordcloud'
  const githubIconURL = githubURL + url('/icons/GitHub.svg')

  return (
    <MHeader height={60} p="xs">
      <Flex align="center" justify="space-between">
        <Title order={2}>Japanese Word Cloud</Title>
        <Anchor href={githubURL} target="_blank">
          <img src={githubIconURL} alt="GitHub" />
        </Anchor>
      </Flex>
    </MHeader>
  )
}
