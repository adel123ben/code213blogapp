"use client";
import { SessionProvider } from "next-auth/react"


interface SessionProviderProps {
    children: React.ReactNode
}
export default function NextauthSesssionProvider({
  children
}: SessionProviderProps) {
  return (
    <div>
        <SessionProvider>
        {children}
        </SessionProvider>
    </div>
  )
}
