import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import MovieCast from './MovieCast';
import TrailerHeader from './TrailerHeader';


const BrowseTrailer = () => {
   const moviesID = useSelector((store)=>store.movies?.moviesId)

   if(!moviesID) return

    const mainmovie = moviesID
    const{title, overview,} = mainmovie
  
    const id = mainmovie.id
    if(!id) return
  
    return (
      <div className=''>
        <TrailerHeader/>
        <VideoTitle title={title}  overview={overview} />
        <VideoBackground movieId={id}/>
        <MovieCast movieCastId={id}/>
      </div>
    )
}

export default BrowseTrailer