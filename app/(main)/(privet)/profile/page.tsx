"use client";
import { useSession } from "next-auth/react";

export default function Profile() {
    const session = useSession();
  return (
    // @ts-ignore
    <div>Welcome, {session.data?.user?.data?.username}</div>
  )
}
