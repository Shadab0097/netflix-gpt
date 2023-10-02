import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[20%] px-12 absolute  text-white '>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/3'>{overview}</p>
      <div className=''>
        <button className='bg-white text-black p-4 px-12 text-lg  rounded-lg hover:bg-opacity-80'> ▶️Play</button>
        <button className=' mx-2 bg-gray-500 text-white p-4 px-12 text-lg bg-opacity-50 rounded-lg'>More Info</button>

      </div>
    </div>
  )
}

export default VideoTitle