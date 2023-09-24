import React, { useContext } from 'react';

import Socials from './Socials';
import Logo from '../img/header/logo.svg';
import MobileNav from './MobileNav';

import { Link } from 'react-router-dom';
import { CursorContext } from '../context/CursorContext';

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        {/* logo */}
        <Link to={'/'} className='text-[#696c6d] hover:text-primary transition font-primary'>
          Emma Tysinger Photography
        </Link>
        {/* nav - initially hidden - show on desktop mode */}
        <nav onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className='hidden xl:flex gap-x-9 text-primary font-primary font-semibold'>
          <Link to={'/about'} className='text-[#696c6d] hover:text-primary transition'>
            About
          </Link>
          <Link to={'/'} className='text-[#696c6d] hover:text-primary transition'>
            Portfolio
          </Link>
          <Link to={'/contact'} className='text-[#696c6d] hover:text-primary transition'>
            Contact
          </Link>
        </nav>
      </div>
      {/* socials */}
      <Socials />
      {/* mobile nav */}
      <MobileNav />
    </header>
  );
};

export default Header;
