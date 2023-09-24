import React, {useState} from 'react';

//import icons
import { IoMdClose } from 'react-icons/io';
import { RiMenuFill } from 'react-icons/ri';

//import link
import { Link } from 'react-router-dom';

//import motion
import { motion } from 'framer-motion';

// menu variants
const menuVariants = {
  hidden : {
    x: '100%'
  },
  show: {
    x: '0%',
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9]
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className='text-primary xl:hidden'>
      {/* nav open button */}
      <div onClick={()=> setOpenMenu(true)} className='text-3xl cursor-pointer'>
        <RiMenuFill />
      </div>
      {/* menu */}
      <motion.div 
        variants={menuVariants} 
        initial='hidden'
        animate={openMenu ? 'show' : ''}
        className='bg-white shadow-2xl w-full absolute top-0 
      right-0 max-w-screen h-screen z-20'>
        {/* icon */}
        <div onClick={()=> setOpenMenu(false)} className='text-4xl  right-10 top-10 absolute z-30
        text-primary cursor-pointer'>
          <IoMdClose />
        </div>
        <ul className='h-full flex flex-col justify-center 
        items-center gap-y-8 text-primary font-secondary font-bold text-[2rem]'>
          <li onClick={()=> setOpenMenu(false)}>
            <Link to='/'>Home</Link>
          </li>
          <li onClick={()=> setOpenMenu(false)}>
            <Link to='about/'>About</Link>
          </li>
          <li onClick={()=> setOpenMenu(false)}>
            <Link to='/work'>Portfolio</Link>
          </li>
          <li onClick={()=> setOpenMenu(false)}>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </motion.div>
    </nav>)
};

export default MobileNav;
