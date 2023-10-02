import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { useNavigate, } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  // const location = useLocation();
const user = useSelector(store=>store.user)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate('/');
      })
      .catch((error) => {
        // An error happened.
      });

  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid , email , displayName ,photoURL} = user;
          dispatch(addUser({uid:uid , email:email , displayName:displayName , photoURL:photoURL}))
         
          navigate("/browse")
          
        } else {
        dispatch(removeUser())
          navigate("/")
        }
      });
return ()=> unsubscribe()
},[])

  return (
    <div className='absolute w-screen z-20 px-8 py-2 bg-gradient-to-b from-black flex justify-between'>
      <img
        className='w-40 h-24'
        src={LOGO}
        alt='logo'
      />
      {user && (
        <div className='flex px-2 py-2 items-center'>
          <img className='w-8 h-8 ' alt='user pic' src={user?.photoURL}/>
        <button className='text-white' onClick={handleSignOut}>
          Sign Out
        </button>
        </div>
      )}
    </div>
  );
};

export default Header;