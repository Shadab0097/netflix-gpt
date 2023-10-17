
// import useGetMoviesDetails from '../hooks/useGetMoviesDetails';
// import useGetMoviesDetails from '../hooks/useGetMoviesDetails';
import MovieCard from './MovieCard'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";



const MovieList = ({ title, movies }) => {

  // const id = movies.map((movieid)=>movieid.id)
  // console.log(movies)
// useGetMoviesDetails()

  const handleLeft = () => {
    let scroller = document.getElementById(title);
    scroller.scrollLeft = scroller.scrollLeft - 500;
  };

  const handleRight = () => {
    let scroller = document.getElementById(title);
    scroller.scrollLeft = scroller.scrollLeft + 500;
  };


  return (
    <div className='  overflow-x-hidden relative '>
      <h2 className='text-2xl mt-8 font-medium py-3 text-white'>{title}</h2>
      <div className='absolute flex justify-between mt-36 w-[1220px] '>
        <button className='  pr-4 text-white bg-gradient-to-r from-black' onClick={handleLeft}><FaChevronLeft size={30} /></button>
        <button className=' pr-4  text-white  bg-gradient-to-l from-black' onClick={handleRight}><FaChevronRight size={30} /></button>
      </div>
      <div id={title} className='flex overflow-x-scroll no-scrollbar scroll-smooth'>

        <div className="flex ">
          {movies?.map((movie) => <MovieCard key={movie.id} posterPath={movie.poster_path} id={movie.id} title={movie.original_title} overview={movie.overview}/>)}

        </div>
      </div>

    </div>
  )
}

export default MovieList

