import React from 'react'
import { useSelector } from 'react-redux'
import { IMG_URL } from '../utils/constants'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const CastImg = () => {
  const getCast = useSelector((store) => store.movies.moviesCast)
  const getMoviesDetails = useSelector((store) => store.movies.moviesDetails);
  if (!getMoviesDetails) return
  if (!getCast) return
  console.log(getCast.profile_path)
  // const profile_path = getCast[0].profile_path
  const handleLeft = () => {
    let scroller = document.getElementById("scroll");
    scroller.scrollLeft = scroller.scrollLeft - 500;
  };

  const handleRight = () => {
    let scroller = document.getElementById("scroll");
    scroller.scrollLeft = scroller.scrollLeft + 500;
  };


  return (
    <div className='overflow-x-hidden bg-black text-white  border-t-2'>
      <div className=' text-white flex flex-col items-center w-screen p-5'>
      <h1 className=' text-[1rem] font-bold md:text-5xl'> {getMoviesDetails.title}</h1>
      <p className='pb-3'> {getMoviesDetails.tagline}</p>

      <p className='text-sm  md:w-[40rem] pb-3 md:text-2xl'>Overview: {getMoviesDetails.overview}</p>
      <p className='text-[1rem] md:text-[1.5rem]'> Popularity: {getMoviesDetails.popularity}</p>
       <p className='text-[1rem] md:text-[1.5rem]'> Genres: {getMoviesDetails.genres.map((gname)=>gname.name)}</p>
        <p className='text-[1rem] md:text-[1.5rem]'>status: {getMoviesDetails.status}</p>
      </div>

      <h1 className='text-4xl flex justify-center m-4' >Movie Cast</h1>
      <div id="scroll" className='flex overflow-x-scroll no-scrollbar scroll-smooth'>
        <div className='absolute flex justify-between mt-24 w-screen '>
          <button className=' hidden md:block pr-4 text-white bg-gradient-to-r from-black' onClick={handleLeft}><FaChevronLeft size={30} /></button>
          <button className='  hidden md:block pr-4  text-white  bg-gradient-to-l from-black' onClick={handleRight}><FaChevronRight size={30} /></button>
        </div>

        <div className='flex' >
          {getCast.map((cast) => {
            if (cast.profile_path) {
              return (
                <div className='' key={cast.id}>

                  <div className=' w-32 md:w-36 m-2' key={cast.id}>
                    <img className='w-32 md:w-36' alt='castImg' key={cast.id} src={IMG_URL + cast.profile_path} />
                    <p className='font-bold'>{cast.name}</p>
                    <p>({cast.character})</p>
                    <p>Popularity-{cast.popularity}</p>
                  </div>
                </div>
              );
            } else {
              return (
                null
              );
            }
          })}


        </div>

      </div>
    </div>
  )
}

export default CastImg