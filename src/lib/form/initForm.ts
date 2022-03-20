import { Form } from './index.type'

export const initForm: Form = {
  fontFamilyId: '1',
  fontWeight: 'normal',
  // カラーパレット  #f4f7f7 > #8cd790 > #77af9c > #285943
  colors: ['#285943', '#77af9c', '#8cd790'],
  backgroundColor: '#f4f7f7',
  minSize: 0,
  gridSize: 50,

  drawMask: false,
  maskColor: '#555555',
  maskGapWidth: 20,

  minRotation: -90,
  maxRotation: 90,
  rotationSteps: 2,

  rotateRatio: 0.5,

  shape: 'circle',
}
