import React from 'react';
//import images

import cover1 from '../img/work/cover1.jpg'
import cover2 from '../img/work/cover2.jpg'
import cover3 from '../img/work/cover3.jpg'
import cover4 from '../img/work/cover4.jpg'
import cover5 from '../img/work/cover5.jpg'
import cover6 from '../img/work/cover6.jpg'

//import link
import { Link } from 'react-router-dom';
//import motion
import { motion } from 'framer-motion';
// import transition
import {transition1} from '../transitions';

const Work = () => {
    let data = [
        { id: 1, imgSrc: cover1, coverName: 'Boston', link:'/'},
        { id: 2, imgSrc: cover2, coverName: 'Yellowstone 1', link:'/'},
        { id: 3, imgSrc: cover3, coverName: 'Graduation', link:'/graduation'},
        { id: 4, imgSrc: cover4, coverName: 'Acadia', link:'/'},
        { id: 5, imgSrc: cover5, coverName: 'Yellowstone 2', link:'/'},
        { id: 6, imgSrc: cover6, coverName: 'Cape Cod', link:'/'},
    ];

    return (
        <motion.section 
            initial={{ opacity:0 }} 
            animate={{ opacity:1 }} 
            exit={{ opacity:0 }}
            transition={transition1}
            className='section overflow-scroll'>
            <div className='items-center px-16 h-full pt-[100px] lg:pt-[140px] relative'>
                {/* image grid */}
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[4%] aspect-cover'>
                    {data.map((item, index) => {
                        return(
                            <motion.div 
                                initial={{ scale:0.8 }} 
                                animate={{ scale:1 }} 
                                exit={{ opacity:0 }}
                                transition={transition1}
                                className="group justify-center items-center w-full h-full relative">
                                <img className="object-cover h-full w-full" src={item.imgSrc} alt='' />
                                <Link className='cover' to={item.link}>
                                    <p>{item.coverName}</p>
                                </Link>
                            </motion.div>    
                        )
                    })}

                </div>
            </div>
        </motion.section>
    );
};
export default Work;

    



{/*<div className='bg-blue-50 flex justify-center items-center overflow-hidden h-full'>
<img className='object-cover'
src={cover6} alt='' />*/}