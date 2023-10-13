import { useSelector } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRated from '../hooks/useTopRated'
import useUpComingMovies from '../hooks/useUpComingMovies'
import Header from './Header'
import MainContainor from './MainContainor'
import SecondaryContainor from './SecondaryContainor'
import GptSearch from './GptSearch'




const Browse = () => {
  const gptSearch = useSelector((store)=>store.gpt.showGptSearch)
  
  useNowPlayingMovies()
  usePopularMovies()
  useTopRated()
  useUpComingMovies()
  


  return (
    <div>
      <Header />
      {gptSearch ? ( <GptSearch />) :
       ( <>
          <MainContainor />
          <SecondaryContainor />
        </>)

      }

    </div>
  )
}

export default Browse