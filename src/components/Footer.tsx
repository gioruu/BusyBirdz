import { Link } from '@tanstack/react-router'

export function Footer() {
   return (
      <footer className="bg-gray-800 text-white">
         <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               <div>
                  <h3 className="text-lg font-semibold mb-4">About Us</h3>
                  <p className="text-gray-300">
                     Discover amazing destinations and create unforgettable memories with Travel Adventures.
                  </p>
               </div>
               <div>
                  <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                     <li>
                        <Link to="/" className="text-gray-300 hover:text-white">
                           Home
                        </Link>
                     </li>
                     <li>
                        <Link
                           to="/destinations"
                           search={{
                              region: 'italy',
                           }}
                           className="text-gray-300 hover:text-white"
                        >
                           Destinations
                        </Link>
                     </li>
                  </ul>
               </div>
               {/* Add more footer sections */}
            </div>
         </div>
      </footer>
   )
} 