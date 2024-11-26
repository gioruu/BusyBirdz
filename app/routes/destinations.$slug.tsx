import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/start'
import { getDestinationBySlug } from '../lib/destinations'

const getDestination = createServerFn({
   method: 'GET',
   // @ts-expect-error
}).handler(async ({ params }: { params: { slug: string } }) => {
   return getDestinationBySlug(params.slug)
})

export const Route = createFileRoute('/destinations/$slug')({
   component: DestinationPage,
   loader: async ({ params }) => {
      // @ts-expect-error
      const destination = await getDestination({ params })
      if (!destination) throw new Error('Destination not found')
      return { destination }
   },
   head: ({ loaderData }) => ({
      // @ts-expect-error
      title: `${loaderData.destination.name} | Travel Adventures`,
      meta: [
         {
            name: 'description',
            // @ts-expect-error
            content: loaderData.destination.description,
         },
         {
            property: 'og:image',
            // @ts-expect-error
            content: loaderData.destination.image,
         },
      ],
   }),
})

function DestinationPage() {
   const { destination } = Route.useLoaderData()

   return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
         <header className="destination-hero mb-8">
            <h1 className="text-4xl font-bold mb-4">{destination.name}</h1>
            <img
               src={destination.image}
               alt={destination.name}
               className="w-full h-96 object-cover rounded-lg"
            />
         </header>

         <section className="destination-details mb-8">
            <div className="grid grid-cols-3 gap-4 mb-4">
               <div>
                  <h3 className="font-semibold">Duration</h3>
                  <p>{destination.duration}</p>
               </div>
               <div>
                  <h3 className="font-semibold">Difficulty</h3>
                  <p className="capitalize">{destination.difficulty}</p>
               </div>
               <div>
                  <h3 className="font-semibold">Price</h3>
                  <p>${destination.price}</p>
               </div>
            </div>
            <p className="text-lg">{destination.description}</p>
         </section>

         <section className="booking-widget bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Book This Trip</h2>
            <button
               type="button"
               className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
               Check Availability
            </button>
         </section>
      </div>
   )
} 