import { useLocation } from 'react-router-dom';
import useGetMoviesDetails from '../hooks/useGetMoviesDetails';

const VideoTitle = ({ title, overview, id }) => {

  const location = useLocation()
  
  const showVideoTitle = location.pathname === '/browsetrailer'
  useGetMoviesDetails();
  return (
    <>
    {!showVideoTitle &&
    <div className='w-screen aspect-video pt-[17%] px-12 absolute text-white'>

      <div className='-ml-10 md:ml-0 '>
        <h1 className=' text-xl md:text-6xl font-bold'>{title}</h1>
        <p className=' text-[10px] truncate md:whitespace-normal  w-[85%] md:py-6 md:text-lg md:w-1/1'>{overview}</p>
      </div>
      <div className=' -ml-10 mt-2 md:ml-0'>
        <button className='bg-white text-black  p-1 px-4 text-sm md:p-4 md:px-12 md:text-lg rounded-lg hover:bg-opacity-80'>
          ▶️ Play
        </button>
        <button className=' mx-2 bg-gray-500 text-white  p-1 px-4 text-sm md:p-4 md:px-12 md:text-lg bg-opacity-50 rounded-lg'>
          More Info
        </button>
      </div>
    </div>
}
    </>
  );
};

export default VideoTitle;
