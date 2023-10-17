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
  // const location = useLocation();
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
    <div className='absolute w-[100vw]  z-20 px-8 py-2 bg-gradient-to-b from-black flex justify-between '>
      <img
        className='w-40 h-24'
        src={LOGO}
        alt='logo'
      />
      {user && (
        <div className='flex px-2 py-2 items-center'>
          {/* {getCast && <button className='bg-purple-800 text-white p-2 mr-2 rounded-lg' onClick={handleHomePage}>{showGptSearch ? "MainPage":"HomePage"}</button>} */}
         { showGptSearch && <select className='p-2 bg-gray-900 text-white m-2' onChange={handleChangeLanguage}>
          {SUPPORTED_LANGUAGE.map((lang)=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>}
          <button className='bg-purple-800 text-white p-2 mr-2 rounded-lg' onClick={handleGptToggle}>{showGptSearch ? "HomePage":"GPT Search"}</button>
       <Link to="/moviecart" ><button className='bg-purple-800 text-white p-2 mr-4 rounded-lg'> Watch Later </button></Link>
         
          <img className='w-8 h-8 ' alt='user pic' src={user?.photoURL} />
          <button className='text-white ' onClick={handleSignOut}>
            Sign Out
          </button>
          
         
        </div>
      )}
    </div>
  );
};

export default Header;