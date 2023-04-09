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
        初期化する
      </Button>
      <Modal opened={opened} onClose={close} title="確認">
        ストップワードの登録を初期化しますか？
        <Center mt="lg">
          <Button variant="filled" color="red" onClick={onClick}>
            初期化する
          </Button>
        </Center>
      </Modal>
    </>
  )
}
