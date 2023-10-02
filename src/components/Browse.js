import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainor from './MainContainor'


const Browse = () => {
  useNowPlayingMovies()
  return (
    <div>
      <Header />
      <MainContainor/>
    </div>
  )
}

export default Browse