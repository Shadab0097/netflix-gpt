import { signOut } from 'firebase/auth';
import React, { } from 'react';
import { auth } from '../utils/firebase';
import { useNavigate, } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const navigate = useNavigate();
  // const location = useLocation();
const user = useSelector(store=>store.user)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/');
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className='absolute w-screen z-20 px-8 py-2 bg-gradient-to-b from-black flex justify-between'>
      <img
        className='w-40 h-24'
        src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
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