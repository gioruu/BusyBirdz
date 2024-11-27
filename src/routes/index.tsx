import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

// Database simulato di località italiane
const LOCATIONS = [
   'Roma, Lazio',
   'Milano, Lombardia',
   'Firenze, Toscana',
   'Venezia, Veneto',
   'Napoli, Campania',
   'Bologna, Emilia-Romagna',
   'Palermo, Sicilia',
   'Verona, Veneto'
]

export const Route = createFileRoute('/')({
   component: RouteComponent,
})

function RouteComponent() {
   const [searchTerm, setSearchTerm] = useState('')

   useEffect(() => {
      console.log('searchTerm', searchTerm);
   }, [searchTerm]);

   const handleSearch = (value: string) => {
      setSearchTerm(value)
   }

   const filteredLocations = searchTerm
      ? LOCATIONS.filter(location =>
         location.toLowerCase().includes(searchTerm.toLowerCase())
      )
      : []

   return (
      <div>
         <div className="relative min-h-[500px] flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10 text-center px-4">
               <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Discover Your Next Adventure
               </h1>
               <p className="text-xl text-white/90 mb-8">
                  Search through thousands of destinations worldwide
               </p>
               <div className="max-w-xl mx-auto relative">
                  <select
                     value={searchTerm}
                     onChange={(e) => handleSearch(e.target.value)}
                     className="w-full px-6 py-4 rounded-lg text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                     <option value="">Select a destination...</option>
                     {LOCATIONS.map((location, index) => (
                        <option key={index} value={location}>
                           {location}
                        </option>
                     ))}
                  </select>
                  {searchTerm && (
                     <Link
                        to="/destinations"
                        search={{
                           region: searchTerm.split(',')[0].trim(),
                        }}
                        className="block mt-4 px-6 py-3 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
                     >
                        View destinations in {searchTerm.split(',')[0].trim()}
                     </Link>
                  )}
               </div>
            </div>
         </div>
         <div className='custom-css'>
            Some title
         </div>
      </div>
   )
}
