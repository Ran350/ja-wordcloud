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

export const getGridSize = (): number | undefined => {
  const canvas = getCanvas()
  if (canvas === undefined) {
    return
  }
  return Math.round((16 * canvas.width) / 1024)
}
