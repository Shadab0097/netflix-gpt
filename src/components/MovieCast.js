import React, { useEffect, useState } from 'react'
import { API_OPTION, IMG_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addMoviesCast } from '../utils/moviesSlice'
import CastImg from './CastImg'

const MovieCast = ({movieCastId}) => {
const dispatch = useDispatch()

    useEffect(()=>{
        getMovieCAst()
    },[movieCastId])
    const getMovieCAst = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieCastId+'/credits?language=en-US', API_OPTION)
        const json =  await data.json()
        console.log(json.cast)
     
        dispatch(addMoviesCast(json.cast))
    }
  return (
    <div>
        <CastImg/>
    </div>
  )
}

export default MovieCast