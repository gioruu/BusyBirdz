import { Link } from '@tanstack/react-router'

export function Header() {
   return (
      <header className="bg-white shadow-sm">
         <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
               <div className="flex">
                  <Link to="/" className="flex items-center">
                     <span className="text-xl font-bold">Travel Adventures</span>
                  </Link>
               </div>
               <div className="flex items-center space-x-4">
                  <Link
                     to="/destinations"
                     className="text-gray-700 hover:text-gray-900"
                  >
                     Destinations
                  </Link>
                  {/* Add more navigation items */}
               </div>
            </div>
         </nav>
      </header>
   )
} 