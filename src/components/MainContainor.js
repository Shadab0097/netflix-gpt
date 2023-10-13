import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'
// import useGetMoviesDetails from '../hooks/useGetMoviesDetails'



const MainContainor = () => {

  const movies = useSelector((store)=>store.movies?.nowPlayingMovies)
  const moviesID = useSelector((store)=>store.movies?.moviesId)
  // const moviesdetails = useSelector((store)=>store.movies?.getDetails)

  
  if(!movies) return;
  if(!moviesID) return;
  // if(!moviesdetails) return

  const mainmovie = moviesID
  const{title, overview,} = mainmovie

  const id = mainmovie.id
  if(!id) return

  console.log(id)

  return (
    <div className=''>
      <VideoTitle title={title}  overview={overview}/>
      <VideoBackground movieId={id}/>
   {/* {console.log(moviesID)} */}
    </div>
  )
}

export default MainContainor