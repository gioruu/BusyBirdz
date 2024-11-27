import { useRouter } from '@tanstack/react-router'
import { Route as DestinationsRoute } from '../routes/destinations'

const regions = ['Europe', 'Asia', 'Africa', 'North America', 'South America', 'Oceania']
const durations = ['3-5 days', '7 days', '10 days', '14+ days']
const difficulties = ['easy', 'moderate', 'hard']

export function DestinationFilters() {
   const router = useRouter()
   const { search } = DestinationsRoute.useLoaderData()

   const handleFilterChange = (key: string, value: string) => {
      router.navigate({
         to: '/destinations',
         search: {
            ...search,
            [key]: value,
            page: 1, // Reset to first page when filters change
         },
      })
   }

   return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
         <select
            value={search.region as string || ''}
            onChange={(e) => handleFilterChange('region', e.target.value)}
            className="border rounded p-2"
         >
            <option value="">All Regions</option>
            {regions.map((region) => (
               <option key={region} value={region}>
                  {region}
               </option>
            ))}
         </select>

         <select
            value={search.duration as string || ''}
            onChange={(e) => handleFilterChange('duration', e.target.value)}
            className="border rounded p-2"
         >
            <option value="">All Durations</option>
            {durations.map((duration) => (
               <option key={duration} value={duration}>
                  {duration}
               </option>
            ))}
         </select>

         <select
            value={search.difficulty as string || ''}
            onChange={(e) => handleFilterChange('difficulty', e.target.value)}
            className="border rounded p-2"
         >
            <option value="">All Difficulties</option>
            {difficulties.map((difficulty) => (
               <option key={difficulty} value={difficulty}>
                  {difficulty}
               </option>
            ))}
         </select>
      </div>
   )
} 