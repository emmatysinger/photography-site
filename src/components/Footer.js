import React, {useContext} from 'react';

import Socials from './Socials';
import Logo from '../img/header/logo.svg';
import MobileNav from './MobileNav';

import { Link } from 'react-router-dom'
import { CursorContext } from '../context/CursorContext';

const Footer = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);

  return <footer className='absolute bg-blue-50 footer w-full px-[30px] 
  lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
    <div className='flex flex-col lg:flex-row
    lg:items-center w-full justify-between'>
        Hello this is the footer!
    </div>
    {/* socials */}
    <Socials />
  </footer>
};

export default Footer;
