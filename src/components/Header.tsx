import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

interface HeaderProps {
  activeLink: string;
  setActiveLink: (link: string) => void;
}

export default function Header({ activeLink, setActiveLink }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [copyNotification, setCopyNotification] = useState(false);

  // Define colors for different active states
  const isHome = activeLink === '/';
  const navLinkColor = isHome ? 'text-white' : 'text-gray-500';
  const hamburgerColor = isHome ? 'bg-white' : 'bg-gray-500';

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCopy = () => {
    const textToCopy = 'K.mchedlishvili@mkoia.ge';
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopyNotification(true);
        setTimeout(() => {
          setCopyNotification(false);
        }, 1000); // Hide the message after 2 seconds
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <header className="absolute top-0 left-0 w-full z-10 bg-transparent">
      <div className='flex items-center justify-between max-w-screen-xl mx-auto px-4'>
        <div className='flex items-center mt-[20px] justify-between w-full'>
          <Link to={'/'} onClick={() => setActiveLink('/')}>
            <img className='cursor-pointer xl:ml-[100px] w-[80px] ml-[50px]' src={logo} alt="Logo" />
          </Link>

          {/* Hamburger icon for mobile */}
          <div
            className='lg:hidden ml-4 cursor-pointer'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={`h-1 w-8 mb-1 ${hamburgerColor}`}></div>
            <div className={`h-1 w-8 mb-1 ${hamburgerColor}`}></div>
            <div className={`h-1 w-8 ${hamburgerColor}`}></div>
          </div>

          {/* Desktop Navigation */}
          {!menuOpen && (
            <div className='items-center lg:mr-[100px] xl:mr-[300px] ml-6 hidden lg:flex'>
              <Link to='/' onClick={() => setActiveLink('/')} className={`font-poppins ${navLinkColor} mr-6 text-xl pb-1 transition duration-300 hover:text-gray-400 ${activeLink === '/' ? 'border-b-2 border-white' : ''}`}>
                Home
              </Link>
              <Link to='/about' onClick={() => setActiveLink('/about')} className={`font-poppins ${navLinkColor} text-xl pb-1 mr-6 transition duration-300 hover:text-gray-400 ${activeLink === '/about' ? 'border-b-2 border-white' : ''}`}>
                About
              </Link>
              <Link to='/services' onClick={() => setActiveLink('/services')} className={`font-poppins ${navLinkColor} text-xl pb-1 mr-6 transition duration-300 hover:text-gray-400 ${activeLink === '/services' ? 'border-b-2 border-white' : ''}`}>
                Services
              </Link>
              <Link to='/contact' onClick={() => setActiveLink('/contact')} className={`font-poppins ${navLinkColor} text-xl pb-1 transition duration-300 hover:text-gray-400 ${activeLink === '/contact' ? 'border-b-2 border-white' : ''}`}>
                Contact
              </Link>
            </div>
          )}
        </div>

        {/* Contact information and language selector */}
        <div className='items-center mt-[25px] hidden lg:flex '>
          {/* <h1 className={`font-poppins text-xl cursor-pointer transition duration-300 hover:text-gray-400 ${navLinkColor}`} onClick={handleCopy}>
            K.mchedlishvili@mkoia.ge
          </h1> */}
          {copyNotification && <span className='ml-4 text-white '>Email copied!</span>}
          <div className={`mr-6 flex items-center ml-6 cursor-pointer transition duration-300 hover:text-gray-400 ${navLinkColor}`}>
            <span className='mr-1 font-poppins text-xl'>ქა</span>
            <FontAwesomeIcon icon={faLanguage} />
          </div>
        </div>
      </div>

      {activeLink !== '/' && <div className='mt-[20px] h-[1px] w-full bg-gray-500'></div>}

      {/* Dropdown menu for mobile */}
      {menuOpen && (
  <div className='flex flex-col items-center bg-transparent p-4'>
    <div className='flex flex-wrap justify-between w-full gap-1 '>
      <Link 
        to='/' 
        onClick={() => { setActiveLink('/'); setMenuOpen(false); }} 
        className={`w-1/3 text-center p-1 rounded-lg mb-2 hover:bg-gray-200 ${navLinkColor}`}
      >
        Home
      </Link>
      <Link 
        to='/about' 
        onClick={() => { setActiveLink('/about'); setMenuOpen(false); }} 
        className={`w-1/3 text-center p-1 rounded-lg mb-2 hover:bg-gray-200 ${navLinkColor}`}
      >
        About
      </Link>
      <Link 
        to='/services' 
        onClick={() => { setActiveLink('/services'); setMenuOpen(false); }} 
        className={`w-1/3 text-center p-1 rounded-lg mb-2 hover:bg-gray-200 ${navLinkColor}`}
      >
        Services
      </Link>
      <Link 
        to='/contact' 
        onClick={() => { setActiveLink('/contact'); setMenuOpen(false); }} 
        className={`w-1/3 text-center p-1 rounded-lg mb-2 hover:bg-gray-200 ${navLinkColor}`}
      >
        Contact
      </Link>
      {/* <h1 
        className={`w-1/3 text-center p-1 font-poppins text-lg cursor-pointer mb-2 hover:bg-gray-200 ${navLinkColor}`} 
        onClick={handleCopy}
      >
        K.mchedlishvili@mkoia.ge
      </h1> */}
      <div 
        className={`w-1/3 flex justify-center items-center p-1 cursor-pointer mb-2 hover:bg-gray-200 ${navLinkColor}`}
      >
        <span className='mr-1 font-poppins text-lg'>ქა</span>
        <FontAwesomeIcon icon={faLanguage} />
      </div>
    </div>
  </div>
)}

    </header>
  );
}
