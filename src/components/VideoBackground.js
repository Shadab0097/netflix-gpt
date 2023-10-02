
import {  useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'


const VideoBackground = ({movieId}) => {
  const trailerId = useSelector((store)=>store.movies?.trailerVideo)
console.log(movieId)
  useMovieTrailer(movieId)
 
  return (
    <div className='w-screen '>

      <iframe 
      className="w-screen aspect-video" 
      src={"https://www.youtube.com/embed/4wxyy8Rcz4k?si=WR1NdeBOZm758O1e"+ trailerId?.key + "?&autoplay=1&mute=1&?showinfo=0&iv_load_policy=3&controls=0&?loop=1"}
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  >  
      </iframe>
    </div>
  )
}

export default VideoBackground