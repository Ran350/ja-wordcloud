export type Form = {
  fontFamilyId: string
  fontWeight: string
  colors: [string, string, string]
  backgroundColor: string
  minSize: number
  gridSize: number

  drawMask: boolean
  maskColor: string
  maskGapWidth: number

  minRotation: number
  maxRotation: number
  rotationSteps: number

  rotateRatio: number

  shape: string
}
