import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { Link, useNavigate, } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGE } from '../utils/constants';
import { toggleGptSearchView} from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch)


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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))

        navigate("/browse")

      } else {
        dispatch(removeUser())
        navigate("/")
      }
    });
    return () => unsubscribe()
  }, [])

  const handleGptToggle = () => {
    dispatch(toggleGptSearchView())
  }

  const handleChangeLanguage=(e)=>{
    dispatch(changeLanguage(e.target.value))
  }

 

  return (
    <div className='absolute w-[100vw]  z-20 px-2 md:px-8 py-2 bg-gradient-to-b from-black  flex justify-between'>
      <img
        className=' w-24 h-14 md:w-40 md:h-24'
        src={LOGO}
        alt='logo'
      />
      {user && (
        <div className='flex px-2 py-2 items-center'>  
         { showGptSearch && <select className='p-1 text-xs md:text-lg md:p-2 bg-gray-900 text-white m-2' onChange={handleChangeLanguage}>
          {SUPPORTED_LANGUAGE.map((lang)=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>}
          <button className='bg-purple-800 text-white md:p-2  p-1 text-xs md:text-lg mr-2 rounded-lg' onClick={handleGptToggle}>{showGptSearch ? "HomePage":"GPT Search"}</button>
       <Link to="/moviecart" ><button className='bg-purple-800 text-white md:p-2  p-1 text-xs md:text-lg  mr-4 rounded-lg'> WatchLater </button></Link>
         
          <img className=' w-5 h-5 mr-1 md:w-8 md:h-8 ' alt='user pic' src={user?.photoURL} />
        
          <button className='text-white md:text-lg text-[10px]' onClick={handleSignOut}>
            Sign Out
          </button>
          
         
        </div>
      )}
    </div>
  );
};

export default Header;