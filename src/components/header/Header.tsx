import { Anchor, Flex, Header as MHeader, Title } from '@mantine/core'

import { GithubIcon } from '../icon/GitHubIcon'

export const Header = () => {
  return (
    <MHeader height={60} p="xs">
      <Flex justify="space-between" align="center">
        <Title order={3}>
          <Anchor
            href="https://ran350.github.io/ja-wordcloud/"
            aria-label="Japanese WordCloud"
            color="gray.7"
            underline={false}
          >
            Japanese WordCloud
          </Anchor>
        </Title>
        <Anchor href="https://github.com/ran350/ja-wordcloud" aria-label="GitHub"></Anchor>
        <GithubIcon size={30} />
      </Flex>
    </MHeader>
  )
}
