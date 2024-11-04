import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Header() {
  const [activeLink, setActiveLink] = useState('/');

  return (
    <div className="absolute top-0 left-0 w-full z-10 bg-transparent"> {/* Set to absolute with full width */}
      <div className='flex items-center'>
        <div className='mr-[100px] ml-[150px] mt-[20px]'>
          <Link to={'/'} onClick={() => setActiveLink('/')}>
            <img className='cursor-pointer w-[100px]' src={logo} alt="Logo" />
          </Link>
        </div>
        <div className='flex items-center'>
          <div className='flex items-center mt-[20px]'>
            <Link
              to='/'
              onClick={() => setActiveLink('/')}
              className={`font-poppins text-white mr-[30px] text-xl ${activeLink === '/' ? 'border-b-2 border-blue-500' : ''} pb-1 transition duration-300 hover:text-gray-600`}
            >
              Home
            </Link>
            <Link
              to='/about'
              onClick={() => setActiveLink('/about')}
              className={`font-poppins text-white text-xl ${activeLink === '/about' ? 'border-b-2 border-blue-500' : ''} pb-1 mr-[30px] transition duration-300 hover:text-gray-600`}
            >
              About
            </Link>
            <Link
              to='/services'
              onClick={() => setActiveLink('/services')}
              className={`font-poppins text-white text-xl ${activeLink === '/services' ? 'border-b-2 border-blue-500' : ''} pb-1 mr-[30px] transition duration-300 hover:text-gray-600`}
            >
              Services
            </Link>
            <Link
              to='/contact'
              onClick={() => setActiveLink('/contact')}
              className={`font-poppins text-white text-xl ${activeLink === '/contact' ? 'border-b-2 text-white' : ''} pb-1 transition duration-300 hover:text-gray-600`}
            >
              Contact
            </Link>
          </div>
          <div className='mt-[25px] flex ml-[400px] text-white'>
            <div>
              <h1 className='font-poppins text-xl cursor-pointer transition duration-300 hover:text-gray-600'>K.mchedlishvili@mkoia.ge</h1>
            </div>
            <div className='mr-[60px] flex items-center ml-[50px] cursor-pointer transition duration-300 hover:text-gray-600'>
              <span className='mr-[5px] font-poppins text-xl'>ქა</span>
              <FontAwesomeIcon icon={faLanguage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
