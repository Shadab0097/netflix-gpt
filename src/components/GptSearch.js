import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_IMG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
 <div className='fixed w-screen -z-10 '>
                <img src={BG_IMG_URL}
                    className='h-screen w-screen object-cover'
                    alt='bg-img' />
            </div>
            <div className=''>
          
          <GptSearchBar/>
          <GptMovieSuggestion/>
      </div>
    </>
   
  )
}

export default GptSearch