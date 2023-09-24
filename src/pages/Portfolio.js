import React from 'react';
//import images
import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';

//import link
import { Link } from 'react-router-dom'

//import motion
import { motion } from 'framer-motion';
// import transition
import {transition1} from '../transitions'


const Portfolio = () => {
  return <motion.section 
    initial={{ opacity:0, y: '100%' }} 
    animate={{ opacity:1, y:0 }} 
    exit={{ opacity:0, y:'100%' }}
    transition={transition1}
    className='section'>
   <div className='container mx-auto h-full relative'>
    <div className='h-full items-center
    justify-center gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
      {/* text */}
      <motion.div 
        initial={{ opacity:0, y: '-80%' }} 
        animate={{ opacity:1, y:0 }} 
        exit={{ opacity:0, y:'-80%' }}
        transition={transition1}
        className='flex flex-col lg:items_start'>
        <h1 className='h1'>
          Yellowstone
        </h1>
        <p className='mb-12 max-w-sm'>
          August 2022 – Fujifilm X-T20
        </p>

      </motion.div>
      {/* image grid*/}
      <div className='grid grid-cols-2 gap-2'>
        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px]
      bg-accent overflow-hidden'>
          <img className='object-cover h-full lg:h-[220px] 
          hover:scale-110 transition-all duration-500' src={Image1} alt='' />
        </div>
        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px]
      bg-accent overflow-hidden'>
          <img className='object-cover h-full lg:h-[220px] 
          hover:scale-110 transition-all duration-500' src={Image2} alt='' />
        </div>
        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px]
      bg-accent overflow-hidden'>
          <img className='object-cover h-full lg:h-[220px] 
          hover:scale-110 transition-all duration-500' src={Image3} alt='' />
        </div>
        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px]
      bg-accent overflow-hidden'>
          <img className='object-cover h-full lg:h-[220px] 
          hover:scale-110 transition-all duration-500' src={Image4} alt='' />
        </div>
      </div>
    </div>
   </div>
  </motion.section>;
};

export default Portfolio;
