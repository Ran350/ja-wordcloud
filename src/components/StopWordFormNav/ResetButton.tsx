import { Button, Center, Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export const ResetButton = ({ onReset }: { onReset: () => void }) => {
  const [opened, { open, close }] = useDisclosure(false)
  const onClick = () => {
    onReset()
    close()
  }
  return (
    <>
      <Button compact fullWidth variant="outline" color="gray" onClick={open}>
        Reset
      </Button>
      <Modal opened={opened} onClose={close} title="Confirm">
        Are you sure you want to reset stop words?
        <Center mt="lg">
          <Button variant="filled" color="red" onClick={onClick}>
            RESET
          </Button>
        </Center>
      </Modal>
    </>
  )
}
