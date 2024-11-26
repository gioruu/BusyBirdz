// routes/api/try-me.ts
import { createAPIFileRoute } from '@tanstack/start/api'

export const Route = createAPIFileRoute('/api/try-me')({
   GET: async ({ request }) => {
      return new Response('Hello, World! from ' + request.url)
   },
   POST: async ({ request }) => {
      const body = await request.json()

      const falseCondition = true
      if (!falseCondition) {
         return new Response('Body not found', {
            status: 404
         })
      }

      return new Response(JSON.stringify({
         requestBody: body,
         response: {
            message: 'You rock',
         },
         timestamp: new Date(),
      }), {
         status: 200,
         headers: {
            'Content-Type': 'application/json',
         }
      })
   }
})
