import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/start'

const fetchPostBySlug = createServerFn({ method: 'GET' })
   .validator((data: { slug: string }) => {
      return typeof data.slug === 'string'
   })
   .handler(({ data }) => {
      const post = {
         id: 1,
         slug: 'my-trip-to-rome',
         title: "My Trip to Rome",
         date: "2024-01-15",
         excerpt: "Exploring the ancient ruins and enjoying authentic Italian cuisine in the Eternal City.",
         author: "John Smith",
         imageUrl: "/images/rome.jpg",
         body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
         
         Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
      }
      return post
   })

export const Route = createFileRoute('/posts/$slug')({
   component: RouteComponent,
   loader: ({ params }) => {
      const post = fetchPostBySlug({
         data: {
            slug: params.slug
         }
      })
      return post
   }
})

function RouteComponent() {
   const post = Route.useLoaderData()

   return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
         <article>
            <header className="mb-8">
               <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
               />
               <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
               <div className="text-gray-600">
                  By {post.author} on {new Date(post.date).toLocaleDateString('en-US', {
                     year: 'numeric',
                     month: 'long',
                     day: 'numeric'
                  })}
               </div>
            </header>

            <div className="prose prose-lg max-w-none">
               {post.body.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="mb-4">{paragraph}</p>
               ))}
            </div>
         </article>
      </div>
   )
}
