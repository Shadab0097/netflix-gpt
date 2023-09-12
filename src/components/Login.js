import React from 'react'
import Header from './Header'

const Login = () => {
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg'
                   className=''
                   alt='bg-img' />
            </div>
            <form className='absolute bg-black w-[450px] h-[660px] p-14 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>Sign In</h1>
                <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-[#333] rounded-lg'/>
                <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-[#333] rounded-lg'/>
                        <button className='p-4 my-6 bg-red-600 w-full rounded-lg'>Sign In</button>
            </form>
        </div>
    )
}

export default Login