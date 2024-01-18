import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link} from 'react-router-dom';
import Logo from '../assets/logo1.jpg';





const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);

  };
  return (
   

      <div className='flex justify-between items-center h-24  mx-auto px-2  w-full text-white cursor-pointer'>
        <img src={Logo} height={100} width={100} className=' bg-[#EFBD48] bg-transparent  rounded-full mr-2 ml-1' />
        <h1 className='w-full text-3xl font-bold text-white'>DJB Global Company Limited</h1>
        <ul className='hidden md:flex'>
          <Link to="/"><li className='p-4 hover:scale-110 duration-300'>Home</li></Link>
          {/*<Link><li className='p-4 hover:scale-110 duration-300'>Company</li></Link> */}
          <Link><li className='p-4 hover:scale-110 duration-300'>Resources</li></Link> 
          <Link to='/about'><li className='p-4 hover:scale-110 duration-300'>About</li></Link>
          <Link to='/contact'><li className='p-4 hover:scale-110 duration-300'>Contact</li></Link>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>

          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#EFBD48] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>

          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Dj-b Global</h1>
          <Link to="/"><li className='p-4 border-b border-gray-600'>Home</li></Link>
          {/*<Link><li className='p-4 border-b border-gray-600'>Company</li></Link> */}
          <Link><li className='p-4 border-b border-gray-600'>Resources</li></Link>
          <Link to="/about"><li className='p-4 border-b border-gray-600'>About</li></Link>
          <Link to='/contact'><li className='p-4'>Contact</li></Link>
        </ul>
      </div>
    
  );
};

export default Navbar;
