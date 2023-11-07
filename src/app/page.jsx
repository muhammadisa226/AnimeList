import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduceData,
} from "@/libs/api"
const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let recommendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  )

  recommendedAnime = reproduceData(recommendedAnime, 10)
  return (
    <div>
      <section>
        <Header title="Popular Anime" linkHref="/popular" linkTitle="See All" />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Recommended Anime" />
        <AnimeList api={recommendedAnime} />
      </section>
    </div>
  )
}
export default Page
