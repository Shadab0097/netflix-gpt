import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
// import Shimmer from './Shimmer'

const GptMovieSuggestion = () => {
  const {movieResults , movieNames} = useSelector((store)=>store.gpt)
  if(!movieNames) return null
// {movieNames.length === 0 ?:}
 const handleClick =()=>{
  console.log("clicked")
 }
  return (
    <div className='p-4 m-2 bg-black text-white bg-opacity-70'>
      <div>
        {movieNames.map((movieName , index)=>{ return <MovieList key={movieName} title={movieName} movies={movieResults[index]} onClick={handleClick}/>})}
      </div>

    </div>
  )

}

export default GptMovieSuggestion