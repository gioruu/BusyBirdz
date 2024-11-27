import { z } from 'zod'

export interface Destination {
   id: string
   slug: string
   name: string
   description: string
   image: string
   region: string
   duration: string
   difficulty: string
   price: number
   // Add other fields as needed
}

export const searchSchema = z.object({
   region: z.string().optional(),
   duration: z.string().optional(),
   difficulty: z.string().optional(),
   page: z.number().optional().catch(1)
})

export type SearchParams = z.infer<typeof searchSchema>