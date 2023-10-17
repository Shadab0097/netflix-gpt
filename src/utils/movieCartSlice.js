import { createSlice } from "@reduxjs/toolkit";


const movieCartSlice = createSlice({
    name:"movieCart",
    initialState:{
        addList:[],
    },
    reducers:{
        addMovieList:(state,action)=>{state.addList.push(action.payload)},
        clearMovieList:(state)=>{ state.addList.length=0},
    }
})

 export const{addMovieList,clearMovieList} = movieCartSlice.actions
export default movieCartSlice.reducer