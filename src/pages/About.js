import React, {useContext} from 'react';
//import images
import EmmaImg from '../img/about/EPT-71.jpg';

//import link
import { Link } from 'react-router-dom';

//import motion
import { motion } from 'framer-motion';
// import transition
import {transition1} from '../transitions'
import { CursorContext } from '../context/CursorContext';

const About = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);
  return <motion.section 
    initial={{ opacity:0, y: '100%' }} 
    animate={{ opacity:1, y:0 }} 
    exit={{ opacity:0, y:'100%' }}
    transition={transition1}
    className='section overflow-scroll'>
    <div className='container mx-auto relative pt-[100px] lg:pt-[140px] h-full'>
      {/*text & img wrapper */}
      <div className='flex flex-col lg:flex-row h-full items-center lg:items-start
      justify-center gap-x-16 gap-y-16 text-center lg:text-left pb-100'>
        {/*image*/}
        {/*<div className='flex-1 justify-end max-h-full lg:max-h-max'>
          <div className='relative lg:-right-40 md:max-w-[32rem] overflow-hidden'>
            <img src={EmmaImg} alt='' />
          </div>
        </div>*/}
        <div className='bg-pink-200 lg:flex-auto max-w-md lg:max-h-full order-2 lg:order-none'>
          <img className='object-cover h-full w-full'
          src={EmmaImg} alt='' />
        </div>
        {/*text*/}
        <motion.div 
          initial={{ opacity:0, y: '-80%' }} 
          animate={{ opacity:1, y:0 }} 
          exit={{ opacity:0, y:'0%' }}
          transition={transition1}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col
          justify-center items-center lg:items-start'>
          <h1 className='h1'>
            Welcome! <br /> Bienvenue! 
          </h1>
          <p className='mb-12 max-w-md'>
          I’m Emma, a current student at MIT studying computer science and biology, 
          with a love for photography. I grew up surrounded by nature in Norwich, 
          Vermont and spend many summers on the beach in France. In my free time I love to bake, 
          play the piano and watch sunsets. 
          <br />
          <br />
          I first fell in love with 
          photography in high school when I received my first camera, a Canon G7X, 
          as a gift. I would shoot many photos in my backyard and of my dog. 
          Through a couple high school and college classes, I’ve had the chance to 
          explore a variety of genres and shoot film. I currently love to shoot 
          travel, architectural and urban photography. 
          <br /> 
          <br />
          I always encourage 
          feedback and critique so please reach out if anything you see catches 
          your eye. 
          </p>
          <br />
          <Link to={'/work'} className='btn'>
            View my work</Link>
        </motion.div>
        
        
      </div>
    </div>
  </motion.section>;
};

export default About;
