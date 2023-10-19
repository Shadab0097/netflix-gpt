import React, { useRef, useState } from 'react'
import Header from './Header'
import { CheckValdation } from '../utils/Validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_IMG_URL } from '../utils/constants';

const Login = () => {
    const [IsSignINForm, setIsSignInForm] = useState(true)
    const [ErrorMessage, setErrorMessage] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)

    const toggleSignin = () => {
        setIsSignInForm(!IsSignINForm)
    }

    const HandleClick = () => {

        const message = CheckValdation(email.current.value, password.current.value)
        setErrorMessage(message)

        if (message) return;

        if (!IsSignINForm) {
            // sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;

                    updateProfile(user, {
                        displayName: name.current.value , photoURL: "https://occ-0-6110-3647.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"
                      }).then(() => {
                        // Profile updated!
                        const {uid , email , displayName ,photoURL} = auth.currentUser;
                        dispatch(addUser({uid:uid , email:email , displayName:displayName , photoURL:photoURL}))
                      }).catch((error) => {
                        // An error occurred
                      setErrorMessage(error.message)
                      });

                      navigate("/browse")
                      

                
                   
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });

        } else {
            // sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                   
                    
                    navigate("/browse")
                   
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });
        }
    }
    return (
        <div>
            <Header />
            <div className='absolute w-[100%]'>
                <img src={BG_IMG_URL}
                    className='h-screen object-cover w-full'
                    alt='bg-img' />
            </div>
            
            <form onSubmit={(e) => e.preventDefault()} className='absolute bg-black w-full md:w-4/12  p-14 my-36 md:my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{IsSignINForm ? "Sign In" : "Sign Up"}</h1>
                {!IsSignINForm && <input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-[#333] rounded-lg' />}

                <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-[#333] rounded-lg' />
                <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-[#333] rounded-lg' />

                <p className='text-red-500 font-bold py-2'>{ErrorMessage}</p>
                <button onClick={HandleClick} className='p-4 my-6 bg-red-600 w-full rounded-lg'>{IsSignINForm ? "Sign In" : "Sign Up"}</button>
                <p onClick={toggleSignin} className='py-4 cursor-pointer'>{IsSignINForm ? "New To Netflix? Sign Up Now" : "Already Registered? Sign In "}</p>
            </form>
        </div>
    )
}

export default Login