import { createFormContext } from '@mantine/form'

import { WcStyleType } from '~/feature/wcStyleForm/schema'

const [FormProvider, useFormContext, useForm] = createFormContext<WcStyleType>()

export { FormProvider, useFormContext, useForm }
