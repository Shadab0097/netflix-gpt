import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'


const MainContainor = () => {

  const movies = useSelector((store)=>store.movies?.nowPlayingMovies)
  if(!movies) return;
  const mainmovie = movies[0]
  const{original_title, overview,} = mainmovie

  const id = mainmovie.id

  console.log(mainmovie)

  return (
    <div>
      <VideoTitle title={original_title}  overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainor