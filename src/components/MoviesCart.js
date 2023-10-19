import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieCard from './MovieCard'
import TrailerHeader from "./TrailerHeader"
import { clearMovieList } from '../utils/movieCartSlice'

const MoviesCart = () => {
    const dispatch = useDispatch()

    const list = useSelector((store) => store.movieCart.addList)

    if (!list) return null

    console.log(list)

    const clearCart = () => {
        dispatch(clearMovieList())
    }

    return (
        <>
            <div className='bg-[#141414] h-screen'>
                <div>
                    <div className='fixed'>
                        <TrailerHeader />
                    </div >
                    <div className='flex justify-center pt-32'>
                    <h1 className='  text-white text-4xl'>Watch Later</h1>
                    {list.length>0 &&  <button onClick={clearCart} className='bg-purple-800 text-white p-2 ml-4 rounded-lg '>Clear Movies</button>}
                   
                    </div>
                    {list.length === 0 && <h1 className='text-white text-3xl justify-center flex mt-10' >Please add Some Movies</h1>}
                </div>
                <div className='flex flex-wrap mt-10 '>
                    {list.map((list) => { return <MovieCard key={list.id} posterPath={list.posterPath} id={list.id} title={list.title} overview={list.overview} /> })}

                </div>
            </div>
        </>
    )
}

export default MoviesCart