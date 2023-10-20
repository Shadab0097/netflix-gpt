import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import BrowseTrailer from './BrowseTrailer'
import MoviesCart from './MoviesCart'
import WhoIsWatching from './WhoIsWatching'

const Body = () => {
    // const dispatch = useDispatch()
   
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>,
            
        },
        {
            path:"/browsetrailer",
            element:<BrowseTrailer/>
        },
        {
            path:"/moviecart",
            element:<MoviesCart/>,
        },
        {
            path:"/whoiswatching",
            element:<WhoIsWatching/>,
        }
    ]);

 

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body