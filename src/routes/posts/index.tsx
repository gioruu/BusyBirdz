import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'

export const posts = [
   {
      id: 1,
      slug: 'my-trip-to-rome',
      title: "My Trip to Rome",
      date: "2024-01-15",
      excerpt: "Exploring the ancient ruins and enjoying authentic Italian cuisine in the Eternal City.",
      author: "John Smith",
      imageUrl: "/images/rome.jpg"
   },
   {
      id: 2,
      slug: 'venice-canals-adventure',
      title: "Venice Canals Adventure",
      date: "2024-01-10",
      excerpt: "Gondola rides, historic architecture, and getting lost in Venice's charming streets.",
      author: "Sarah Johnson",
      imageUrl: "/images/venice.jpg"
   },
   {
      id: 3,
      slug: 'tuscany-wine-tour',
      title: "Tuscany Wine Tour",
      date: "2024-01-05",
      excerpt: "Tasting the finest wines and exploring the rolling hills of the Italian countryside.",
      author: "Michael Brown",
      imageUrl: "/images/tuscany.jpg"
   }
]

export const Route = createFileRoute('/posts/')({
   component: RouteComponent,
})

function RouteComponent() {
   return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
         <h1 className="text-3xl font-bold mb-8">Travel Blog Posts</h1>
         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
               <Link
                  key={post.id}
                  to='/posts/$slug'
                  params={{
                     slug: post.slug
                  }}
               >
                  <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">

                     <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                     />
                     <div className="p-6">
                        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                        <p className="text-gray-600 text-sm mb-4">
                           By {post.author} on {new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: '2-digit',
                              day: '2-digit'
                           })}
                        </p>
                        <p className="text-gray-700 mb-4">{post.excerpt}</p>
                        <span
                           className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                           Read more →
                        </span>
                     </div>
                  </article>
               </Link>
            ))}
         </div>
      </div>
   )
}
