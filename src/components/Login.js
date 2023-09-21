import React, { useRef, useState } from 'react'
import Header from './Header'
import { CheckValdation } from '../utils/Validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

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
                        displayName: name.current.value , photoURL: "https://lh3.googleusercontent.com/a/ACg8ocKuWnnyXYlbKlT8ySgQ2N_oEtvm_ldvwhhoW53G178Ur0o=s432-c-no"
                      }).then(() => {
                        // Profile updated!
                        const {uid , email , displayName ,photoURL} = auth.currentUser;
                        dispatch(addUser({uid:uid , email:email , displayName:displayName , photoURL:photoURL}))
                        navigate("/browse")
                      }).catch((error) => {
                        // An error occurred
                      setErrorMessage(error.message)
                      });
                      

                    console.log(user)
                   
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
                    console.log(user)
                    
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
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg'
                    className=''
                    alt='bg-img' />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='absolute bg-black w-[450px] h-[660px] p-14 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
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