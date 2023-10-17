import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainor = () => {

  const movies = useSelector((store)=>store.movies)

  
  return (
    <div className=''>
    <div className=' bg-[#141414] '>
      <div className='-mt-40 relative  px-6 pb-28 '>
      <MovieList title={"Now PLaying"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
      <MovieList title={"Up Coming"} movies={movies.upComingMovies}/>
      <MovieList title={"Binge Movies"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
      </div>

    </div>
    </div>
  )
}

export default SecondaryContainor