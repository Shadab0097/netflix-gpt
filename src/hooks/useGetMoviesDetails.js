// import { useEffect } from "react"
// import { API_OPTION } from "../utils/constants"
// import { useDispatch} from "react-redux"
// import { addMoviesDtails } from "../utils/moviesSlice"

// const useGetMoviesDetails = (movieId)=>{
//     // console.log(id)
//     const dispatch = useDispatch()

//     const getMoviesDetails= async()=>{
//     const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'?language=en-US',API_OPTION)
//       const json = await data.json()
//       console.log(json)
      
//       const{original_title,overview} = json
   
    
//     dispatch(addMoviesDtails({original_title:original_title ,overview:overview }))
//     // console.log(json)
//     }
//     useEffect(()=>{
//         getMoviesDetails()
//       },[movieId])
// }

// export default useGetMoviesDetails


