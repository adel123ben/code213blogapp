/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cKhlKmwDcKh
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react";
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import SearchDialog from "./search-dialog";
import { Heart } from "lucide-react";

export default function Navrbar() {
    const session = useSession();
  return (
    <header className="flex h-16 w-full shrink-0 items-center px-4 md:px-6">
      <Link className="mr-6" href="#">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="flex-1">
        <ul className="flex items-center justify-center space-x-4">
          <li className="font-semibold">
            <Link
              className="&quot;text-sm transition-colors hover:underline underline-2:color-rose-600 underline-2:dark:color-rose-300&quot;"
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="font-semibold">
            <Link
              className="&quot;text-sm transition-colors hover:underline underline-2:color-rose-600 underline-2:dark:color-rose-300&quot;"
              href="/blog"
            >
              Products
            </Link>
          </li>
          <li className="font-semibold">
            <Link
              className="&quot;text-sm transition-colors hover:underline underline-2:color-rose-600 underline-2:dark:color-rose-300&quot;"
              href="/profile"
            >
              Profile
            </Link>
          </li>
          <li className="font-semibold">
            <Link
              className="&quot;text-sm transition-colors hover:underline underline-2:color-rose-600 underline-2:dark:color-rose-300&quot;"
              href="/cart"
            >
            
              <Heart className="w-5 h-5 hover:scale-100 transition" />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="ml-auto flex items-center space-x-4">
     
             <DropdownMenu>
             <DropdownMenuTrigger asChild>
               <Button
                 className="rounded-full border-2 border-gray-300 border-50 hover:border-gray-900 hover:border-gray-950 dark:border-gray-700 dark:hover:border-gray-300"
                 size="icon"
                 variant="ghost"
               >
                 <span className="sr-only">Toggle user menu</span>
                 <UserIcon className="w-5 h-5" />
               </Button>
             </DropdownMenuTrigger>
             <DropdownMenuContent align="end">
             {session && session.status === "authenticated" ? (
              <>
               <DropdownMenuItem>My Account</DropdownMenuItem>
               <DropdownMenuItem>Settings</DropdownMenuItem>
               <DropdownMenuSeparator />
               <DropdownMenuItem onClick={() => signOut()}>logout</DropdownMenuItem>
              </>
             ):<DropdownMenuItem>
             <Link href="/auth/login">
               Login
            </Link>
            </DropdownMenuItem>  }
               
             </DropdownMenuContent>
           </DropdownMenu>
         
       <SearchDialog/>
      </div>
    </header>
  )
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
