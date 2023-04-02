import { ActionIcon, Flex, Image, Header as MHeader, Title } from '@mantine/core'

import { url } from 'utils/config'

export const Header: React.VFC = () => {
  const githubURL = 'https://github.com/ran350/ja-wordcloud'
  const githubIconSrc = url('/icons/GitHub.svg')

  return (
    <MHeader height={60} p="xs">
      <Flex justify="space-between" align="center">
        <Title order={3}>Japanese Word Cloud</Title>
        <ActionIcon variant="outline" size="lg" p={3} component="a" href={githubURL}>
          <Image src={githubIconSrc} />
        </ActionIcon>
      </Flex>
    </MHeader>
  )
}
