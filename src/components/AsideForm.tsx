import { Navbar, SegmentedControl, type SegmentedControlItem } from '@mantine/core'
import { type ComponentProps, useState } from 'react'

import { StopWordForm } from './StopWordForm/StopWordForm'
import { WCStyleForm } from './WCStyleForm/WCStyleForm'

type Props = {
  wcStyleFormProps: ComponentProps<typeof WCStyleForm>
  stopWordProps: ComponentProps<typeof StopWordForm>
}
export const AsideForm: React.VFC<Props> = ({ wcStyleFormProps, stopWordProps }) => {
  type TabSelection = 'wcStyle' | 'stopWord'
  const [section, setSection] = useState<TabSelection>('wcStyle')

  const tab = {
    wcStyle: <WCStyleForm {...wcStyleFormProps} />,
    stopWord: <StopWordForm {...stopWordProps} />,
  }
  const controlData: (SegmentedControlItem & { value: TabSelection })[] = [
    { label: 'Style', value: 'wcStyle' },
    { label: 'Stop Word', value: 'stopWord' },
  ]

  return (
    <Navbar px="xl" py="md" height={700} width={{ base: 300 }}>
      <Navbar.Section>
        <SegmentedControl
          value={section}
          onChange={(value: TabSelection) => setSection(value)}
          transitionTimingFunction="ease"
          fullWidth
          data={controlData}
        />
      </Navbar.Section>

      {/* <Navbar.Section grow component={ScrollArea} mt="md"> */}
      {tab[section]}
      {/* </Navbar.Section> */}
    </Navbar>
  )
}
