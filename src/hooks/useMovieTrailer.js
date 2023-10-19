import  { useEffect } from 'react'
import { useDispatch} from 'react-redux'
import { API_OPTION } from '../utils/constants'
import { addTrailerVideo } from '../utils/moviesSlice'

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()
    // const trailerVideo = useSelector(store=>store.movies.trailerVideo)

    const getBackgoroundmovie = async () => {
      const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTION)
      const json = await data.json()
      
      // console.log(json)
  
      const filterData = json.results.filter((videos) => videos.type === "Trailer")
  
      const trailer = filterData.length ? filterData[0] : json.results[0]
      console.log(trailer)
      dispatch(addTrailerVideo(trailer))
  
    }
  
    useEffect(() => {
      getBackgoroundmovie()
    }, [movieId])
}

export default useMovieTrailer