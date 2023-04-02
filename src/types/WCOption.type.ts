// REFACTOR: Omit<WordCloud.Options, 'list'> ⊃ WCOptions であるかを保証したい
export type WCOptions = {
  /**
   * Presentation
   */
  /* フォント */
  // fontFamily?: 'ヒラギノ角ゴ ProN W3' | 'メイリオ' | 'sans-serif'
  // FIXME
  fontFamily: string

  /* フォントの太さ */
  // fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 'normal' | 'bold' | 'bolder' | 'lighter'
  // FIXME
  fontWeight: number | string

  /* 色 */
  color?:
    | 'random-dark'
    | 'random-light'
    | string
    | ((word: string, weight: string | number, fontSize: number) => string)

  /* 最小のフォントサイズ */
  minSize?: number

  /* フォントサイズに乗算する値 */
  weightFactor?: number | ((weight: number) => number)

  /* 背景色 */
  backgroundColor: string

  /**
   * Dimension
   */
  // 単語間の距離
  gridSize?: number

  /*
   * Mask
   */
  /* グリッドに色を付けてマスクする */
  drawMask: boolean

  /* マスクの色 */
  maskColor: string

  /* マスクグリッドの間隔 */
  maskGapWidth?: number

  /*
   * Rotation
   */
  /* 単語の最小回転角（rad） */
  minRotation: number

  /* 単語の最大回転角（rad） */
  maxRotation: number

  /* 最小角〜最大角を n 分割した角を使用する  */
  rotationSteps?: number

  /*
   * Randomness
   */
  /* 単語が回転する確率（0 〜 1） */
  rotateRatio?: number

  /*
   * Shape
   */
  // クラウドの形状
  // shape: 'circle' | 'cardioid' | 'diamond' | 'square' | 'triangle-forward' | 'triangle' | 'pentagon' | 'star'
  // FIXME
  shape: string
}
