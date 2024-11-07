import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation()
  console.log(location.pathname)

  
  const navLinkColor = location.pathname == '/'  ? 'text-white' : 'text-blue-500';
  const hamburgerColor = location.pathname == '/'  ? 'bg-white' : 'bg-gray-500';
  // const languageColor = isHome ? 'text-white' : 'text-blue-500'; // Set the same logic for language icon and span

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (!isMobile) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  return (
    <header className="absolute top-0 left-0 w-full z-10 bg-transparent">
      <div className='flex items-center justify-between max-w-screen-xl mx-auto px-4'>
        <div className='flex items-center mt-[20px] justify-between w-full'>
          <Link to={'/'}  >
            <img className='cursor-pointer xl:ml-[100px] w-[80px] ml-[50px]' src={logo} alt="Logo" />
          </Link>

          {/* Hamburger icon and language icon (always visible) */}
          <div className="flex items-center">
            <div
              className='lg:hidden ml-4 cursor-pointer'
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className={`h-1 w-8 mb-1 ${hamburgerColor}`}></div>
              <div className={`h-1 w-8 mb-1 ${hamburgerColor}`}></div>
              <div className={`h-1 w-8 ${hamburgerColor}`}></div>
            </div>

            {/* Language Icon (Always visible) */}
            {/* <div className="ml-4 md:ml-[800px]">
              <span className={` pr-[5px] text-[20px] font-lato ${languageColor}`}>ქა</span>
              <FontAwesomeIcon icon={faLanguage} className={`text-[20px] ${languageColor}`} />
            </div> */}
          </div>
        </div>

        {menuOpen && isMobile && (
          <div className='absolute top-1 left-5 w-full bg-transparent flex flex-col items-center'>
            <Link
              to='/'
              onClick={() => {  setMenuOpen(false); }}
              className={`w-full text-center p-1 mb-1 ${navLinkColor} transition duration-300 hover:bg-gray-200`}
            >
              Home
            </Link>
            <Link
              to='/about'
              onClick={() => {  setMenuOpen(false); }}
              className={`w-full text-center p-1 mb-1 ${navLinkColor} transition duration-300 hover:bg-gray-200`}
            >
              About
            </Link>
            <Link
              to='/services'
              onClick={() => {  setMenuOpen(false); }}
              className={`w-full text-center p-1 mb-1 ${navLinkColor} transition duration-300 hover:bg-gray-200`}
            >
              Services
            </Link>
            <Link
              to='/contact'
              onClick={() => {  setMenuOpen(false); }}
              className={`w-full text-center p-1 mb-1 ${navLinkColor} transition duration-300 hover:bg-gray-200`}
            >
              Contact
            </Link>
          </div>
        )}

        
        {!menuOpen && (
          <div className='items-center lg:mr-[100px]  ml-6 hidden lg:flex'>
            <Link
              to='/'
              
              className={`font-poppins ${navLinkColor} mr-6 text-xl pb-1 transition duration-300 hover:text-gray-400 ${location.pathname  === '/' ? 'border-b-2 border-white' : ''}`}
            >
              Home
            </Link>
            <Link
              to='/about'
              className={`font-poppins ${navLinkColor} text-xl pb-1 mr-6 transition duration-300 hover:text-gray-400 ${location.pathname  === '/about' ? 'border-b-2 border-blue' : ''}`}
            >
              About
            </Link>
            <Link
              to='/services'
              className={`font-poppins ${navLinkColor} text-xl pb-1 mr-6 transition duration-300 hover:text-gray-400 ${location.pathname  === '/services' ? 'border-b-2 border-blue' : ''}`}
            >
              Services
            </Link>
            <Link
              to='/contact'
              className={`font-poppins ${navLinkColor} text-xl pb-1 transition duration-300 hover:text-gray-400 ${location.pathname  === '/contact' ? 'border-b-2 border-blue' : ''}`}
            >
              Contact
            </Link>
          </div>
        )}
      </div>

      {location.pathname  !== '/' && <div className='mt-[20px] h-[1px] w-full bg-gray-500'></div>}
    </header>
  );
}
