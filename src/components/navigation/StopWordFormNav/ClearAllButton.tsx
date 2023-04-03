import { Button, Center, Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export const ClearAllButton = ({ onClearAll }: { onClearAll: () => void }) => {
  const [opened, { open, close }] = useDisclosure(false)
  const onClick = () => {
    onClearAll()
    close()
  }
  return (
    <>
      <Button compact fullWidth variant="outline" color="gray" onClick={open}>
        Clear All
      </Button>
      <Modal opened={opened} onClose={close} title="Confirm">
        Are you sure you want to clear all stop words?
        <Center mt="lg">
          <Button variant="filled" color="red" onClick={onClick}>
            Clear All
          </Button>
        </Center>
      </Modal>
    </>
  )
}
