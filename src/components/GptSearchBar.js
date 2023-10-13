import React, { useRef } from 'react'
import lang from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import openai from "../utils/openai"
import { API_OPTION } from '../utils/constants'
import {addgptMovieResult} from '../utils/gptSlice'

const GptSearchBar = () => {
  const languageKey = useSelector((store) => store.config.lang)
  const SearchText = useRef()
  const dispatch = useDispatch()
  // console.log(languageKey)

  // search movie in tmdb database
  const searchMovieTmdb = async (movie)=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTION)
    const json = await data.json()

    return json.results
  }

  const handleGptSearchClick = async () => {
    console.log(SearchText.current.value)
    //make api call
    const gptQuery = "Act as a Movies Recomendation system and Suggest some Movies for the query :"
      + SearchText.current.value +
      ". only give me names of 5 movies, comma seperate. like the example result given ahead. Example Results : Gadar , Sholay , Don, Golmaal , Koi Mil Gaya";;

    const gptresults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    // console.log(gptresults.choices[0]?.message?.content)
    const gptMovies = gptresults.choices[0]?.message?.content.split(",")

    const promiseAarray = gptMovies.map((movie)=>searchMovieTmdb(movie))

    const tmdbRsults = await Promise.all(promiseAarray)

    // console.log(tmdbRsults)
    dispatch(addgptMovieResult({ movieNames:gptMovies , movieResults:tmdbRsults}))
  }


  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='bg-black w-1/2 grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
        <input ref={SearchText} className='p-2 m-4 col-span-9' type='text' placeholder={lang[languageKey].gptSearchPlaceholder} />
        <button className='bg-red-800 p-2 col-span-3 m-4 rounded-lg text-white' onClick={handleGptSearchClick}>{lang[languageKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar