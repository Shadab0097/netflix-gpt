import { IMG_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addMoviesId } from '../utils/moviesSlice'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaPlay, FaPlus, FaThumbsUp } from 'react-icons/fa'
import { addMovieList } from '../utils/movieCartSlice'


const MovieCard = ({ posterPath, id, title, overview }) => {
const location = useLocation()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  if (!posterPath) return null
  const handleId = () => {
    dispatch(addMoviesId({ id: id, title: title, overview: overview }))
    navigate("/browsetrailer")
  }

  const addMoviesList =()=>{
    dispatch(addMovieList({posterPath:posterPath,id:id,title:title}))
  }

  const showBtn = location.pathname === "/moviecart"
  return (
    <div className="flex-none pr-3 group ">
      <img
        className="w-48 rounded-lg "
        alt="movie"
        src={IMG_URL + posterPath}
       
      />
      <div className=" break-words buttons-container opacity-0 group-hover:opacity-100  text-white p-3 hover:border-black w-48  bg-[#141414] relative -mt-20 ">
        <button className="border-[2px] p-3 rounded-full"  onClick={handleId} ><FaPlay /></button>
        {!showBtn && <button className="border-[2px] p-3 rounded-full m-2" onClick={addMoviesList}><FaPlus /></button>}
        
        <button className="border-[2px] p-3 ml-2 rounded-full"><FaThumbsUp /></button>
        <h2 className='w-48 break-words'>{title}</h2>

        {/* Add more buttons as needed */}
      </div>
    </div>
  )
}

export default MovieCard