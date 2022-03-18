import { InputWCOptions } from './WCOptions.type'

const getCanvas = (): HTMLCanvasElement | undefined => {
  if (typeof document === 'undefined') {
    return
  }
  const canvas = document.getElementById('canvas') as HTMLCanvasElement
  if (canvas === null) {
    throw new Error('canvas not found')
  }
  return canvas
}

const getGridSize = (): number | undefined => {
  const canvas = getCanvas()
  if (canvas === undefined) {
    return
  }
  return Math.round((16 * canvas.width) / 1024)
}

export const defaultOption: InputWCOptions = {
  fontFamily: 'メイリオ',
  fontWeight: 'normal',
  // カラーパレット  #f4f7f7 > #8cd790 > #77af9c > #285943
  colors: ['#285943', '#77af9c', '#8cd790'],
  backgroundColor: '#f4f7f7',
  minSize: 0,
  weightFactor: (size) => (size * 11) ** 1.1,
  gridSize: getGridSize(),

  drawMask: false,
  maskColor: '#555555',
  maskGapWidth: undefined,

  minRotation: -90,
  maxRotation: 90,
  rotationSteps: 2,

  rotateRatio: 0.5,

  shape: 'circle',
}
