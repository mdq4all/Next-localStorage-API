"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Navbar() {

    const router = useRouter()

  return (
    <nav className="flex justify-evenly bg-slate-600 text-gray-200 p-4">
       <Link href="/" className="text-xl font-bold">Task App</Link>
      <button onClick={() => router.push('/new') }>Add task</button>
    </nav>
  )
}
