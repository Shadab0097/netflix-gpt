
import { IMG_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addMoviesId, getMoviesDtails } from '../utils/moviesSlice'
// import useGetMoviesDetails from '../hooks/useGetMoviesDetails'


const MovieCard = ({ posterPath, id, title, overview }) => {
  const dispatch = useDispatch()

  if (!posterPath) return null
  const handleId = () => {

    dispatch(addMoviesId({ id: id, title: title, overview: overview }))
  
  }
  return (
    <div className=' flex-none   pr-2 '>
      <img className=' w-48  rounded-lg' alt='movie' src={IMG_URL + posterPath} onClick={handleId} />

    </div>
  )
}

export default MovieCard