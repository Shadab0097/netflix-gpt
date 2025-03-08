import React, { useRef, useState } from 'react'
import lang from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import openai from "../utils/openai"
import { API_OPTION } from '../utils/constants'
import { addgptMovieResult } from '../utils/gptSlice'
import axios from 'axios'
import GptSpinner from './GptSpinner'

const GptSearchBar = () => {
  const languageKey = useSelector((store) => store.config.lang)
  const SearchText = useRef()
  const dispatch = useDispatch()
  const [spinner, setSpinner] = useState(false)
  // console.log(languageKey)

  // search movie in tmdb database
  const searchMovieTmdb = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTION)
    const json = await data.json()

    return json.results
  }

  const handleGptSearchClick = async () => {
    setSpinner(true)

    const DEEPSEEK_API_KEY = process.env.REACT_APP_DEEPSEEK_API_KEY; // Store your API key in environment variables
    const DEEPSEEK_API_URL = "https://openrouter.ai/api/v1/chat/completions"; // Replace with actual DeepSeek API endpoint

    // Construct the query
    const gptQuery = "Act as a Movies Recommendation system and Suggest some Movies for the query :"
      + SearchText.current.value +
      ". Only give me names of 5 movies, comma separated. Like the example result given ahead. Example Results : Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    try {
      // Make API call to DeepSeek
      const gptresults = await axios.post(
        DEEPSEEK_API_URL,
        {
          messages: [{ role: 'user', content: gptQuery }],
          model: "deepseek/deepseek-r1-zero:free",
        },
        {
          headers: {
            'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }

      )
      if (gptresults.status === 200) {
        setSpinner(false)
      }
      console.log(gptresults)

      const content = gptresults?.data?.choices[0]?.message?.content;

      // Extract text inside \boxed{}
      const match = content?.match(/\\boxed{(.+?)}/);
      const extractedText = match ? match[1] : "";

      // Split into an array
      const gptMovies = extractedText ? extractedText.split(", ") : [];

      const promiseAarray = gptMovies.map((movie) => searchMovieTmdb(movie))

      const tmdbRsults = await Promise.all(promiseAarray)
      dispatch(addgptMovieResult({ movieNames: gptMovies, movieResults: tmdbRsults }))

    } catch (err) {
      console.log(err)
      setSpinner(false)
    }

    // console.log(SearchText.current.value)
    //make api call
    // const gptQuery = "Act as a Movies Recomendation system and Suggest some Movies for the query :"
    //   + SearchText.current.value +
    //   ". only give me names of 5 movies, comma seperate. like the example result given ahead. Example Results : Gadar , Sholay , Don, Golmaal , Koi Mil Gaya";;

    // const gptresults = await openai.chat.completions.create({
    //   messages: [{ role: 'user', content: gptQuery }],
    //   model: 'gpt-3.5-turbo',
    // });

    // console.log(gptresults.choices[0]?.message?.content)


    // console.log(tmdbRsults)
  }


  return (
    <div className=' pt-[45%] md:pt-[10%] flex justify-center'>
      <form className='bg-black w-full md:w-1/2 grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
        <input ref={SearchText} className=' p-0  md:p-2 m-4 col-span-9' type='text' placeholder={lang[languageKey].gptSearchPlaceholder} />
        <button className='bg-red-800 p-2 col-span-3 m-4 rounded-lg text-white'
          onClick={handleGptSearchClick}>{spinner ? <GptSpinner /> : lang[languageKey].search}</button>

      </form>
    </div>
  )
}

export default GptSearchBar