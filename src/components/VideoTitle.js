
import useGetMoviesDetails from '../hooks/useGetMoviesDetails';

const VideoTitle = ({ title, overview, id }) => {
  
  useGetMoviesDetails();
  return (
    <div className='w-screen aspect-video pt-[17%] px-12 absolute text-white'>

      <div className=''>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/3'>{overview}</p>
      </div>
      <div className=''>
        <button className='bg-white text-black p-4 px-12 text-lg rounded-lg hover:bg-opacity-80'>
          ▶️ Play
        </button>
        <button className='mx-2 bg-gray-500 text-white p-4 px-12 text-lg bg-opacity-50 rounded-lg'>
          More Info
        </button>
      </div>


    </div>
  );
};

export default VideoTitle;
