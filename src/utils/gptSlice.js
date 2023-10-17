import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        movieNames:null,
        movieResults : null,
        showHomePageView:false,
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch = !state.showGptSearch
        },
        toggleHomePageView:(state)=>{
            state.showHomePageView = !state.showGptSearch
        },
        addgptMovieResult:(state , action )=>{
            const {movieNames , movieResults} = action.payload
                state.movieNames = movieNames
                state.movieResults = movieResults

        }
    }
})

export const {toggleGptSearchView , addgptMovieResult , toggleHomePageView} = gptSlice.actions
export default gptSlice.reducer