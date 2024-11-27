import { Link } from '@tanstack/react-router'
import { Destination } from '../types'

export function DestinationCard(props: Destination) {
   return (
      <Link
         to="/destinations/$slug"
         search={{
            page: 1
         }}
         params={{ slug: props.slug }}
         className="group"
      >
         <div className="relative overflow-hidden rounded-lg">
            <img
               src={props.image}
               alt={props.name}
               className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
               <h3 className="text-white text-lg font-semibold">{props.name}</h3>
               <div className="flex items-center justify-between text-white">
                  <span>{props.duration}</span>
                  <span className="font-semibold">${props.price}</span>
               </div>
            </div>
         </div>
      </Link>
   )
} 