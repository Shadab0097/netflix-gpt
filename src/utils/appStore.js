import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import moviesReducer from"./moviesSlice"
import gptReducer from "./gptSlice"
import configReducer from "./configSlice"
import detailsReducer from "./detailsSlice"
import movieCartReducer from './movieCartSlice'
const appStore = configureStore({

    reducer:{
        user:userReducer,
        movies:moviesReducer,
        gpt:gptReducer,
        config:configReducer,
        details:detailsReducer,
        movieCart:movieCartReducer,
    }

})

export default appStore;