import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  )
  const response2 = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  )
  const topAnime = await response.json()
  const NewAnime = await response2.json()
  return (
    <div>
      <section>
        <Header title="Top Anime" linkHref="/populer" linkTitle="See All" />
        <AnimeList api={topAnime} />
      </section>
    </div>
  )
}
export default Page
