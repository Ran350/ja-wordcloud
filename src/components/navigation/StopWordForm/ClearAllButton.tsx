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
        すべて削除する
      </Button>
      <Modal opened={opened} onClose={close} title="確認">
        ストップワードをすべて削除しますか？
        <Center mt="lg">
          <Button variant="filled" color="red" onClick={onClick}>
            すべて削除する
          </Button>
        </Center>
      </Modal>
    </>
  )
}
