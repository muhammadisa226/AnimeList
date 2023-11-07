import { authUserSession } from "@/libs/auth"
import Image from "next/image"
import { useRouter } from "next/navigation"
const Page = async () => {
  const user = await authUserSession()
  return (
    <div>
      <h3 className="text-color-primary">Dashboard</h3>
      <h3 className="text-color-primary">Welcome, {user?.name} </h3>
      <Image src={user?.image} alt={user?.name} width={350} height={350} />
    </div>
  )
}

export default Page
