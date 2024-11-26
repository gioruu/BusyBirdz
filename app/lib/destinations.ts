import type { Destination, SearchParams } from '../types'

// Simulated database
const destinations: Destination[] = [
   {
      id: '1',
      slug: 'tuscany-wine-tour',
      name: 'Tuscany Wine Tour',
      description: 'Experience the finest wines and cuisine in the heart of Italy',
      image: '/images/tuscany.jpg',
      region: 'Europe',
      duration: '7 days',
      difficulty: 'easy',
      price: 2499,
   },
   {
      id: '2',
      slug: 'machu-picchu-trek',
      name: 'Machu Picchu Trek',
      description: 'Hike the ancient Inca Trail to the lost city of Machu Picchu',
      image: '/images/machu-picchu.jpg',
      region: 'South America',
      duration: '10 days',
      difficulty: 'hard',
      price: 3299,
   },
   // Add more destinations as needed
]

export async function getDestinations(params?: SearchParams): Promise<Destination[]> {
   let filtered = [...destinations]

   if (!params) return destinations

   if (params.region) {
      filtered = filtered.filter(d => d.region === params.region)
   }
   if (params.duration) {
      filtered = filtered.filter(d => d.duration === params.duration)
   }
   if (params.difficulty) {
      filtered = filtered.filter(d => d.difficulty === params.difficulty)
   }

   // Implement pagination
   const itemsPerPage = 12
   const start = ((params.page || 1) - 1) * itemsPerPage
   const end = start + itemsPerPage

   return filtered.slice(start, end)
}

export async function getFeaturedDestinations(): Promise<Destination[]> {
   // In a real app, you might have a featured flag or use different criteria
   return destinations.slice(0, 4)
}

export async function getDestinationBySlug(slug: string): Promise<Destination | undefined> {
   return destinations.find(d => d.slug === slug)
} 