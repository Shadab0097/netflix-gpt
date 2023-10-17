import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        moviesId: {id:980489,title:"Gran Turismo",overview:"The ultimate wish-fulfillment tale of a teenage Gran Turismo player whose gaming skills won him a series of Nissan competitions to become an actual professional racecar driver."},
        moviesCast:null,
        moviesDetails:null
    },

    reducers:{
        addNowPlayingMovies : (state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies : (state,action)=>{
            state.popularMovies = action.payload
        },
        addTopRatedMovies : (state,action)=>{
            state.topRatedMovies = action.payload
        },
        addUpComingMovies : (state,action)=>{
            state.upComingMovies = action.payload
        },
        addTrailerVideo:(state , action)=>{
            state.trailerVideo = action.payload
        },
        addMoviesId:(state , action)=>{
            state.moviesId = action.payload
        },
        addMoviesCast:(state , action)=>{
            state.moviesCast = action.payload
        }
        ,
        addMoviesDtails:(state , action)=>{
            state.moviesDetails = action.payload
        }
    }
})

export const {addNowPlayingMovies , addTrailerVideo ,addPopularMovies , addTopRatedMovies ,addUpComingMovies ,addMoviesId , addMoviesCast ,addMoviesDtails }= moviesSlice.actions
export default moviesSlice.reducer
