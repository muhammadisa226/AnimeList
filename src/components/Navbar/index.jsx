import Link from "next/link"
import InputSearch from "./InputSearch"
import UserActionBtn from "./UserActionBtn"

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex flex-col justify-between gap-2 p-4 md:items-center md:flex-row ">
        <Link href="/" className="text-2xl font-bold">
          ANIMELIST
        </Link>
        <InputSearch />
        <UserActionBtn />
      </div>
    </header>
  )
}
export default Navbar
