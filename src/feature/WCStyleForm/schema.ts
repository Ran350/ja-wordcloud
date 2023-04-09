import z from 'zod'

const colorSchema = z.custom((v) => /#.+/.test(v as string))

const fontWeightSchema = z.union([
  z.literal(100),
  z.literal(200),
  z.literal(300),
  z.literal(400),
  z.literal(500),
  z.literal(600),
  z.literal(700),
  z.literal(800),
  z.literal(900),
  z.literal('normal'),
  z.literal('bold'),
  z.literal('bolder'),
  z.literal('lighter'),
])

const shapeSchema = z.enum([
  'circle',
  'cardioid',
  'diamond',
  'square',
  'triangle-forward',
  'triangle',
  'pentagon',
  'star',
])

export const wcStyleSchema = z.object({
  fontFamilyId: z.string(),
  fontWeight: fontWeightSchema,
  backgroundColor: colorSchema,
  minSize: z.number(),
  gridSize: z.number(),
  drawMask: z.boolean(),
  maskGapWidth: z.number(),
  minRotation: z.number(),
  maxRotation: z.number(),
  rotationSteps: z.number(),
  rotateRatio: z.number(),
  shape: shapeSchema,
  maskColor: z.string(),
  colors: z.array(colorSchema).length(3),
})

export type WcStyleType = z.infer<typeof wcStyleSchema>
