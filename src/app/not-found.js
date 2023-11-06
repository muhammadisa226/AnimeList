"use client"

import { FileSearch } from "@phosphor-icons/react"
import Link from "next/link"
const Page = () => {
  return (
    <div className="flex items-center justify-center max-w-xl min-h-screen mx-auto">
      <div className="flex flex-col items-center justify-center gap-4">
        <FileSearch size={32} className="text-color-accent" />
        <h3 className="text-3xl font-bold text-color-accent">Page Not Found</h3>
        <Link
          href="/"
          className="underline transition-all text-color-primary hover:text-color-accent "
        >
          Back To Home
        </Link>
      </div>
    </div>
  )
}

export default Page
