import { Link, useRouter } from '@tanstack/react-router'

interface PaginationProps {
   currentPage: number
}

export function Pagination({ currentPage }: PaginationProps) {
   const router = useRouter()
   {/* @ts-expect-error */ }
   const { search } = router.state

   const createPageLink = (page: number) => ({
      ...search,
      page: page.toString(),
   })

   return (
      <div className="flex justify-center space-x-2 mt-8">
         {currentPage > 1 && (
            <Link
               to="/destinations"
               search={createPageLink(currentPage - 1)}
               className="px-4 py-2 border rounded hover:bg-gray-50"
            >
               Previous
            </Link>
         )}
         <Link
            to="/destinations"
            search={createPageLink(currentPage + 1)}
            className="px-4 py-2 border rounded hover:bg-gray-50"
         >
            Next
         </Link>
      </div>
   )
} 