import { getAnimeResponse } from "@/libs/api"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`)

  return (
    <>
      <div className="px-4 pt-4">
        <h3 className="text-2xl text-color-primary">
          {anime.data.title} - {anime.data.year}
        </h3>
        <div className="flex gap-2 px-4 pt-4 overflow-x-auto text-color-primary">
          <div className="flex flex-col items-center justify-center p-2 border rounded w-36 border-color-primary">
            <h3>Rank</h3>
            <p>{anime.data.rank}</p>
          </div>
          <div className="flex flex-col items-center justify-center p-2 border rounded w-36 border-color-primary">
            <h3>Score</h3>
            <p>{anime.data.score}</p>
          </div>
          <div className="flex flex-col items-center justify-center p-2 border rounded w-36 border-color-primary">
            <h3>Members</h3>
            <p>{anime.data.members}</p>
          </div>
          <div className="flex flex-col items-center justify-center p-2 border rounded w-36 border-color-primary">
            <h3>Episode</h3>
            <p>{anime.data.episodes}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 px-4 pt-4 text-color-primary sm:flex-nowrap">
          <Image
            src={anime.data.images.webp.image_url}
            width={250}
            height={250}
            alt={anime.data.images.jpg.image_url}
            className="object-cover w-full rounded"
          />
          <p>{anime.data.synopsis}</p>
        </div>
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  )
}

export default Page
