import { authUserSession } from "@/libs/auth"
import Image from "next/image"
import Link from "next/link"
const Page = async () => {
  const user = await authUserSession()
  return (
    <div className="flex flex-col items-center justify-center text-color-primary">
      <h5 className="text-2xl font-bold text-color-primary ">
        Welcome, {user?.name}
      </h5>
      <Image src={user?.image} alt={user?.name} width={350} height={350} />
      <div className="flex flex-wrap gap-4 py-8">
        <Link
          href="/users/dashboard/collection"
          className="px-4 py-3 text-xl font-bold bg-color-accent text-color-dark "
        >
          My Collection
        </Link>
        <Link
          href="/users/dashboard/comment"
          className="px-4 py-3 text-xl font-bold bg-color-accent text-color-dark "
        >
          My Comments
        </Link>
      </div>
    </div>
  )
}

export default Page
