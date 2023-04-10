import { Navbar, SegmentedControl, type SegmentedControlItem } from '@mantine/core'
import { type ComponentProps, useState } from 'react'

import { StopWordForm } from './StopWordForm/StopWordForm'
import { WCStyleForm } from './WCStyleForm/WCStyleForm'

type Props = {
  stopWordProps: ComponentProps<typeof StopWordForm>
}
export const AsideNavbar = ({ stopWordProps }: Props) => {
  type TabSelection = 'wcStyle' | 'stopWord'
  const [section, setSection] = useState<TabSelection>('wcStyle')

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

      <form>
        {
          {
            wcStyle: <WCStyleForm />,
            stopWord: <StopWordForm {...stopWordProps} />,
          }[section]
        }
      </form>
    </Navbar>
  )
}
