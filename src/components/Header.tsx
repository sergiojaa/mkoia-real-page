import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
{/* <FontAwesomeIcon icon="fa-solid fa-language" /> */}
export default function Header() {
  return (
    <div>
      <div className='flex   items-center'>
        <div className=' mr-[100px] ml-[100px] mt-[20px] '>
          <img
            className='cursor-pointer w-[100px] '
            src={logo}
            alt="Logo"
          />
        </div>
        <div className='flex items-center '>
        <div className='  flex items-center space-x-4 mt-[20px]  '>
            <h1 className='text-blue-500 text-xl pr-[30px] ' >Home</h1>
            <h1 className='text-blue-500 text-xl ' >About us</h1>

            <h1 className='text-blue-500 text-xl pr-[30px] pl-[30px] '>Services</h1>
            <h1 className='text-blue-500 text-xl'>Contact</h1>
        </div>
        <div className='mt-[25px] flex ml-[500px] text-blue-500  '>
            <div>
            <h1>K.mchedlishvili@mkoia.ge</h1>

            </div>
            <div className='ml-[30px]'>
             <span className='mr-[5px]'>ქა</span><FontAwesomeIcon icon={faLanguage} />

            </div>
        </div>
        </div>
       
      </div>
    </div>
  );
}
