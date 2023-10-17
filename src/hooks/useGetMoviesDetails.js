import { useEffect } from "react"
import { API_OPTION } from "../utils/constants"
import { useDispatch, useSelector} from "react-redux"
import { addMoviesDtails } from "../utils/moviesSlice"


const useGetMoviesDetails = ()=>{
  const moviesID = useSelector((store)=>store.movies?.moviesId)

    // console.log(id)
    const dispatch = useDispatch()

    const getMoviesDetails= async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/'+moviesID.id+'?language=en-US',API_OPTION)
      const json = await data.json()
      console.log(json)
      
      const{original_title,overview,popularity,production_countries,genres,status,tagline,title} = json
   
    
    dispatch(addMoviesDtails({original_title:original_title ,overview:overview , popularity:popularity, production_countries:production_countries.name,genres:genres,status:status,tagline:tagline,title:title}))
    // console.log(json)
    }
    useEffect(()=>{
        getMoviesDetails()
      },[moviesID.id])
}

export default useGetMoviesDetails


