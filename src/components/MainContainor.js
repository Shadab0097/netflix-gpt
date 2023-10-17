import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'


const MainContainor = () => {

  const movies = useSelector((store)=>store.movies?.nowPlayingMovies)
  const moviesID = useSelector((store)=>store.movies?.moviesId)
 
  if(!movies) return;
  if(!moviesID) return;

  const mainmovie = moviesID
  const{title, overview,} = mainmovie

  const id = mainmovie.id
  if(!id) return
  console.log(id)

  return (
    <div className=''>
      <VideoTitle title={title}  overview={overview} id={id}/>
      <VideoBackground movieId={id}/>
   
    </div>
  )
}

export default MainContainor