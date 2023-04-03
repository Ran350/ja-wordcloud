import { Navbar, SegmentedControl, type SegmentedControlItem } from '@mantine/core'
import { type ComponentProps, useState } from 'react'

import { StopWordNav as StopWordFormNav } from './StopWordFormNav/StopWordNav'
import { WCStyleFormNav } from './WCStyleFormNav/WCStyleNav'

type Props = {
  wcStyleFormProps: ComponentProps<typeof WCStyleFormNav>
  stopWordProps: ComponentProps<typeof StopWordFormNav>
}
export const AsideForm = ({ wcStyleFormProps, stopWordProps }: Props) => {
  type TabSelection = 'wcStyle' | 'stopWord'
  const [section, setSection] = useState<TabSelection>('wcStyle')

  const tab = {
    wcStyle: <WCStyleFormNav {...wcStyleFormProps} />,
    stopWord: <StopWordFormNav {...stopWordProps} />,
  }
  const controlData: (SegmentedControlItem & { value: TabSelection })[] = [
    { label: 'Style', value: 'wcStyle' },
    { label: 'Stop Word', value: 'stopWord' },
  ]

  return (
    // FIXME: heightを画面サイズのN倍で設定したい
    <Navbar px="xl" py="md" height={600} width={{ base: 300 }}>
      <Navbar.Section>
        <SegmentedControl
          value={section}
          onChange={(value: TabSelection) => setSection(value)}
          transitionTimingFunction="ease"
          fullWidth
          data={controlData}
        />
      </Navbar.Section>

      {tab[section]}
    </Navbar>
  )
}
