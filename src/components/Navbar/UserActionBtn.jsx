import Link from "next/link"
import { authUserSession } from "@/libs/auth"
const UserActionBtn = async () => {
  const user = await authUserSession()
  const actionLabel = user ? "Sign Out" : "Sign In"
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"
  return (
    <div className="flex justify-between gap-2">
      {user ? (
        <Link href="/users/dashboard" className="px-4 ">
          Dashboard
        </Link>
      ) : null}
      <Link
        href={actionURL}
        className="px-4 rounded-full bg-color-dark text-color-primary hover:bg-color-secondary hover:text-color-accent"
      >
        {actionLabel}
      </Link>
    </div>
  )
}
export default UserActionBtn
