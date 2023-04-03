import type { generateWCOption } from '~/domain/WCOption/generateWCOption'
import type { Simplify } from '~/types/Simplify.type'

export type WCStyleForm = Simplify<Parameters<typeof generateWCOption>[0]>
