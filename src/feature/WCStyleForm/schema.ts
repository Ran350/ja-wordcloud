import z from 'zod'

import { type Simplify } from '~/types/Simplify.type'

type Color = `#${string}`
const colorSchema = z.custom<Color>((v) => /#\d{6}/.test(v as Color))

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
  fontFamily: z.string(),
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
  colors: z.tuple([colorSchema, colorSchema, colorSchema]),
})

export type WcStyleType = Simplify<z.infer<typeof wcStyleSchema>>
