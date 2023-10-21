import React from 'react'
import { LOGO } from '../utils/constants'
import { useNavigate } from 'react-router-dom'

const TrailerHeader = () => {
  const navigate = useNavigate()

  const handleHomePage = () => {
    navigate("/browse")
  }

  return (
    <div>
      <div className='absolute w-[100vw]  z-20 px-2 md:px-8 py-2 bg-black md:bg-transparent md:bg-gradient-to-b from-black flex justify-between items-center'>
        <img
          className='w-32 h-16 md:w-40 md:h-24'
          src={LOGO}
          alt='logo'
        />
        <div>
          <button className='bg-purple-800 text-white p-1 md:p-2 mr-2 rounded-lg ' onClick={handleHomePage}>HomePage</button>
        </div>
      </div>
    </div>
  )
}

export default TrailerHeader