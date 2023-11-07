"use client"
import { useState } from "react"
import YouTube from "react-youtube"
const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState)
  }
  const options = {
    width: "300",
    height: "250",
  }
  const Player = () => {
    return (
      <div className="fixed right-2 bottom-2">
        <button
          className="float-right px-2 mb-1 rounded-full text-color-primary bg-color-accent hover:bg-color-primary hover:text-color-accent"
          onClick={handleVideoPlayer}
        >
          X
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={options}
          onError={() => alert("Video Is Broken, Please Try Again Later")}
        />
      </div>
    )
  }
  const ButtonOpenTrailer = () => {
    return (
      <button
        className="fixed w-32 transition-all rounded-full bottom-5 right-5 bg-color-accent text-color-primary hover:bg-color-primary hover:text-color-accent"
        onClick={handleVideoPlayer}
      >
        Watch Trailer
      </button>
    )
  }
  return isOpen ? <Player /> : <ButtonOpenTrailer />
}

export default VideoPlayer
