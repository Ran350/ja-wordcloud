import { WCOptions } from '../types/WCOptions.type'

const getColor: WCOptions['color'] = (word, weight, fontSize) => {
  // カラーパレット  #f4f7f7 > #8cd790 > #77af9c > #285943
  if (fontSize >= 32) return '#285943'
  if (fontSize > 16) return '#77af9c'
  return '#8cd790'
}

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

export const defaultOption: WCOptions = {
  fontFamily: 'メイリオ',
  fontWeight: 'normal',
  color: getColor,
  backgroundColor: '#f4f7f7',
  minSize: 0,
  weightFactor: (size) => (size * 11) ** 1.1,
  gridSize: getGridSize(),

  drawMask: false,
  maskColor: '#aaa',
  maskGapWidth: undefined,

  minRotation: -90,
  maxRotation: 90,
  rotationSteps: 2,

  rotateRatio: 0.5,

  shape: 'circle',
}
