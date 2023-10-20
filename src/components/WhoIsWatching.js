import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const WhoIsWatching = () => {
  const user = useSelector(store => store.user)
  const navigate = useNavigate()
  if(!user) {
     return navigate("/")
  }

  return (
    <>
    <div className='flex flex-col w-screen h-screen bg-[#141414] text-white items-center pt-36'>
    <div>
        <h1 className='text-5xl'>Who's Watching?</h1>
    </div>
    <div className='mt-10 flex flex-col items-center'>
    
   <Link to="/browse" ><img className=' w-24 h-24 mr-1 md:w-24 md:h-24 rounded-lg ' alt='user pic' src={user?.photoURL} /></Link>
     <p className='text-gray-500 text-xl'>{user.displayName}</p>

    </div>
    </div>
    </>
  )
}

export default WhoIsWatching