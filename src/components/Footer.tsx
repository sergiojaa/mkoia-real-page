import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [activeLink, setActiveLink] = useState('/');
  const navLinkColor = activeLink === '/about' || activeLink === '/services' || activeLink === '/contact' ? 'text-blue-500' : 'text-white';

  return (
    <div >
      <div className='md:mt-[80px] lg:h-[280px] md:h-[250px] w-full md:flex md:flex-row md:justify-between bg-gray-500'>
        <div>
          <p className='font-poppins lg:w-[300px] xl:w-[300px] ml-[20px]  md:ml-[150px] w-[20px]  text-white md:text-[25px] md:mb-[100px] md:mt-[110px]'>
            © 2024 «შ.პ.ს ემკოია» <br /> ყველა უფლება დაცულია.
          </p>
        </div>
        <div className='md:mt-[110px] lg:flex lg:ml-[200px] xl:flex   md:mr-[300px]'>
          <div className="  ml-[20px]  pb-[10px]">
          <Link
              to='/'
              onClick={() => setActiveLink('/')}
              className={` text-white font-poppins ${navLinkColor} md:mr-[30px] flex flex-col text-xl pb-1 transition duration-300 hover:text-gray-600 
              `}
            >
              Home
            </Link>
            <Link
              to='/about'
              onClick={() => setActiveLink('/about')}
              className={` text-white font-poppins ${navLinkColor} text-xl  md:pb-1 md:mr-[30px] transition duration-300 hover:text-gray-600 
                
              }`}
            >
              About
            </Link>
          </div>
          <div className="ml-[20px]">
          <Link
              to='/services'
              onClick={() => setActiveLink('/services')}
              className={`text-white font-poppins ${navLinkColor} flex flex-col text-xl pb-1 md:mr-[30px] transition duration-300 hover:text-gray-600 
                
              }`}
            >
              Services
            </Link>
            <Link
              to='/contact'
              onClick={() => setActiveLink('/contact')}
              className={` text-white font-poppins ${navLinkColor} text-xl pb-1 transition duration-300 hover:text-gray-600 `}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
