import { useForm } from '@mantine/form'

import type { WCStyleForm } from './WCStyleForm.type'

import { defaultForm } from '~/domain/WCStyleForm/defaultForm'

export const useWCStyleForm = () => {
  const { values: form, setFieldValue: setForm } = useForm<WCStyleForm>({
    initialValues: defaultForm,
  })
  return { form, setForm }
}
