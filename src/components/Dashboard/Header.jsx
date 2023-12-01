"use client"
import { ArrowSquareLeft } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
const Header = ({ title }) => {
  const router = useRouter()
  const handleBack = (event) => {
    event.preventDefault()
    router.back()
  }
  return (
    <div className="flex items-center justify-between mb-4">
      <button onClick={handleBack} className="text-white text-color-primary ">
        <ArrowSquareLeft size={32} />
      </button>
      <h3 className="text-2xl font-bold text-color-primary">{title}</h3>
    </div>
  )
}

export default Header
