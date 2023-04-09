import { createFormContext, zodResolver } from '@mantine/form'

import { WcStyleType, wcStyleSchema } from './schema'

const [FormProvider, useFormContext, useMForm] = createFormContext<WcStyleType>()

const useWCStyleForm = () => {
  return useMForm({
    initialValues: {
      fontFamilyId: '1',
      fontWeight: 'normal',
      // カラーパレット  #f4f7f7 > #8cd790 > #77af9c > #285943
      colors: ['#285943', '#77af9c', '#8cd790'],
      backgroundColor: '#f4f7f7',
      minSize: 0,
      gridSize: 10,
      drawMask: false,
      maskColor: '#555555',
      maskGapWidth: 20,
      minRotation: -90,
      maxRotation: 90,
      rotationSteps: 2,
      rotateRatio: 0.5,
      shape: 'circle',
    },
    validate: zodResolver(wcStyleSchema),
  })
}

export { FormProvider, useWCStyleForm, useFormContext }
