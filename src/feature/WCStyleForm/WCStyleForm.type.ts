import type { generateWCOption } from '~/feature/WCOption/generateWCOption'
import type { Simplify } from '~/types/Simplify.type'

export type WCStyleForm = Simplify<Parameters<typeof generateWCOption>[0]>
