import { DestinationCard } from '@/components/DestinationCard'
import { DestinationFilters } from '@/components/DestinationFilters'
import { Pagination } from '@/components/Pagination'
import { getDestinations } from '@/lib/destinations'
import { SearchParams, searchSchema } from '@/types'
import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/start'

const searchDestinations = createServerFn({ method: 'GET' })
   .validator((data: SearchParams) => searchSchema.parse(data))
   .handler(async ({ data }) => {
      const destinations = getDestinations(data)
      return destinations
   })

export const Route = createFileRoute('/destinations/')({
   component: DestinationsPage,
   validateSearch: searchSchema.parse,
   loaderDeps: ({ search }) => search,
   loader: async (args) => {
      console.log('loader args ###', args)
      const { deps } = args

      const destinations = await searchDestinations({ data: deps })

      return {
         destinations,
         search: deps,
      }
   },
   head: ({ match }) => {
      const { search } = match

      return {
         title: `${search.region || 'All Destinations'} | Travel Adventures`,
         meta: [
            {
               name: 'description',
               content: `Explore our ${search.region || ''} travel destinations. Find the perfect trip for your next adventure.`,
            },
         ],
      }
   },
})

function DestinationsPage() {
   const { destinations, search } = Route.useLoaderData()

   return (
      <div>
         <section className="">
            <DestinationFilters />
         </section>

         <section className="my-12">
            {destinations.map((destination) => (
               <DestinationCard key={destination.id} {...destination} />
            ))}
         </section>

         <Pagination currentPage={search.page || 1} />
      </div>
   )
}
