import Header from "@/components/Dashboard/Header"
import { authUserSession } from "@/libs/auth"
import prisma from "@/libs/prisma"
import Image from "next/image"
import Link from "next/link"
const Page = async () => {
  const user = await authUserSession()
  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  })
  return (
    <section className="w-full px-4 mt-4">
      <Header title="My Collection" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {collection.map((collect, index) => {
          return (
            <Link
              href={`/anime/${collect.anime_mal_Id}`}
              className="relative border-2 border-color-accent"
              key={index}
            >
              <Image
                src=""
                alt=""
                width={350}
                height={350}
                className="w-full"
              ></Image>
              <div className="absolute bottom-0 flex items-center justify-center w-full h-16 bg-color-accent">
                <h5 className="text-xl text-center">{collect.anime_mal_Id}</h5>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Page
