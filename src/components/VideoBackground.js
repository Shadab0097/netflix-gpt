
import {  useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'
// import { useEffect } from 'react'


const VideoBackground = ({movieId}) => {
  const trailerId = useSelector((store)=>store?.movies?.trailerVideo)
  useMovieTrailer(movieId)
  if(!trailerId) return null
  console.log(trailerId.key)
  


  return (
    <>
    { }
    <div className=' w-full pt-16  md:pt-0'>
      <iframe 
      className="w-screen aspect-video " 
      src={"https://www.youtube.com/embed/"+trailerId.key+"?si=CNqqA7ZvUXgOeW40?&autoplay=1&mute=1&?modestbranding=1&autohide=1&showinfo=0&controls=0"}
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  >  
      </iframe>
    </div>
    </>
  )
}

export default VideoBackground