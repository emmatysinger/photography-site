import React from 'react';

//import icons
import {ImInstagram} from 'react-icons/im';

const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li>
        <a href='https://www.instagram.com/emmatysinger_photos/' target='_blank'>
          <ImInstagram />
        </a>
      </li>
    </ul>
  </div>;
};

export default Socials;
