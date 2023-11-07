import { getAnimeResponse } from "@/libs/api"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
const Page = async ({ params }) => {
  const { keyword } = params
  const decodedKeyword = decodeURI(keyword)
  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)
  return (
    <div>
      <section>
        <Header title={`Search For ${decodedKeyword}`} />
        <AnimeList api={searchAnime} />
      </section>
    </div>
  )
}
export default Page
