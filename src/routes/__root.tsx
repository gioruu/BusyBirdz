import {
   Outlet,
   ScrollRestoration,
   createRootRoute,
} from '@tanstack/react-router'
import { Meta, Scripts } from '@tanstack/start'
import type { ReactNode } from 'react'
import { NotFound } from 'src/components/NotFound'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import '@/styles/app.css'

export const Route = createRootRoute({
   head: () => ({
      meta: [
         {
            charSet: 'utf-8',
         },
         {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
         },
         {
            name: 'description',
            content: 'Discover amazing travel experiences around the world',
         },
         {
            property: 'og:type',
            content: 'website',
         },
      ],
   }),
   component: RootComponent,
   notFoundComponent: NotFound,
})

function RootComponent() {
   return (
      <RootDocument>
         <div className='min-h-screen flex flex-col mx-auto'>
            <Header />
            <main className="grow">
               <Outlet />
            </main>
            <Footer />
         </div>
      </RootDocument>
   )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
   return (
      <html lang="en">
         <head>
            <Meta />
         </head>
         <body>
            {children}
            <ScrollRestoration />
            <Scripts />
         </body>
      </html>
   )
}